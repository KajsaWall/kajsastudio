import { state } from './state.js';
import { render } from './router.js';
// Växla mellan svenska och engelska.
document.getElementById('language').addEventListener('click', () => {
    state.lang = state.lang === 'sv' ? 'en' : 'sv';
    localStorage.setItem('kajsa-lang', state.lang);
    render();
});
// Öppna och stäng mobilmenyn.
document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-nav');
    menu.hidden = !menu.hidden;
    document.getElementById('menu-toggle').setAttribute('aria-expanded', String(!menu.hidden));
});
document.getElementById('year').textContent = new Date().getFullYear();
window.addEventListener('hashchange', render);
// Läs in artiklar från JSON-filen.
fetch('content/articles.json')
    .then(response => {
    if (!response.ok)
        throw new Error('Article content unavailable');
    return response.json();
})
    .then(data => {
    state.articles = data;
    render();
})
    .catch(() => {
    render();
    console.warn('Artiklarna kräver en webbserver (inte file://).');
});
render();
