import React from "react";
import AppProvider from "../common/app-provider";
import AppRouter from "../common/app-router";
import AppTranslation from "../common/app-translation";
import routes from "../routes";

const App: React.FunctionComponent = () => {
	return (
		<AppTranslation>
			<AppProvider>
				<AppRouter routes={routes} />
			</AppProvider>
		</AppTranslation>
	);
};

export default App;
