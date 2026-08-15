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
		<section className={cn("space-y-4", className)}>
			<div className="print-heading flex items-center justify-between gap-4 border-b-2 border-foreground pb-3">
				<h2 className="newspaper-headline text-xl uppercase">{title}</h2>
			</div>
			<div className={cn("px-1", contentClassName)}>{children}</div>
		</section>
	);
}
