import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function ResumeSection({
	title,
	children,
	className,
	contentClassName,
}: {
	title: string;
	children: ReactNode;
	className?: string;
	contentClassName?: string;
}) {
	return (
		<section className={cn("print-break-inside-avoid space-y-4", className)}>
			<div className="flex items-center justify-between gap-4 border-b-2 border-foreground pb-3">
				<h2 className="newspaper-headline text-2xl uppercase @md:text-3xl">{title}</h2>
			</div>
			<div className={cn("px-1", contentClassName)}>{children}</div>
		</section>
	);
}
