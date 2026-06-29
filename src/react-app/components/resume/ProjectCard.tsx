import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Project, ResumeUiLabels } from "@/i18n";

import { ArticleParagraphs, ProjectSection } from "./newspaper-primitives";
import { ProjectMetaPanel } from "./ProjectMetaPanel";

type ProjectCardProps = {
	project: Project;
	labels: ResumeUiLabels;
};

export function ProjectCard({ project, labels }: ProjectCardProps) {
	return (
		<Card className="gap-0 overflow-hidden border-2 border-foreground/35 bg-card py-0">
			<CardHeader className="newspaper-block-head gap-0 border-b px-4 py-2.5 !pb-2.5">
				<CardTitle className="newspaper-headline text-xl leading-tight uppercase">
					{project.name}
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-5 px-4 pt-3.5 pb-4">
				<ProjectMetaPanel project={project} labels={labels} />

				<ProjectSection label={labels.projectOverview}>
					<p className="newspaper-body text-sm leading-relaxed text-muted-foreground">
						{project.description}
					</p>
				</ProjectSection>

				<ProjectSection
					label={labels.keyResponsibilities}
					collapsible
					defaultExpanded={false}
				>
					{project.responsibilities.length > 0 ? (
						<ArticleParagraphs items={project.responsibilities} />
					) : (
						<p className="newspaper-body text-sm italic text-muted-foreground">
							{labels.contentUpdating}
						</p>
					)}
				</ProjectSection>
			</CardContent>
		</Card>
	);
}
