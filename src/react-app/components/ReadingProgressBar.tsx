import { useEffect, useState } from "react";

import { useViewport } from "@/providers/viewport-provider";

function getScrollProgress(container: HTMLElement | null): number {
	if (container) {
		const max = container.scrollHeight - container.clientHeight;
		if (max <= 0) {
			return container.scrollTop > 0 ? 100 : 0;
		}

		return Math.min(100, Math.max(0, (container.scrollTop / max) * 100));
	}

	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	const max = document.documentElement.scrollHeight - window.innerHeight;
	if (max <= 0) {
		return scrollTop > 0 ? 100 : 0;
	}

	return Math.min(100, Math.max(0, (scrollTop / max) * 100));
}

function resolveScrollContainer(): HTMLElement | null {
	const deviceScroll = document.querySelector<HTMLElement>("[data-device-scroll]");
	if (!deviceScroll) {
		return null;
	}

	if (deviceScroll.scrollHeight > deviceScroll.clientHeight) {
		return deviceScroll;
	}

	return null;
}

function useReadingProgress() {
	const { viewport } = useViewport();
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		let container: HTMLElement | null = null;

		const update = () => {
			container = resolveScrollContainer();
			setProgress(getScrollProgress(container));
		};

		const onScroll = () => update();

		const detach = () => {
			window.removeEventListener("scroll", onScroll);
			container?.removeEventListener("scroll", onScroll);
			container = null;
		};

		const attach = () => {
			window.addEventListener("scroll", onScroll, { passive: true });
			container = resolveScrollContainer();
			container?.addEventListener("scroll", onScroll, { passive: true });
			update();
		};

		const reattach = () => {
			detach();
			attach();
		};

		reattach();

		window.addEventListener("resize", reattach, { passive: true });

		const resizeObserver = new ResizeObserver(update);
		resizeObserver.observe(document.documentElement);
		resizeObserver.observe(document.body);

		const mutationObserver = new MutationObserver(reattach);
		mutationObserver.observe(document.body, { childList: true, subtree: true });

		return () => {
			detach();
			window.removeEventListener("resize", reattach);
			resizeObserver.disconnect();
			mutationObserver.disconnect();
		};
	}, [viewport]);

	return progress;
}

export function ReadingProgressBar() {
	const progress = useReadingProgress();

	return (
		<div
			className="print-hidden pointer-events-none fixed inset-x-0 top-0 z-[90] h-1 bg-border"
			role="progressbar"
			aria-valuenow={Math.round(progress)}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-label="Reading progress"
		>
			<div
				className="h-full bg-foreground transition-[width] duration-150 ease-out"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
}
