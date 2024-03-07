// App.tsx - ✅ Dynamic Nesting Approach
import React, { ComponentType, ReactNode } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { LangProvider } from "./contexts/LangContext";

// Function to dynamically combine context providers
function combineProviders(providers: ComponentType<{ children: ReactNode }>[]) {
	return function CombinedProviders({ children }: { children: ReactNode }) {
		return providers.reduceRight(
			(acc, CurrentProvider) => <CurrentProvider>{acc}</CurrentProvider>,
			children
		);
	};
}

const AppProviders = combineProviders([
	ThemeProvider,
	AuthProvider,
	LangProvider,
]);

function App() {
	return (
		<AppProviders>
			{/* Your app components */}
			<div>
				<h1>Welcome to My App!</h1>
				<p>
					This app combines multiple context providers for theme,
					authentication, and language localization.
				</p>
			</div>
		</AppProviders>
	);
}

export default App;
