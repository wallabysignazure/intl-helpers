import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import _ from 'lodash';

// Initialize i18next with options
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(LanguageDetector) // Detects user language
  .use(HttpBackend) // Loads translations using HTTP
  .init({
    fallbackLng: 'en', // Use English as the fallback language
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to the translation files
    },
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

/**
 * Changes the current language of the application.
 * @param {string} lng - The language code to switch to.
 */
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

/**
 * Translates a key into the current language.
 * @param {string} key - The key to translate.
 * @param {Object} [options] - Options for interpolation.
 * @returns {string} The translated string.
 */
export const t = (key, options) => {
  return i18n.t(key, options);
};

/**
 * Load additional namespaces or languages on demand.
 * @param {Array|string} ns - Namespaces to load.
 * @param {Function} [callback] - Optional callback to run after loading.
 */
export const loadNamespaces = (ns, callback) => {
  i18n.loadNamespaces(ns, callback);
};

/**
 * Extend or override existing translations.
 * @param {Object} resources - The new or updated translations.
 */
export const addResources = (lng, ns, resources) => {
  i18n.addResources(lng, ns, resources);
};
