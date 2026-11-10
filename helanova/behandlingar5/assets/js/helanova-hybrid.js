/* All treatment introductions and native disclosures work without JavaScript. */
(() => {
 const root = document.querySelector('.ht-design');
 if (!root) return;
 const cards = Array.from(root.querySelectorAll('.ht-card'));
 function reveal(id, moveFocus) {
  const target = document.getElementById(id);
  if (!target || !root.contains(target)) return false;
  const disclosure = target.querySelector('.hv-expand');
  if (disclosure) disclosure.open = true;
  if (moveFocus) {
   target.scrollIntoView({block:'start',behavior:'auto'});
   const heading = target.querySelector('h2');
   if (heading) { heading.setAttribute('tabindex','-1'); heading.focus({preventScroll:true}); }
  }
  return true;
 }
 cards.forEach(card => {
  const id = card.hash.slice(1);
  card.setAttribute('aria-controls',id);
  card.addEventListener('click',event => {
   if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
   event.preventDefault();
   if (!reveal(id,true)) return;
   if (location.hash !== '#'+id) history.pushState(null,'','#'+id);
  });
 });
 function fromHash() { const id = location.hash.slice(1); if (cards.some(card => card.hash === '#'+id)) reveal(id,true); }
 window.addEventListener('hashchange',fromHash);
 window.addEventListener('popstate',fromHash);
 if (cards.some(card => card.hash === location.hash)) requestAnimationFrame(fromHash);
})();
