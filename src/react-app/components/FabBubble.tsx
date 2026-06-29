import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const FAB_BUTTON_CLASS =
	"size-12 rounded-full shadow-xl transition-transform hover:scale-105";

type FabBubbleProps = {
	children: ReactNode;
	className?: string;
};

export function FabBubble({ children, className }: FabBubbleProps) {
	return (
		<div
			className={cn("print-hidden fixed right-5 z-[100]", className)}
		>
			{children}
		</div>
	);
}
