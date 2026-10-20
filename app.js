(() => {
  'use strict';
  const { places, translations } = window.WC_BARCELONA;
  const list = document.getElementById('places');

  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function render(language, announce = false) {
    const t = translations[language];
    document.documentElement.lang = language;
    document.title = t.title;
    document.querySelector('meta[name="description"]').content = t.description;
    document.querySelectorAll('[data-text]').forEach(node => { node.textContent = t[node.dataset.text]; });
    document.querySelectorAll('[data-label]').forEach(node => { node.setAttribute('aria-label', t[node.dataset.label]); });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    list.replaceChildren(...places.map((place, index) => {
      const item = element('li');
      const card = element('article', null, 'place');
      card.setAttribute('aria-labelledby', place.id);
      const heading = element('div', null, 'place-heading');
      heading.append(element('span', String(index + 1).padStart(2, '0'), 'place-number'));
      const identity = element('div');
      const name = element('h3', place.name);
      name.id = place.id;
      const address = element('p', place.address, 'address');
      address.lang = 'ca';
      identity.append(name, address);
      heading.append(identity);
      card.append(heading);
      if (place.warning) card.append(element('p', t.stepWarning, 'step-warning'));
      const details = element('dl', null, 'details');
      for (const [label, value] of [['access', place.access], ['interior', place.interior], ['conditions', 'conditionsText'], ['source', 'sourceText']]) {
        const row = element('div', null, 'detail');
        row.append(element('dt', t[label]), element('dd', t[value]));
        details.append(row);
      }
      const link = element('a', null, 'maps-link');
      link.href = place.maps;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.append(element('span', t.maps));
      const arrow = element('span', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      link.append(arrow, element('span', ` — ${place.name}; ${t.newTab}`, 'sr-only'));
      card.append(details, link);
      item.append(card);
      return item;
    }));
    if (announce) document.getElementById('language-status').textContent = t.languageChanged;
  }

  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => render(button.dataset.language, true));
  });
  render('ca');
})();
