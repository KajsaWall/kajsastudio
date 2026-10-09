// Gemensamt tillstånd för språk och artiklar.
export const state = {
    lang: localStorage.getItem('kajsa-lang') === 'en' ? 'en' : 'sv',
    articles: []
};
