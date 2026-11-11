document.getElementById('hp-load-booking')?.addEventListener('click', function () {
 const frame = document.getElementById('hp-book-frame');
 frame.src = frame.dataset.src;
 frame.hidden = false;
 this.setAttribute('aria-expanded', 'true');
 document.getElementById('hp-book-intro').hidden = true;
 frame.focus();
});
