import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import koTranslation from '../public/locales/ko/translation.json';

const resources = {
  ko: {
    translation: koTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
