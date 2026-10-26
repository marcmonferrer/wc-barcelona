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
    document.querySelectorAll('[data-text]').forEach(node => { node.textContent = node.dataset.text === 'count' ? t.count.replace('{count}', String(places.length)) : t[node.dataset.text]; });
    document.querySelectorAll('[data-label]').forEach(node => { node.setAttribute('aria-label', t[node.dataset.label]); });
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    list.replaceChildren(...places.map(place => {
      const item = element('li');
      const card = element('article', null, 'place');
      card.setAttribute('aria-labelledby', place.id);
      const heading = element('div', null, 'place-heading');
      const identity = element('div');
      const name = element('h3', place.name);
      name.id = place.id;
      if (place.id === 'restaurant-muc') {
        const [restaurant, hotel] = place.name.split(' · ');
        name.replaceChildren(element('span', restaurant), element('span', ' · ', 'sr-only'), element('span', hotel, 'place-subtitle'));
      }
      const areaStart = place.officialNeighborhood ? place.address.lastIndexOf(`, ${place.officialNeighborhood}`) : -1;
      const address = element('p', null, 'address');
      address.lang = 'ca';
      address.append(element('span', areaStart < 0 ? place.address : place.address.slice(0, areaStart), 'address-street'));
      if (areaStart >= 0) address.append(document.createTextNode(' '), element('span', place.address.slice(areaStart + 2), 'address-area'));
      identity.append(name, address);
      heading.append(identity);
      card.append(heading);
      if (place.warning) card.append(element('p', t[place.warning === true ? 'stepWarning' : place.warning], 'step-warning'));
      if (place.usageNote) card.append(element('p', t[place.usageNote], 'usage-note'));
      const details = element('dl', null, 'details');
      for (const [label, value] of [['access', place.access], ['interior', place.interior], ['conditions', place.conditions || 'conditionsText'], ['source', place.source || 'sourceText']]) {
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
