import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import type { ProjectTeamMember } from "@/i18n";

import { SkillIcon } from "@/components/SkillIcon";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function NewspaperPhoto({
	src,
	alt,
	caption,
	className,
}: {
	src: string;
	alt: string;
	caption: string;
	className?: string;
}) {
	return (
		<figure className={cn("newspaper-photo", className)}>
			<div className="newspaper-photo__frame">
				<img src={src} alt={alt} className="newspaper-photo__image" />
			</div>
			<figcaption className="newspaper-photo__caption">{caption}</figcaption>
		</figure>
	);
}

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

export function MetaPlaceholder() {
	return <span className="text-sm text-muted-foreground">—</span>;
}

export function TeamMemberList({ items }: { items: ProjectTeamMember[] }) {
	return (
		<div className="flex flex-wrap gap-1.5">
			{items.map((item) => (
				<Badge
					key={item.role}
					variant="outline"
					className="gap-1 rounded-none font-normal tabular-nums"
				>
					<span className="font-semibold text-foreground">{item.count}</span>
					<span className="text-muted-foreground">×</span>
					<span>{item.role}</span>
				</Badge>
			))}
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
	collapsible = false,
	defaultExpanded = true,
}: {
	label: string;
	children: ReactNode;
	uppercase?: boolean;
	header?: ReactNode;
	headerAside?: ReactNode;
	variant?: "plain" | "boxed";
	stackedHeader?: boolean;
	collapsible?: boolean;
	defaultExpanded?: boolean;
}) {
	const [expanded, setExpanded] = useState(defaultExpanded);

	const subhead = (
		<div className="article-subhead min-w-0">
			<span className="article-subhead__mark" aria-hidden>
				&gt;
			</span>
			<h4 className={cn(uppercase && "uppercase")}>{label}</h4>
		</div>
	);

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
			{collapsible ? (
				<button
					type="button"
					onClick={() => setExpanded((prev) => !prev)}
					aria-expanded={expanded}
					className="flex w-full min-w-0 cursor-pointer items-center justify-between gap-3 text-left"
				>
					{subhead}
					<ChevronDown
						aria-hidden
						className={cn(
							"size-4 shrink-0 text-muted-foreground transition-transform duration-200",
							expanded && "rotate-180",
						)}
					/>
				</button>
			) : (
				<div
					className={cn(
						headerAside &&
							"space-y-2 @md:flex @md:items-start @md:justify-between @md:gap-4 @md:space-y-0",
					)}
				>
					{subhead}
					{headerAside}
				</div>
			)}
			{(!collapsible || expanded) && <div>{children}</div>}
		</section>
	);
}
