(function (scope) {
  'use strict';
  scope.initHelanovaMotion = function (root) {
    const reduced = scope.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches || !('IntersectionObserver' in scope)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (reduced.matches || typeof entry.target.animate !== 'function') return;
        entry.target.animate([
          { opacity: 0.45, transform: 'translateY(10px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 420, easing: 'cubic-bezier(.22,1,.36,1)' });
      });
    }, { threshold: 0.06 });
    root.querySelectorAll('.hd-person, .hd-help-card').forEach(card => observer.observe(card));
    reduced.addEventListener('change', () => { if (reduced.matches) observer.disconnect(); });
  };
})(window);
