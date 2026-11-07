'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');
class Node {
  constructor(tag = '#text', text = '') { this.tagName = tag.toUpperCase(); this.textContent = text; this.children = []; this.dataset = {}; this.attributes = {}; this.listeners = {}; this.open = false; }
  append(...children) { for (const child of children) { child.parentElement = this; this.children.push(child); } }
  replaceChildren(...children) { this.children = []; this.append(...children); }
  setAttribute(name, value) { this.attributes[name] = value; }
  addEventListener(name, fn) { this.listeners[name] = fn; }
  querySelectorAll(selector) { return descendants(this).filter(n => selector === 'details[open]' && n.tagName === 'DETAILS' && n.open); }
  scrollIntoView() { this.scrolled = true; }
}
function descendants(n) { return n.children.flatMap(c => [c, ...descendants(c)]); }
function harness(code, data) {
  const nodes = Object.fromEntries(['places', 'directory-help', 'language-status'].map(id => [id, new Node('div')]));
  const buttons = ['ca', 'es', 'en'].map(language => { const n = new Node('button'); n.dataset.language = language; return n; });
  const doc = { documentElement: {}, createElement: tag => new Node(tag), createTextNode: text => new Node('#text', text), getElementById: id => nodes[id] || descendants(nodes.places).find(n => n.id === id), querySelector: () => ({}), querySelectorAll: selector => selector === '[data-language]' ? buttons : [] };
  const window = { WC_BARCELONA: data, location: { hash: '' }, addEventListener: () => {} };
  vm.runInNewContext(code, { window, document: doc });
  return { nodes, buttons };
}
function cardSnapshot(n) {
  return { tag: n.tagName === 'H5' ? 'H3' : n.tagName, text: n.textContent, id: n.id, className: n.className, lang: n.lang, href: n.href, target: n.target, rel: n.rel, attributes: n.attributes, children: n.children.map(cardSnapshot) };
}
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync('data.js', 'utf8'), sandbox);
const data = sandbox.window.WC_BARCELONA;
const code = fs.readFileSync('app.js', 'utf8');
const base = execFileSync('git', ['show', '0878c56:app.js'], { encoding: 'utf8' });
const current = harness(code, data), original = harness(base, data);
assert.equal(data.places.length, 21);
assert.equal(new Set(data.places.map(p => p.id)).size, 21);
for (let i = 0; i < 3; i++) {
  current.buttons[i].listeners.click(); original.buttons[i].listeners.click();
  const articles = descendants(current.nodes.places).filter(n => n.tagName === 'ARTICLE');
  const old = descendants(original.nodes.places).filter(n => n.tagName === 'ARTICLE');
  assert.equal(articles.length, 21);
  for (const card of articles) assert.deepEqual(cardSnapshot(card), cardSnapshot(old.find(n => n.attributes['aria-labelledby'] === card.attributes['aria-labelledby'])));
  assert.equal(current.nodes.places.children.length, 2);
  assert.deepEqual(current.nodes.places.children.map(n => descendants(n).filter(c => c.tagName === 'ARTICLE').length), [20, 1]);
  assert.deepEqual(descendants(current.nodes.places).filter(n => n.tagName === 'UL').map(n => n.children.length), [4, 1, 14, 1, 1]);
  assert.equal(descendants(current.nodes.places).filter(n => n.tagName === 'DETAILS').length, 7);
  assert.ok(current.nodes['directory-help'].textContent.length > 20);
  assert.ok(!current.nodes['directory-help'].textContent.includes('undefined'));
}
const groups = descendants(current.nodes.places).filter(n => n.tagName === 'DETAILS');
groups[0].open = true; groups[1].open = true;
current.buttons[0].listeners.click();
assert.equal(current.nodes.places.querySelectorAll('details[open]').length, 2);
const fallback = structuredClone(data);
fallback.compact.addresses[fallback.places[0].id].neighborhood = 'Unconfirmed area';
const unknown = harness(code, fallback);
assert.equal(descendants(unknown.nodes.places).filter(n => n.tagName === 'ARTICLE').length, 21);
assert.ok(descendants(unknown.nodes.places).some(n => n.textContent === 'Districte pendent de confirmar'));
for (const file of ['data.js', 'analytics.js', 'analytics.css', 'analytics-config.js']) {
  assert.equal(fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n'), execFileSync('git', ['show', `0878c56:${file}`], { encoding: 'utf8' }).replace(/\r\n/g, '\n'));
}
console.log('PASS: all 21 full cards match release in CA/ES/EN; 2 districts, 5 neighborhoods, counts, open-state retention, unknown fallback, unchanged data and analytics.');
