const BOOT_MIN_MS = 480;
const BOOT_FADE_MS = 420;

export const BOOT_IMAGE_PATHS = ["/work-photo.png", "/education-photo.png"] as const;

function preloadImage(src: string): Promise<void> {
	return new Promise((resolve) => {
		const image = new Image();
		image.onload = () => resolve();
		image.onerror = () => resolve();
		image.src = src;
	});
}

function delay(ms: number): Promise<void> {
	return new Promise((resolve) => {
		window.setTimeout(resolve, ms);
	});
}

export async function waitForAppBoot(): Promise<void> {
	const tasks: Promise<unknown>[] = [
		document.fonts?.ready ?? Promise.resolve(),
		delay(BOOT_MIN_MS),
		...BOOT_IMAGE_PATHS.map(preloadImage),
	];

	if (document.readyState !== "complete") {
		tasks.push(
			new Promise<void>((resolve) => {
				window.addEventListener("load", () => resolve(), { once: true });
			}),
		);
	}

	await Promise.all(tasks);
	await new Promise<void>((resolve) => {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => resolve());
		});
	});
}

export function dismissHtmlSplash(): void {
	const splash = document.getElementById("app-splash");
	if (!splash) {
		document.body.classList.remove("boot-loading");
		return;
	}

	splash.classList.add("app-splash--out");
	document.body.classList.remove("boot-loading");
	splash.setAttribute("aria-busy", "false");

	window.setTimeout(() => {
		splash.remove();
	}, BOOT_FADE_MS);
}
