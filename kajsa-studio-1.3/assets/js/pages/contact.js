import { state } from '../state.js';
import { t, section, eyebrow, btn, hero } from '../helpers.js';
import { CONFIG } from '../config.js';
export function contact() {
   const lang = state.lang;
   const articles = state.articles;

   return hero(t('contactTitle'), t('contactLead'), t('navContact')) + section(`<div class="split" style="align-items:start"><div>${eyebrow(t('formTitle'))}<form id="contact-form" class="form"><label>${t('name')}<input name="name" required maxlength="100" autocomplete="name"></label><label>${t('email')}<input name="email" type="email" required maxlength="200" autocomplete="email"></label><label>${t('subject')}<select name="subject"><option>LIA / Internship</option><option>Collaboration</option><option>Networking</option><option>Other</option></select></label><label>${t('message')}<textarea name="message" required maxlength="4000"></textarea></label><input name="website" style="display:none" tabindex="-1" autocomplete="off" aria-hidden="true"><button class="button" type="submit">${t('send')} ↗</button><p id="form-feedback" role="status" class="notice">${t('formNote')}</p></form></div><div>${eyebrow(t('contactInfo'))}<h3>${CONFIG.email ? `<a href="mailto:${CONFIG.email}">${CONFIG.email}</a>` : t('emailPlaceholder')}</h3><p>${t('socialInfo')}</p><div class="social" style="margin-top:30px">${Object.entries(CONFIG.social).map(([name, url]) => url ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${name} ↗</a>` : `<span class="pill">${name}</span>`).join('')}</div></div></div>`);
}
