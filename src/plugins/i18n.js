import Vue from "vue";
import VueI18n from "vue-i18n";
import translations from "@/assets/translations.json";

Vue.use(VueI18n);

const messages = translations;

export const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "es", // set fallback locale
  messages, // set locale messages
});
