import React from "react";
import { render, waitFor } from "@testing-library/react";
import AppProvider from "../../common/app-provider";
import AppTranslation from "../../common/app-translation";
import Home from "./home";
import store from "../../../redux/store";

const dataTestId = "home";

const setup = () => {
	const component = render(
		<AppTranslation>
			<AppProvider>
				<Home />
			</AppProvider>
		</AppTranslation>,
	);

	const element = component.getByTestId(dataTestId);

	expect(element).toBeInTheDocument();

	return component;
};

describe("<App />", () => {
	it("should render", () => {
		const component = setup();

		expect(component).toBeTruthy();
	});

	it("should render redux state", async () => {
		const component = setup();

		await waitFor(() => {
			const fact = store.getState().cat.fact;
			const content = component.getByText(fact);

			expect(content).toBeInTheDocument();
		});
	});
});
