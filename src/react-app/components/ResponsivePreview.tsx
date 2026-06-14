import { useEffect, useMemo, useState, type ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { IpadProFrame, Iphone17ProFrame } from "@/components/device-frames/DeviceFrame";
import {
	getPngFrameLayout,
	IPAD_PNG_FRAME,
	PHONE_PNG_FRAME,
} from "@/components/device-frames/frame-config";
import { useLocale } from "@/providers/locale-provider";
import { useViewport } from "@/providers/viewport-provider";

function useWindowSize() {
	const [size, setSize] = useState(() => ({
		width: typeof window !== "undefined" ? window.innerWidth : 1280,
		height: typeof window !== "undefined" ? window.innerHeight : 800,
	}));

	useEffect(() => {
		const onResize = () =>
			setSize({ width: window.innerWidth, height: window.innerHeight });
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return size;
}

const FRAME_CONFIG = {
	mobile: PHONE_PNG_FRAME,
	tablet: IPAD_PNG_FRAME,
} as const;

export function ResponsivePreview({ children }: { children: ReactNode }) {
	const { viewport, width } = useViewport();
	const { labels } = useLocale();
	const { width: windowWidth, height: windowHeight } = useWindowSize();

	const viewportLabel =
		viewport === "mobile"
			? labels.viewportMobile
			: viewport === "tablet"
				? labels.viewportTablet
				: labels.viewportWeb;

	const showDeviceFrame = viewport !== "web" && windowWidth > width + 120;
	const maxFrameHeight = windowHeight - 120;

	const layout = useMemo(() => {
		if (!showDeviceFrame) return null;
		return getPngFrameLayout(FRAME_CONFIG[viewport], width, maxFrameHeight);
	}, [showDeviceFrame, viewport, width, maxFrameHeight]);

	useEffect(() => {
		if (!showDeviceFrame) return;

		document.body.classList.add("device-preview-active");

		return () => {
			document.body.classList.remove("device-preview-active");
		};
	}, [showDeviceFrame]);

	if (viewport === "web" || !showDeviceFrame || !layout) {
		return (
			<div
				className="@container mx-auto w-full print:max-w-none"
				style={{ maxWidth: width }}
			>
				{children}
			</div>
		);
	}

	const Frame = viewport === "mobile" ? Iphone17ProFrame : IpadProFrame;

	return (
		<div className="print-hidden fixed inset-0 z-0 flex flex-col items-center justify-center gap-3 overflow-hidden px-3 pb-20 pt-3">
			<Badge
				variant="outline"
				className="shrink-0 gap-1.5 bg-card/90 backdrop-blur-sm"
			>
				{viewportLabel}
				<span className="text-muted-foreground">
					· {Math.round(layout.screenWidth)} × {Math.round(layout.screenHeight)}px
				</span>
			</Badge>

			<div
				data-viewport-frame
				className="relative w-fit shrink-0"
				style={{
					width: layout.frameWidth,
					height: layout.frameHeight,
				}}
			>
				<Frame targetScreenWidth={width} maxFrameHeight={maxFrameHeight}>
					<div className="@container resume-preview-content">{children}</div>
				</Frame>
			</div>
		</div>
	);
}
