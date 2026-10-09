import { state } from '../state.js';
import { t, section, eyebrow, btn, hero } from '../helpers.js';
export function knowledge() {
   const lang = state.lang;
  const articles = state.articles;

  return hero(t('knowledgeTitle'), t('knowledgeLead'), t('navKnowledge')) + section(`<label for="search" class="eyebrow">${t('search')}</label><input id="search" class="search" type="search" placeholder="${t('search')}"><div id="filters" class="filters"></div><div id="articles" class="cards"></div><p style="margin-top:35px;color:var(--muted);font-size:13px">${t('disclaimer')}</p>`);
}

export function paintArticles() {
   const lang = state.lang;
  const articles = state.articles;
 const target = document.getElementById('articles'); if (!target)
    return; let q = (document.getElementById('search').value || '').toLowerCase(); let category = document.querySelector('.filter.active')?.dataset.category || 'all'; let categories = ['all', ...new Set(articles.map(a => a.category))]; document.getElementById('filters').innerHTML = categories.map(c => `<button class="filter ${c === category ? 'active' : ''}" data-category="${c}">${c === 'all' ? t('all') : c}</button>`).join(''); document.querySelectorAll('.filter').forEach(b => b.onclick = () => { document.querySelector('.filter.active')?.classList.remove('active'); b.classList.add('active'); paintArticles(); }); let found = articles.filter(a => (category === 'all' || a.category === category) && [a.title[lang], a.excerpt[lang], a.category].join(' ').toLowerCase().includes(q)); target.innerHTML = found.length ? found.map(a => `<a class="card article-card" href="#/article/${encodeURIComponent(a.id)}"><span class="article-meta">${a.category} · ${a.minutes} ${t('minutes')}</span><h3>${a.title[lang]}</h3><p>${a.excerpt[lang]}</p><span class="arrow">↗</span></a>`).join('') : `<p>${t('noResults')}</p>`;
}

export function diagram() {
   const lang = state.lang;
  const articles = state.articles;

  return `<div class="diagram"><h3>${t('diagramTitle')}</h3><p>${t('diagramText')}</p><svg viewBox="0 0 440 240" role="img" aria-label="Förenklad illustration av muskel, sena och ben"><path d="M55 120 Q100 48 200 100 Q240 122 200 144 Q100 192 55 120" fill="#d9a6b6" stroke="#9b6c80" stroke-width="3"/><path d="M195 104 Q260 115 294 105 L294 137 Q250 126 195 143" fill="#f4e9d7" stroke="#b8a28d" stroke-width="3"/><rect x="291" y="92" width="112" height="60" rx="23" fill="#f6f0e6" stroke="#b8a28d" stroke-width="3"/><text x="125" y="128" text-anchor="middle" font-size="13" fill="#56374a">1</text><text x="246" y="128" text-anchor="middle" font-size="13" fill="#654f3b">2</text><text x="349" y="128" text-anchor="middle" font-size="13" fill="#654f3b">3</text></svg><div>${['muscle', 'tendon', 'bone'].map((x, i) => `<button class="diagram-choice" data-part="${x}">${i + 1}. ${t(x)}</button>`).join('')}</div><p id="diagram-info" aria-live="polite"></p></div>`;
}

export function articlePage(id) {
   const lang = state.lang;
  const articles = state.articles;
 const a = articles.find(a => a.id === id); if (!a)
    return knowledge();
  return hero(a.title[lang], a.excerpt[lang], a.category) + section(`<div class="article-body"><a href="#/knowledge">${t('back')}</a><p class="article-meta">${a.minutes} ${t('minutes')}</p>${a.sections[lang].map(s => `<h2>${s.heading}</h2><p>${s.text}</p>`).join('')}${a.id === 'muskler-och-rorelse' ? diagram() : ''}<div class="quiz"><h3>${t('quizTitle')}</h3><p>${a.quiz[lang].question}</p>${a.quiz[lang].answers.map((ans, i) => `<button data-answer="${i}" data-correct="${a.quiz[lang].correct}">${ans}</button>`).join('')}<p id="quiz-feedback" role="status"></p></div><p class="notice">${t('disclaimer')}</p></div>`); }
