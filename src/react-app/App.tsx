import { AppBootLoader } from "./components/AppBootLoader";
import { ReadingProgressBar } from "./components/ReadingProgressBar";
import ResumePage from "./components/ResumePage";
import { SettingsBubble } from "./components/SettingsBubble";
import { ThemeProvider } from "./providers/theme-provider";

function App() {
	return (
		<ThemeProvider>
			<AppBootLoader>
				<ResumePage />
			</AppBootLoader>
			<ReadingProgressBar />
			<SettingsBubble />
		</ThemeProvider>
	);
}

export default App;
