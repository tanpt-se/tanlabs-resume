import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
	getPngFrameLayout,
	IPAD_PNG_FRAME,
	PHONE_PNG_FRAME,
} from "./frame-config";
import "./device-frames.css";

type DeviceFrameProps = {
	children: ReactNode;
	targetScreenWidth: number;
	maxFrameHeight?: number;
	className?: string;
};

type PngDeviceFrameProps = DeviceFrameProps & {
	frame: typeof PHONE_PNG_FRAME | typeof IPAD_PNG_FRAME;
	modifierClass: string;
};

function PngDeviceFrame({
	children,
	targetScreenWidth,
	maxFrameHeight,
	className,
	frame,
	modifierClass,
}: PngDeviceFrameProps) {
	const layout = getPngFrameLayout(frame, targetScreenWidth, maxFrameHeight);

	const screenStyle = {
		top: layout.screenTop,
		left: layout.screenLeft,
		width: layout.screenWidth,
		height: layout.screenHeight,
		borderRadius: frame.screenRadius,
	} satisfies CSSProperties;

	return (
		<div
			className={cn("device-png-frame", modifierClass, className)}
			style={{ width: layout.frameWidth, height: layout.frameHeight }}
		>
			<div className="device-png-frame__screen" style={screenStyle}>
				<div className="device-png-frame__content" data-device-scroll>
					{children}
				</div>
			</div>
			<img
				src={frame.src}
				alt=""
				aria-hidden="true"
				className="device-png-frame__overlay"
				width={frame.nativeWidth}
				height={frame.nativeHeight}
				draggable={false}
			/>
		</div>
	);
}

export function Iphone17ProFrame({
	targetScreenWidth,
	maxFrameHeight,
	className,
	children,
}: DeviceFrameProps) {
	return (
		<PngDeviceFrame
			targetScreenWidth={targetScreenWidth}
			maxFrameHeight={maxFrameHeight}
			className={className}
			frame={PHONE_PNG_FRAME}
			modifierClass="device-png-frame--phone"
		>
			{children}
		</PngDeviceFrame>
	);
}

export function IpadProFrame({
	targetScreenWidth,
	maxFrameHeight,
	className,
	children,
}: DeviceFrameProps) {
	return (
		<PngDeviceFrame
			targetScreenWidth={targetScreenWidth}
			maxFrameHeight={maxFrameHeight}
			className={className}
			frame={IPAD_PNG_FRAME}
			modifierClass="device-png-frame--ipad"
		>
			{children}
		</PngDeviceFrame>
	);
}

