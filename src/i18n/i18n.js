import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const loadTranslations = async () => {
  const response = await fetch("/en/translation.json");
  const translations = await response.json();
  return translations;
};

loadTranslations().then((translations) => {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: translations,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
});

export default i18n;
