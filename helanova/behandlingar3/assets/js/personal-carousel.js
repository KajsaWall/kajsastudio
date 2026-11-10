(function (scope) {
  'use strict';
  scope.createHelanovaCarousel = function ({ track, dots, onChange }) {
    const original = Array.from(track.children);
    const count = original.length;
    if (!count) return { go() {} };
    let current = 0;
    let dragging = false;
    let settleTimer;
    let lastWidth = 0;
    const modulo = index => ((index % count) + count) % count;
    function sentinel(item) {
      const copy = item.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      copy.setAttribute('data-loop-copy', '');
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      copy.querySelectorAll('a,button,input,select,textarea,[tabindex]').forEach(el => el.setAttribute('tabindex', '-1'));
      return copy;
    }
    if (count > 1) {
      track.prepend(sentinel(original[count - 1]));
      track.append(sentinel(original[0]));
    }
    const offset = count > 1 ? 1 : 0;
    const items = Array.from(track.children);
    function position(index) {
      const bounds = track.getBoundingClientRect();
      const item = items[index].getBoundingClientRect();
      return item.left - bounds.left + track.scrollLeft - (track.clientWidth - item.width) / 2;
    }
    function notify(index) {
      current = modulo(index);
      items.forEach((item, i) => item.setAttribute('data-active', String(modulo(i - offset) === current)));
      dots.querySelectorAll('button').forEach((button, i) => button.setAttribute('aria-pressed', String(i === current)));
      onChange(current);
    }
    function move(index, behavior) {
      if (track.clientWidth > 0) track.scrollTo({ left: position(index), behavior });
    }
    function nearest() {
      let found = 0;
      let distance = Infinity;
      items.forEach((item, index) => {
        const difference = Math.abs(position(index) - track.scrollLeft);
        if (difference < distance) { distance = difference; found = index; }
      });
      return found;
    }
    function settle() {
      clearTimeout(settleTimer);
      if (dragging || !track.clientWidth) return;
      const index = nearest();
      notify(index - offset);
      // The repeated edge card looks identical; return to its real position silently.
      if (count > 1 && index === 0) move(count, 'instant');
      else if (count > 1 && index === count + 1) move(1, 'instant');
    }
    function scheduleSettle() {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(settle, 160);
    }
    track.addEventListener('scroll', () => {
      if (!track.clientWidth) return;
      const index = modulo(nearest() - offset);
      if (index !== current) notify(index);
      scheduleSettle();
    }, { passive: true });
    track.addEventListener('scrollend', settle, { passive: true });
    track.addEventListener('pointerdown', () => { dragging = true; clearTimeout(settleTimer); }, { passive: true });
    const release = () => { dragging = false; scheduleSettle(); };
    track.addEventListener('pointerup', release, { passive: true });
    track.addEventListener('pointercancel', release, { passive: true });
    new ResizeObserver(() => {
      if (track.clientWidth > 0 && track.clientWidth !== lastWidth) {
        lastWidth = track.clientWidth;
        move(current + offset, 'instant');
      }
    }).observe(track);
    notify(0);
    move(offset, 'instant');
    return {
      go(index) {
        clearTimeout(settleTimer);
        let physical = modulo(index) + offset;
        if (count > 1 && current === count - 1 && index === count) physical = count + 1;
        if (count > 1 && current === 0 && index === -1) physical = 0;
        notify(index);
        const reduced = scope.matchMedia('(prefers-reduced-motion: reduce)').matches;
        move(physical, reduced ? 'instant' : 'smooth');
        scheduleSettle();
      }
    };
  };
})(window);
