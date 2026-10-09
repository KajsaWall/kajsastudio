import { state } from '../state.js';
import { t, section, eyebrow, btn, hero } from '../helpers.js';
export function about() {
   const lang = state.lang;
   const articles = state.articles;

   return hero(t('aboutTitle'), t('aboutLead'), t('navAbout')) + section(`<div class="split reveal"><div class="copy">${eyebrow(t('welcome'))}<h2>${t('aboutTeaser')}</h2><p class="lead">${t('aboutBody')}</p></div><div class="photo-placeholder photo-real"><img src="assets/images/kajsa-portrait-white-scrubs.jpg" alt="Porträtt av Kajsa i vita arbetskläder" loading="lazy"></div></div>`) + section(`${eyebrow(t('education'))}<h2>${t('timelineTitle')}</h2><div class="timeline"><div class="timeline-item reveal"><time>2026 —</time><h3>${t('studyTitle')}</h3><p>${t('studyBody')}</p></div><div class="timeline-item reveal"><time>2024–2025</time><h3>${t('mediaTitle')}</h3><p>${t('mediaBody')}</p></div></div>`, 'section-alt') + section(`${eyebrow(t('skills'))}<h2>${t('skillsTitle')}</h2><div>${['Anatomi / Anatomy', 'Fysiologi / Physiology', 'Rörelse / Movement', 'Smärta / Pain', 'Massage / Massage', 'Digital design'].map(x => `<span class="pill">${x}</span>`).join('')}</div>`, 'section-ice');
}
