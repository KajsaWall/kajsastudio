/* Native disclosures remain readable without JavaScript; enhanced reading uses a modal. */
(() => {
 const root = document.querySelector('.ht-design');
 if (!root) return;
 const cards = Array.from(root.querySelectorAll('.ht-card'));
 const canUseDialog = typeof HTMLDialogElement !== 'undefined' && typeof HTMLDialogElement.prototype.showModal === 'function';
 let dialog, dialogTitle, dialogEyebrow, dialogBody, bookingLink;
 let returnFocus = null;
 let returnScroll = 0;
 const readers = new Map();
 if (canUseDialog) {
  dialog = document.createElement('dialog');
  dialog.id = 'hv-reading-dialog';
  dialog.className = 'hv-reading-dialog';
  dialog.setAttribute('aria-labelledby','hv-reading-title');
  const head = document.createElement('header');
  head.className = 'hv-dialog-head';
  const titles = document.createElement('div');
  dialogEyebrow = document.createElement('span');
  dialogEyebrow.className = 'hv-dialog-eyebrow';
  dialogTitle = document.createElement('h2');
  dialogTitle.id = 'hv-reading-title';
  titles.append(dialogEyebrow, dialogTitle);
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'hv-dialog-close';
  close.setAttribute('aria-label','Stäng läsrutan');
  close.autofocus = true;
  close.append(document.createTextNode('Stäng '));
  const cross = document.createElement('span');
  cross.setAttribute('aria-hidden','true');
  cross.textContent = '×';
  close.append(cross);
  close.addEventListener('click',()=>dialog.close());
  head.append(titles,close);
  dialogBody = document.createElement('div');
  dialogBody.className = 'hv-dialog-body';
  dialogBody.tabIndex = 0;
  dialogBody.setAttribute('role','region');
  dialogBody.setAttribute('aria-label','Behandlingsbeskrivning');
  const footer = document.createElement('div');
  footer.className = 'hv-dialog-footer';
  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'hv-dialog-back';
  back.textContent = 'Tillbaka till sidan';
  back.addEventListener('click',()=>dialog.close());
  bookingLink = document.createElement('a');
  bookingLink.className = 'ht-button';
  footer.append(back,bookingLink);
  dialog.append(head,dialogBody,footer);
  root.append(dialog);
  dialog.addEventListener('close',()=>{
   document.documentElement.classList.remove('hv-reader-open');
   window.scrollTo({top:returnScroll,behavior:'instant'});
   if (returnFocus && returnFocus.isConnected) returnFocus.focus({preventScroll:true});
  });
  dialog.addEventListener('click',event=>{
   if (event.target !== dialog) return;
   const rect = dialog.getBoundingClientRect();
   if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
 }
 function showReader(entry, opener) {
  if (!canUseDialog) return false;
  const copy = entry.source.cloneNode(true);
  copy.className = 'hv-dialog-copy';
  copy.removeAttribute('id');
  copy.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
  copy.querySelectorAll('.ht-body-action').forEach(el=>el.remove());
  dialogTitle.textContent = entry.title;
  dialogEyebrow.textContent = entry.technique ? 'Helanova · Massageteknik' : 'Helanova · Våra behandlingar';
  bookingLink.href = entry.practical ? 'mailto:info@helanova.nu' : 'https://helahuma.hlthy.se/booking';
  bookingLink.textContent = entry.practical ? 'Kontakta oss →' : entry.technique ? 'Boka massage →' : 'Boka tid →';
  dialogBody.replaceChildren(copy);
  if (!dialog.open) {
   returnFocus = opener || document.activeElement;
   returnScroll = window.scrollY;
   document.documentElement.classList.add('hv-reader-open');
   dialog.showModal();
  }
  dialogBody.scrollTop = 0;
  return true;
 }
 if (canUseDialog) {
  root.querySelectorAll('.hv-expand, .ht-accordion details').forEach(disclosure=>{
   const summary = disclosure.querySelector('summary');
   const source = disclosure.querySelector('.hv-full, .ht-tech-copy');
   if (!summary || !source) return;
   const article = disclosure.closest('.hv-story');
   const technique = !article;
   const title = article ? article.querySelector('h2').textContent : summary.textContent.trim();
   const entry = {source,title,technique,practical:article && article.id === 'friskvard-id'};
   const button = document.createElement('button');
   button.type = 'button';
   button.className = technique ? 'hv-read-button hv-tech-button' : 'hv-read-button';
   button.setAttribute('aria-haspopup','dialog');
   button.setAttribute('aria-controls',dialog.id);
   button.append(...Array.from(summary.childNodes,child=>child.cloneNode(true)));
   button.addEventListener('click',()=>showReader(entry,button));
   disclosure.before(button);
   disclosure.hidden = true;
   if (article) readers.set(article.id,{entry,button,article});
  });
 }
 function reveal(id,moveFocus,opener) {
  const target = document.getElementById(id);
  if (!target || !root.contains(target)) return false;
  const reader = readers.get(id);
  if (reader) return showReader(reader.entry,opener || reader.button);
  const disclosure = target.querySelector('.hv-expand');
  if (disclosure) disclosure.open = true;
  if (moveFocus) {
   target.scrollIntoView({block:'start',behavior:'auto'});
   const heading = target.querySelector('h2');
   if (heading) { heading.setAttribute('tabindex','-1'); heading.focus({preventScroll:true}); }
  }
  return true;
 }
 cards.forEach(card=>{
  const id = card.hash.slice(1);
  card.setAttribute('aria-controls',readers.has(id) ? dialog.id : id);
  if (readers.has(id)) card.setAttribute('aria-haspopup','dialog');
  card.addEventListener('click',event=>{
   if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
   event.preventDefault();
   if (!reveal(id,true,card)) return;
   if (!readers.has(id) && location.hash !== '#'+id) history.pushState(null,'','#'+id);
  });
 });
 function fromHash() {
  const id = location.hash.slice(1);
  if (!cards.some(card=>card.hash === '#'+id)) return;
  const reader = readers.get(id);
  if (reader) reader.article.scrollIntoView({block:'start',behavior:'auto'});
  reveal(id,true,reader && reader.button);
 }
 window.addEventListener('hashchange',fromHash);
 window.addEventListener('popstate',fromHash);
 if (cards.some(card=>card.hash === location.hash)) requestAnimationFrame(fromHash);
})();
