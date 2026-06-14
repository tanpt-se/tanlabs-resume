import { memo } from "react";

import { AppBootLoader } from "./components/AppBootLoader";
import { FabBubbles } from "./components/FabBubbles";
import { ReadingProgressBar } from "./components/ReadingProgressBar";
import ResumePage from "./components/ResumePage";
import { LocaleProvider } from "./providers/locale-provider";
import { ThemeProvider } from "./providers/theme-provider";
import { ViewportProvider } from "./providers/viewport-provider";

const AppBelowTheme = memo(function AppBelowTheme() {
	return (
		<LocaleProvider>
			<ViewportProvider>
				<AppBootLoader>
					<ResumePage />
				</AppBootLoader>
				<ReadingProgressBar />
				<FabBubbles />
			</ViewportProvider>
		</LocaleProvider>
	);
});

function App() {
	return (
		<ThemeProvider>
			<AppBelowTheme />
		</ThemeProvider>
	);
}

export default App;
