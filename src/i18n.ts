import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Korean translations
const resources = {
  ko: {
    translation: {}
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko', // Fixed to Korean
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false // React already escapes XSS
    },
    react: {
      useSuspense: false // Important for Tauri initial load
    }
  });

export default i18n;
