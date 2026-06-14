import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

function SectionHeading({
	children,
	className,
	action,
}: {
	children: string;
	className?: string;
	action?: ReactNode;
}) {
	return (
		<div
			className={cn(
				"flex items-center justify-between gap-4 border-b-2 border-foreground pb-3",
				className,
			)}
		>
			<h2 className="newspaper-headline text-2xl uppercase @md:text-3xl">
				{children}
			</h2>
			{action ? <div className="shrink-0">{action}</div> : null}
		</div>
	);
}

export function ResumeSection({
	title,
	children,
	action,
	className,
	contentClassName,
}: {
	title: string;
	children: ReactNode;
	action?: ReactNode;
	className?: string;
	contentClassName?: string;
}) {
	return (
		<section className={cn("print-break-inside-avoid space-y-4", className)}>
			<SectionHeading action={action}>{title}</SectionHeading>
			<div className={cn("px-1", contentClassName)}>{children}</div>
		</section>
	);
}
