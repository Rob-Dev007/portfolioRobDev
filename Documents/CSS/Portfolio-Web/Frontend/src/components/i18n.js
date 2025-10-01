import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Carga traducciones desde archivos
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Integra i18next con React
  .init({
    fallbackLng: 'en', // Idioma predeterminado si no se encuentra uno válido
    debug: true,
    interpolation: {
      escapeValue: false, // React ya maneja la protección contra XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Ruta de los archivos de traducción
    },
  });

export default i18n;
