import React from "react";
import { useTranslation } from "react-i18next";
import { render } from "@testing-library/react";
import AppTranslation from "./app-translation";

const dataTestId = "app-translation";

const Children = () => {
	const { t } = useTranslation();

	return <div data-testid={dataTestId}>{t("cat-fact")}</div>;
};

const setup = () => {
	const component = render(
		<AppTranslation>
			<Children />
		</AppTranslation>,
	);
	const element = component.getByTestId(dataTestId);

	expect(element).toBeInTheDocument();

	return component;
};

describe("<AppRouter />", () => {
	it("should render", () => {
		const component = setup();

		expect(component).toBeTruthy();
	});
});
