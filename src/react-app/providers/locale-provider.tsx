import {
	createContext,
	useCallback,
	useContext,
	useLayoutEffect,
	useMemo,
	useState,
	type ReactNode,
} from "react";

import {
	DEFAULT_LOCALE,
	LOCALE_STORAGE_KEY,
	getResumeContent,
	getUiLabels,
	isLocale,
	type Locale,
	type ResumeContent,
	type ResumeUiLabels,
} from "@/i18n";

function readStoredLocale(): Locale {
	const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
	return stored && isLocale(stored) ? stored : DEFAULT_LOCALE;
}

type LocaleContextValue = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	content: ResumeContent;
	labels: ResumeUiLabels;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

	useLayoutEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	const setLocale = useCallback((nextLocale: Locale) => {
		document.documentElement.lang = nextLocale;
		setLocaleState(nextLocale);
		localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
	}, []);

	const value = useMemo(
		() => ({
			locale,
			setLocale,
			content: getResumeContent(locale),
			labels: getUiLabels(locale),
		}),
		[locale, setLocale],
	);

	return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
	const context = useContext(LocaleContext);
	if (!context) {
		throw new Error("useLocale must be used within LocaleProvider");
	}

	return context;
}
