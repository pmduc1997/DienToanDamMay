import i18n from "i18next";
import AppConfig from "app/utils/AppConfig";
import en from "./locales/en";
import vn from "./locales/vn";

// translation catalog
const resources = {
  en,
  vn
};

// initialize i18next with catalog and language to use
i18n.init({
  resources,
  lng: AppConfig.defaultLang === "en" ? "en" : "vn"
});

export default i18n;
