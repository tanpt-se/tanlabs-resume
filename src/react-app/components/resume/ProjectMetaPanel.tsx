import type { Project, ResumeUiLabels } from "@/i18n/types";

import { getProjectMetaFields } from "./project-meta";
import { TechTagList } from "./newspaper-primitives";

function ProjectMetaItem({ label, value }: { label: string; value: string }) {
	return (
		<div className="space-y-1 border-b border-border px-4 py-3 last:border-b-0 @md:[&:nth-last-child(-n+2)]:border-b-0 @md:[&:nth-child(odd)]:border-r">
			<p className="newspaper-kicker text-xs">{label}</p>
			<p className="text-sm font-medium text-foreground">{value}</p>
		</div>
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
					<ProjectMetaItem key={field.label} label={field.label} value={field.value} />
				))}
			</div>
			<div className="space-y-2 border-t border-border px-4 py-3">
				<p className="newspaper-kicker text-xs">{labels.techStack}</p>
				<TechTagList items={project.techStack} />
			</div>
		</div>
	);
}
