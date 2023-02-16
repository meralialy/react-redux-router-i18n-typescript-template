module.exports = {
	collectCoverageFrom: ["src/**"],
	coverageDirectory: "coverage",
	coveragePathIgnorePatterns: ["index.tsx", "react-i18next.d.tsx", "./src/i18n/locales/"],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	preset: "ts-jest",
	setupFilesAfterEnv: ["./jest.setup.js"],
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
};
