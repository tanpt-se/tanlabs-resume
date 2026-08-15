import { useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { dismissHtmlSplash, waitForAppBoot } from "@/lib/boot";

export function AppBootLoader({ children }: { children: ReactNode }) {
	const pdfMode = new URLSearchParams(window.location.search).has("pdf");
	const [ready, setReady] = useState(pdfMode);

	useEffect(() => {
		if (pdfMode) {
			dismissHtmlSplash();
			return;
		}

		let cancelled = false;

		void waitForAppBoot().then(() => {
			if (cancelled) {
				return;
			}

			dismissHtmlSplash();
			setReady(true);
		});

		return () => {
			cancelled = true;
		};
	}, [pdfMode]);

	return (
		<div
			className={cn(
				"min-h-screen transition-opacity duration-500 ease-out motion-reduce:transition-none",
				ready ? "animate-boot-enter opacity-100" : "pointer-events-none opacity-0",
			)}
		>
			{children}
		</div>
	);
}
