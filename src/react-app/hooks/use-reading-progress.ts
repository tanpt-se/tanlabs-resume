import { useEffect, useState } from "react";

function getScrollProgress(): number {
	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	const max = document.documentElement.scrollHeight - window.innerHeight;
	if (max <= 0) {
		return scrollTop > 0 ? 100 : 0;
	}

	return Math.min(100, Math.max(0, (scrollTop / max) * 100));
}

export function useReadingProgress() {
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
