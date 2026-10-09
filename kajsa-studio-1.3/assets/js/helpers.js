import { T } from './translations.js';
import { state } from './state.js';
export const t = key => T[state.lang][key] || key;
export const main = document.getElementById('main');
export const section = (body, cls = '') => `<section class="section ${cls}"><div class="container">${body}</div></section>`;
export const eyebrow = s => `<div class="eyebrow"><span class="dot">✳</span>${s}</div>`;
export const btn = (href, label) => `<a class="button" href="${href}">${label} <span aria-hidden="true">↗</span></a>`;
export const hero = (title, lead, tag) => `<section class="page-hero"><div class="container">${eyebrow(tag)}<h1>${title}</h1><p class="lead">${lead}</p></div></section>`;
