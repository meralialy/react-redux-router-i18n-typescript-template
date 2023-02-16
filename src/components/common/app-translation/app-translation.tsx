import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import { Props } from "./app-translation.types";

const AppTranslation: React.FunctionComponent<Props> = ({ children }) => {
	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default AppTranslation;
