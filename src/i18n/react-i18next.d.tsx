import "react-i18next";
import ns1 from "./locales/en.json";
import ns2 from "./locales/fr.json";

declare module "react-i18next" {
	interface Resources {
		ns1: typeof ns1;
		ns2: typeof ns2;
	}
}

declare module "react-i18next" {
	interface CustomTypeOptions {
		defaultNS: "ns1";
		resources: {
			ns1: typeof ns1;
			ns2: typeof ns2;
		};
	}
}
