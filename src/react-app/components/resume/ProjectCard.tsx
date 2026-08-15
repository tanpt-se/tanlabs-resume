import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Project, ResumeUiLabels } from "@/i18n";

import { KeyResponsibilityList } from "./KeyResponsibilityList";
import { ProjectSection } from "./newspaper-primitives";
import { ProjectMetaPanel } from "./ProjectMetaPanel";
import { hasProjectResponsibilities } from "@/lib/key-responsibilities";

type ProjectCardProps = {
	project: Project;
	labels: ResumeUiLabels;
};

export function ProjectCard({ project, labels }: ProjectCardProps) {
	return (
		<Card className="gap-0 overflow-hidden border-2 border-foreground/35 bg-card py-0 print:overflow-visible">
			<CardHeader className="newspaper-block-head gap-0 border-b px-3 py-2 !pb-2">
				<CardTitle className="newspaper-headline text-lg leading-tight uppercase">
					{project.name}
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3 px-3 py-3">
				<ProjectMetaPanel project={project} labels={labels} />

				<div className="print-break-inside-avoid">
					<ProjectSection label={labels.projectOverview}>
						<p className="newspaper-body text-sm leading-relaxed text-muted-foreground">
							{project.description}
						</p>
					</ProjectSection>
				</div>

				{hasProjectResponsibilities(project.responsibilities) ? (
					<ProjectSection label={labels.keyResponsibilities}>
						<KeyResponsibilityList items={project.responsibilities} />
					</ProjectSection>
				) : null}
			</CardContent>
		</Card>
	);
}
