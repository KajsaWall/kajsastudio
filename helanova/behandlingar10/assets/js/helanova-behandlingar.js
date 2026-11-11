/* Progressive enhancement: all treatment texts remain available without JavaScript. */
(() => {
  const root = document.querySelector('.ht-design');
  if (!root) return;
  const cards = Array.from(root.querySelectorAll('.ht-card'));
  const sections = Array.from(root.querySelectorAll('.ht-detail'));
  const tools = root.querySelector('.ht-reader-tools');
  const choice = root.querySelector('#ht-treatment-choice');
  const byId = new Map(sections.map(section => [section.id, section]));
  let active = sections[0].id;
  cards.forEach(card => {
    const id = card.hash.slice(1);
    card.setAttribute('aria-controls', id);
    const option = document.createElement('option');
    option.value = id;
    option.textContent = card.querySelector('h3').textContent;
    choice.append(option);
    card.addEventListener('click', event => {
      // Preserve native open-in-new-tab and modified link behavior.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      navigate(id);
    });
  });
  function activate(id) {
    if (!byId.has(id)) return false;
    active = id;
    sections.forEach(section => { section.hidden = section.id !== id; });
    cards.forEach(card => {
      if (card.hash === '#' + id) card.setAttribute('aria-current', 'true');
      else card.removeAttribute('aria-current');
    });
    choice.value = id;
    return true;
  }
  function focusSection(id) {
    const section = byId.get(id);
    section.scrollIntoView({block: 'start', behavior: 'auto'});
    const heading = section.querySelector('h2');
    heading.setAttribute('tabindex', '-1');
    heading.focus({preventScroll: true});
  }
  function navigate(id) {
    if (!activate(id)) return;
    if (location.hash !== '#' + id) history.pushState(null, '', '#' + id);
    focusSection(id);
  }
  choice.addEventListener('change', () => navigate(choice.value));
  function fromHash(scroll) {
    const id = location.hash.slice(1);
    if (activate(id) && scroll) focusSection(id);
  }
  // Hash navigation includes browser back/forward and incoming anchors from other pages.
  window.addEventListener('hashchange', () => fromHash(true));
  window.addEventListener('popstate', () => {
    if (!location.hash) { activate(sections[0].id); return; }
    fromHash(true);
  });
  activate(byId.has(location.hash.slice(1)) ? location.hash.slice(1) : active);
  tools.hidden = false;
  if (byId.has(location.hash.slice(1))) requestAnimationFrame(() => focusSection(active));
})();
