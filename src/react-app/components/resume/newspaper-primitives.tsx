import type { ReactNode } from "react";

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
			<SkillIcon skill="React" className="size-4 shrink-0" />
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
	header,
	variant = "plain",
}: {
	label: string;
	children: ReactNode;
	header?: ReactNode;
	variant?: "plain" | "boxed";
}) {
	const subhead = (
		<div className="article-subhead min-w-0">
			<span className="article-subhead__mark" aria-hidden>
				&gt;
			</span>
			<h4 className="uppercase">{label}</h4>
		</div>
	);

	if (variant === "boxed") {
		return (
			<section className="flex h-full w-full min-h-0 flex-col overflow-hidden border border-foreground/25 bg-card">
				<div className="newspaper-block-head px-4 py-2.5">
					{header ?? (
						<h4 className="newspaper-headline text-sm uppercase">{label}</h4>
					)}
				</div>
				<div className="flex-1 px-4 py-3.5">{children}</div>
			</section>
		);
	}

	return (
		<section className="space-y-3">
			{subhead}
			<div>{children}</div>
		</section>
	);
}
