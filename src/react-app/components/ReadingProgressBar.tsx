import { useEffect, useState } from "react";

function getScrollProgress(): number {
	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	const max = document.documentElement.scrollHeight - window.innerHeight;
	if (max <= 0) {
		return scrollTop > 0 ? 100 : 0;
	}

	return Math.min(100, Math.max(0, (scrollTop / max) * 100));
}

function useReadingProgress() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const update = () => setProgress(getScrollProgress());

		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update, { passive: true });

		const resizeObserver = new ResizeObserver(update);
		resizeObserver.observe(document.documentElement);
		resizeObserver.observe(document.body);

		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
			resizeObserver.disconnect();
		};
	}, []);

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
