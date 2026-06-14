import type { ReactNode } from "react";

import { SkillIcon } from "@/components/SkillIcon";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ViewportSize } from "@/i18n/types";

export function NewspaperDivider() {
	return (
		<p
			aria-hidden
			className="font-headline text-center text-sm font-bold tracking-[0.55em] text-muted-foreground"
		>
			* * *
		</p>
	);
}

export function TechTagList({ items }: { items: string[] }) {
	return (
		<div className="flex flex-wrap gap-2">
			{items.map((item) => (
				<Badge key={item} variant="outline" className="gap-1.5 rounded-none font-normal">
					<SkillIcon skill={item} />
					{item}
				</Badge>
			))}
		</div>
	);
}

export function ArticleParagraphs({ items }: { items: string[] }) {
	return (
		<div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
			{items.map((item) => (
				<p key={item} className="newspaper-body">
					{item}
				</p>
			))}
		</div>
	);
}

export function ProjectSection({
	label,
	children,
	uppercase = true,
	headerAside,
	viewport,
	variant = "plain",
	stackedHeader = false,
}: {
	label: string;
	children: ReactNode;
	uppercase?: boolean;
	headerAside?: ReactNode;
	viewport?: ViewportSize;
	variant?: "plain" | "boxed";
	stackedHeader?: boolean;
}) {
	if (variant === "boxed") {
		return (
			<section className="flex h-full w-full min-h-0 flex-col overflow-hidden border border-foreground/25 bg-card">
				<div
					className={cn(
						"newspaper-block-head px-4 py-2.5",
						headerAside && (stackedHeader || viewport === "mobile") && "space-y-2",
						headerAside &&
							!stackedHeader &&
							viewport !== "mobile" &&
							"flex items-start justify-between gap-4",
						!headerAside && "flex items-center",
					)}
				>
					<h4
						className={cn(
							"newspaper-headline text-sm",
							uppercase && "uppercase",
						)}
					>
						{label}
					</h4>
					{headerAside}
				</div>
				<div className="flex-1 px-4 py-3.5">{children}</div>
			</section>
		);
	}

	return (
		<section className="space-y-3">
			<div
				className={cn(
					headerAside && viewport === "mobile" && "space-y-2",
					headerAside && viewport !== "mobile" && "flex items-start justify-between gap-4",
				)}
			>
				<div className="article-subhead min-w-0">
					<span className="article-subhead__mark" aria-hidden>
						&gt;
					</span>
					<h4 className={cn(uppercase && "uppercase")}>{label}</h4>
				</div>
				{headerAside}
			</div>
			<div>{children}</div>
		</section>
	);
}
