/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import th from './locales/th/th.json';
import en from './locales/en/en.json';


//* Add types for below in types/i18next.d.ts file
const resources = {
  th: {
    translation: th 
  },
  en: {
    translation: en
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
  });

export default i18n;