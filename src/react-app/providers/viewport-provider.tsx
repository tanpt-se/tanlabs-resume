import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
	type ReactNode,
} from "react";

import {
	DEFAULT_VIEWPORT,
	VIEWPORT_STORAGE_KEY,
	VIEWPORT_WIDTHS,
	isViewportSize,
	type ViewportSize,
} from "@/i18n";

function readStoredViewport(): ViewportSize {
	const stored = localStorage.getItem(VIEWPORT_STORAGE_KEY);
	return stored && isViewportSize(stored) ? stored : DEFAULT_VIEWPORT;
}

type ViewportContextValue = {
	viewport: ViewportSize;
	setViewport: (viewport: ViewportSize) => void;
	width: number;
};

const ViewportContext = createContext<ViewportContextValue | null>(null);

export function ViewportProvider({ children }: { children: ReactNode }) {
	const [viewport, setViewportState] = useState<ViewportSize>(readStoredViewport);

	const setViewport = useCallback((nextViewport: ViewportSize) => {
		setViewportState(nextViewport);
		localStorage.setItem(VIEWPORT_STORAGE_KEY, nextViewport);
	}, []);

	const value = useMemo(
		() => ({
			viewport,
			setViewport,
			width: VIEWPORT_WIDTHS[viewport],
		}),
		[viewport, setViewport],
	);

	return <ViewportContext.Provider value={value}>{children}</ViewportContext.Provider>;
}

export function useViewport() {
	const context = useContext(ViewportContext);
	if (!context) {
		throw new Error("useViewport must be used within ViewportProvider");
	}

	return context;
}
