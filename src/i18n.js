import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Welcome to React": "Welcome to React and react-i18next",
          footer: "Create. Code. Coffee.",
          me: "me",
          projects: "projects",
          contacts: "contacts"
        }
      },
      pt: {
        translations: {
          "Welcome to React": "Willkommen bei React und react-i18next",
          footer: "Criar. Código. Café.",
          me: "eu",
          projects: "projetos",
          contacts: "contatos"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
