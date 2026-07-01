import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState,
	type ReactNode,
} from "react";

import {
	DEFAULT_THEME,
	THEME_STORAGE_KEY,
	type ResolvedTheme,
	type ThemeMode,
} from "@/i18n";

function getSystemTheme(): ResolvedTheme {
	if (typeof window === "undefined" || !window.matchMedia) {
		return "light";
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveTheme(mode: ThemeMode, systemTheme: ResolvedTheme): ResolvedTheme {
	return mode === "system" ? systemTheme : mode;
}

function applyTheme(resolved: ResolvedTheme) {
	document.documentElement.classList.toggle("dark", resolved === "dark");
}

function readStoredTheme(): ThemeMode {
	const stored = localStorage.getItem(THEME_STORAGE_KEY);
	if (stored === "light" || stored === "dark" || stored === "system") {
		return stored;
	}

	return DEFAULT_THEME;
}

type ThemeContextValue = {
	themeMode: ThemeMode;
	setThemeMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [themeMode, setThemeModeState] = useState<ThemeMode>(readStoredTheme);
	const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

	const resolvedTheme = useMemo(
		() => resolveTheme(themeMode, systemTheme),
		[themeMode, systemTheme],
	);

	useLayoutEffect(() => {
		applyTheme(resolvedTheme);
	}, [resolvedTheme]);

	useEffect(() => {
		if (themeMode !== "system") {
			return;
		}

		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => {
			setSystemTheme(media.matches ? "dark" : "light");
		};

		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, [themeMode]);

	const setThemeMode = useCallback((mode: ThemeMode) => {
		const resolved = resolveTheme(mode, getSystemTheme());
		applyTheme(resolved);
		setThemeModeState(mode);
		localStorage.setItem(THEME_STORAGE_KEY, mode);
	}, []);

	const value = useMemo(
		() => ({ themeMode, setThemeMode }),
		[themeMode, setThemeMode],
	);

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}

	return context;
}
