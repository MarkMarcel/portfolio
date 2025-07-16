/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
export const onClientEntry = () => {
  if (typeof window !== 'undefined' && window.location.pathname === '/') {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0]; // 'de' from 'de-DE'

    const supportedLangs = ['de'];
    if (supportedLangs.includes(langCode)) {
      window.location.replace(`/${langCode}/`);
    }
  }
};
