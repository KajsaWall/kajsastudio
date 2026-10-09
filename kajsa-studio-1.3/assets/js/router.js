import { state } from './state.js';
import { t, main } from './helpers.js';
import { home } from './pages/home.js';
import { about } from './pages/about.js';
import { knowledge, paintArticles, articlePage } from './pages/knowledge.js';
import { journey } from './pages/journey.js';
import { contact } from './pages/contact.js';
import { CONFIG } from './config.js';
export function render() {
 const lang = state.lang;
 document.documentElement.lang = lang; document.querySelectorAll('[data-i]').forEach(el => el.textContent = t(el.dataset.i)); document.getElementById('language').innerHTML = lang === 'sv' ? 'SV <span>/ EN</span>' : '<span>SV /</span> EN'; const path = decodeURIComponent(location.hash.replace(/^#\/?/, '').split('?')[0]); const seg = path.split('/').filter(Boolean); const page = seg[0] || 'home'; main.innerHTML = page === 'home' ? home() : page === 'about' ? about() : page === 'knowledge' ? knowledge() : page === 'journey' ? journey() : page === 'contact' ? contact() : page === 'article' ? articlePage(seg[1]) : home(); document.querySelectorAll('[data-nav]').forEach(el => el.classList.toggle('active', el.dataset.nav === (page === 'article' ? 'knowledge' : page))); document.title = `${({ home: 'Kajsa Studio', about: t('navAbout'), knowledge: t('navKnowledge'), journey: t('navJourney'), contact: t('navContact'), article: t('navKnowledge') })[page] || 'Kajsa Studio'} | Kajsa Studio`; document.getElementById('mobile-nav').hidden = true; document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false'); if (page === 'knowledge') {
    document.getElementById('search').addEventListener('input', paintArticles);
    paintArticles();
} if (page === 'article') {
    document.querySelectorAll('[data-answer]').forEach(b => b.onclick = () => { const ok = b.dataset.answer === b.dataset.correct; b.classList.add(ok ? 'correct' : 'wrong'); document.getElementById('quiz-feedback').textContent = t(ok ? 'correct' : 'wrong'); });
    document.querySelectorAll('.diagram-choice').forEach(b => b.onclick = () => { document.querySelectorAll('.diagram-choice').forEach(x => x.classList.remove('active')); b.classList.add('active'); document.getElementById('diagram-info').textContent = t(b.dataset.part + 'Info'); });
} if (page === 'contact') {
    document.getElementById('contact-form').onsubmit = async (e) => { e.preventDefault(); const f = e.currentTarget, feedback = document.getElementById('form-feedback'); if (!CONFIG.formEndpoint) {
        feedback.textContent = t('formNote');
        return;
    } if (f.elements.website.value)
        return; try {
        const r = await fetch(CONFIG.formEndpoint, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } });
        if (!r.ok)
            throw Error('Failed');
        feedback.textContent = lang === 'sv' ? 'Tack! Ditt meddelande har skickats.' : 'Thanks! Your message has been sent.';
        f.reset();
    }
    catch {
        feedback.textContent = lang === 'sv' ? 'Det gick inte att skicka. Försök igen senare.' : 'Unable to send. Please try again later.';
    } };
} const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) {
    e.target.classList.add('visible');
    io.unobserve(e.target);
} }), { threshold: .08 }); document.querySelectorAll('.reveal').forEach(el => io.observe(el)); window.scrollTo({ top: 0, behavior: 'instant' }); }
