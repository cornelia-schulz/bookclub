import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['strings'],
    defaultNS: 'strings',

    debug: true,

    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    
    react: {
      wait: true
    }
  })

export default i18n