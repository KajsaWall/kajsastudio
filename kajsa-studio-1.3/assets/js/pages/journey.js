import { state } from '../state.js';
import { t, section, eyebrow, btn, hero } from '../helpers.js';
export function journey() {
   const lang = state.lang;
  const articles = state.articles;

  return hero(t('journeyTitle'), t('journeyLead'), t('navJourney')) + section(`<div class="split"><div><div class="timeline"><div class="timeline-item reveal"><time>2026</time><h3>${t('journey1')}</h3><p>${t('journey1Body')}</p></div><div class="timeline-item reveal"><time>→</time><h3>${t('journey2')}</h3><p>${t('journey2Body')}</p></div></div><p class="notice">${t('journeyNotice')}</p></div><div class="photo-placeholder photo-real photo-landscape"><img src="assets/images/kajsa-vineyard-1.jpg" alt="Kajsa i vita arbetskläder utomhus vid solnedgång" loading="lazy"></div></div>`); }
