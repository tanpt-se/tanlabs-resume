/** Measured from opaque bezel vs transparent screen in public/phone.png & public/ipad.png */
export const PHONE_PNG_FRAME = {
	src: "/phone.png",
	nativeWidth: 448,
	nativeHeight: 916,
	screen: { x: 24, y: 71, width: 402, height: 809 },
	screenRadius: "9%",
} as const;

export const IPAD_PNG_FRAME = {
	src: "/ipad.png",
	nativeWidth: 1920,
	nativeHeight: 2710,
	screen: { x: 150, y: 275, width: 1620, height: 2160 },
	screenRadius: "1.25%",
} as const;

export type PngFrameLayout = {
	scale: number;
	frameWidth: number;
	frameHeight: number;
	screenLeft: number;
	screenTop: number;
	screenWidth: number;
	screenHeight: number;
};

/** Uniform scale from PNG — keeps overlay and screen hole aligned. */
export function getPngFrameLayout(
	config: typeof PHONE_PNG_FRAME | typeof IPAD_PNG_FRAME,
	targetScreenWidth: number,
	maxFrameHeight?: number,
): PngFrameLayout {
	let scale = targetScreenWidth / config.screen.width;

	if (maxFrameHeight) {
		const scaledHeight = config.nativeHeight * scale;
		if (scaledHeight > maxFrameHeight) {
			scale = maxFrameHeight / config.nativeHeight;
		}
	}

	return {
		scale,
		frameWidth: Math.round(config.nativeWidth * scale),
		frameHeight: Math.round(config.nativeHeight * scale),
		screenLeft: config.screen.x * scale,
		screenTop: config.screen.y * scale,
		screenWidth: config.screen.width * scale,
		screenHeight: config.screen.height * scale,
	};
}
