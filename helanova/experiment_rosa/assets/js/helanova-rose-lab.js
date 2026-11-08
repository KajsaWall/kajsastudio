(function () {
  'use strict';
  const allowed = ['detail', 'powder', 'plum'];
  const query = new URLSearchParams(location.search).get('rosa');
  let stored;
  try { stored = localStorage.getItem('helanova-rose-experiment'); } catch (_) {}
  const initial = allowed.includes(query) ? query : allowed.includes(stored) ? stored : 'powder';
  document.documentElement.dataset.rose = initial;
  function apply(theme) {
    document.documentElement.dataset.rose = theme;
    document.querySelectorAll('[data-rose-choice]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.roseChoice === theme)));
    try { localStorage.setItem('helanova-rose-experiment', theme); } catch (_) {}
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!/^(index|personal)\.html(?:[?#]|$)/.test(href)) return;
      const [path, hash] = href.split('#');
      const [file, search] = path.split('?');
      const params = new URLSearchParams(search || '');
      params.set('rosa', theme);
      link.setAttribute('href', file + '?' + params.toString() + (hash ? '#' + hash : ''));
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-rose-choice]').forEach(button => button.addEventListener('click', () => apply(button.dataset.roseChoice)));
    apply(initial);
  });
})();
