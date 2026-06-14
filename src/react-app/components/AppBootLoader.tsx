import { useEffect, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { dismissHtmlSplash, waitForAppBoot } from "@/lib/boot";

export function AppBootLoader({ children }: { children: ReactNode }) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
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
	}, []);

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
