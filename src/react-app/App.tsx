import { AppBootLoader } from "./components/AppBootLoader";
import { DownloadCvBubble } from "./components/DownloadCvBubble";
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
			<DownloadCvBubble />
			<SettingsBubble />
		</ThemeProvider>
	);
}

export default App;
