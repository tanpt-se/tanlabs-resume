import type { ReactNode } from "react";

import { SkillIcon } from "@/components/SkillIcon";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function NewspaperDivider() {
	return (
		<div
			aria-hidden
			className="newspaper-divider flex items-center gap-4 py-1"
		>
			<div className="h-px flex-1 bg-foreground/25" />
			<SkillIcon skill="React" monochrome className="size-4 shrink-0" />
			<div className="h-px flex-1 bg-foreground/25" />
		</div>
	);
}

export function TechTagList({ items }: { items: string[] }) {
	return (
		<div className="flex flex-wrap gap-2">
			{items.map((item) => (
				<Badge key={item} variant="outline" className="gap-1.5 rounded-none font-normal">
					<SkillIcon skill={item} monochrome />
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
	header,
	headerAside,
	variant = "plain",
	stackedHeader = false,
}: {
	label: string;
	children: ReactNode;
	uppercase?: boolean;
	header?: ReactNode;
	headerAside?: ReactNode;
	variant?: "plain" | "boxed";
	stackedHeader?: boolean;
}) {
	if (variant === "boxed") {
		return (
			<section className="flex h-full w-full min-h-0 flex-col overflow-hidden border border-foreground/25 bg-card">
				<div
					className={cn(
						"newspaper-block-head px-4 py-2.5",
						!header &&
							headerAside &&
							stackedHeader &&
							"space-y-2",
						!header &&
							headerAside &&
							!stackedHeader &&
							"space-y-2 @md:flex @md:items-start @md:justify-between @md:gap-4 @md:space-y-0",
						!header && !headerAside && "flex items-center",
					)}
				>
					{header ?? (
						<>
							<h4
								className={cn(
									"newspaper-headline text-sm",
									uppercase && "uppercase",
								)}
							>
								{label}
							</h4>
							{headerAside}
						</>
					)}
				</div>
				<div className="flex-1 px-4 py-3.5">{children}</div>
			</section>
		);
	}

	return (
		<section className="space-y-3">
			<div
				className={cn(
					headerAside &&
						"space-y-2 @md:flex @md:items-start @md:justify-between @md:gap-4 @md:space-y-0",
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
