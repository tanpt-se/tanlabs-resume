import { ExternalLink, Globe } from "lucide-react";
import { siAndroid, siApple } from "simple-icons";

import type { Project, ProjectStorePlatform, ResumeUiLabels } from "@/i18n";

import { getProjectMetaFields, type ProjectMetaField } from "./project-meta";
import { MetaPlaceholder, TeamMemberList, TechTagList } from "./newspaper-primitives";

const STORE_PLATFORM_ICONS = {
	"google-play": siAndroid,
	"app-store": siApple,
} as const;

function StorePlatformIcon({ platform }: { platform: ProjectStorePlatform }) {
	if (platform === "web") {
		return <Globe className="size-4 shrink-0 text-foreground" aria-hidden />;
	}

	const icon = STORE_PLATFORM_ICONS[platform];

	return (
		<svg
			role="img"
			aria-label={icon.title}
			viewBox="0 0 24 24"
			className="size-4 shrink-0 text-foreground"
		>
			<path fill="currentColor" d={icon.path} />
		</svg>
	);
}

function ProjectMetaItem({ label, value, url, members }: ProjectMetaField) {
	return (
		<div className="space-y-1 border-b border-border px-4 py-3 last:border-b-0 @md:[&:nth-last-child(-n+2)]:border-b-0 @md:[&:nth-child(odd)]:border-r">
			<p className="newspaper-kicker text-xs">{label}</p>
			{members !== undefined ? (
				members.length > 0 ? (
					<TeamMemberList items={members} />
				) : (
					<MetaPlaceholder />
				)
			) : url && value?.trim() ? (
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
				>
					{value}
					<ExternalLink className="size-3 shrink-0 opacity-60 group-hover:opacity-100" />
				</a>
			) : value?.trim() ? (
				<p className="text-sm font-medium text-foreground">{value}</p>
			) : (
				<MetaPlaceholder />
			)}
		</div>
	);
}

function ProjectStoreLinks({
	storeLinks,
}: {
	storeLinks: NonNullable<Project["storeLinks"]>;
}) {
	return (
		<ul className="space-y-2">
			{storeLinks.map((link) => (
				<li key={link.url}>
					<a
						href={link.url}
						target="_blank"
						rel="noreferrer"
						className="group inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
					>
						<StorePlatformIcon platform={link.platform} />
						<span>{link.title}</span>
						<ExternalLink className="size-3 shrink-0 opacity-60 group-hover:opacity-100" />
					</a>
				</li>
			))}
		</ul>
	);
}

type ProjectMetaPanelProps = {
	project: Project;
	labels: ResumeUiLabels;
};

export function ProjectMetaPanel({ project, labels }: ProjectMetaPanelProps) {
	const metaFields = getProjectMetaFields(project, labels);

	return (
		<div className="overflow-hidden border border-foreground/25 bg-card">
			<div className="grid @md:grid-cols-2">
				{metaFields.map((field) => (
					<ProjectMetaItem key={field.label} {...field} />
				))}
			</div>
			<div className="grid border-t border-border @md:grid-cols-2">
				<div className="space-y-2 border-b border-border px-4 py-3 @md:border-r @md:border-b-0">
					<p className="newspaper-kicker text-xs">{labels.techStack}</p>
					{project.techStack.length > 0 ? (
						<TechTagList items={project.techStack} />
					) : (
						<MetaPlaceholder />
					)}
				</div>
				<div className="space-y-2 px-4 py-3">
					<p className="newspaper-kicker text-xs">{labels.projectReferences}</p>
					{project.storeLinks?.length ? (
						<ProjectStoreLinks storeLinks={project.storeLinks} />
					) : (
						<MetaPlaceholder />
					)}
				</div>
			</div>
		</div>
	);
}
