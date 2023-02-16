import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

const resources = {
	en,
	fr,
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",
	interpolation: {
		escapeValue: false,
		prefix: "{{",
		suffix: "}}",
	},
});

export default i18n;
