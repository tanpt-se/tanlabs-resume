import { ResponsivePreview } from "@/components/ResponsivePreview";
import { NewspaperDivider } from "@/components/resume/newspaper-primitives";
import { ProjectCard } from "@/components/resume/ProjectCard";
import { ResumeBottomGrid } from "@/components/resume/ResumeBottomGrid";
import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { ResumeSection } from "@/components/resume/ResumeSection";
import { WorkExperienceSection } from "@/components/resume/WorkExperienceSection";
import { useLocale } from "@/providers/locale-provider";
import { useViewport } from "@/providers/viewport-provider";

export default function ResumePage() {
	const { content, labels } = useLocale();
	const { viewport } = useViewport();
	const {
		profile,
		summary,
		experiences,
		projects,
		languages,
		education,
		certifications,
		skillCategories,
	} = content;

	const skills = skillCategories.flatMap((category) => category.skills);

	return (
		<div className="newspaper-page min-h-screen bg-background">
			<div className="px-4 pt-2 pb-24">
				<ResponsivePreview>
					<div className="resume-preview-content mx-auto max-w-5xl space-y-6 px-2 pt-2 pb-4 @md:px-4 @md:pt-3 @md:pb-6">
						<ResumeHeader profile={profile} labels={labels} />

						<div className="space-y-8">
							<ResumeSection
								title={labels.professionalSummary}
								contentClassName="newspaper-drop-cap space-y-4 text-sm leading-relaxed text-muted-foreground"
							>
								{summary.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
							</ResumeSection>

							<ResumeSection title={labels.workExperience} contentClassName="space-y-5">
								<WorkExperienceSection
									profile={profile}
									experiences={experiences}
									viewport={viewport}
								/>
							</ResumeSection>

							<ResumeSection title={labels.highlightProjects} contentClassName="space-y-6">
								{projects.map((project, index) => (
									<div key={project.name} className="space-y-6">
										{index > 0 && <NewspaperDivider />}
										<ProjectCard project={project} labels={labels} />
									</div>
								))}
							</ResumeSection>

							<NewspaperDivider />

							<ResumeBottomGrid
								viewport={viewport}
								labels={labels}
								skills={skills}
								skillCategories={skillCategories}
								languages={languages}
								education={education}
								certifications={certifications}
							/>
						</div>
					</div>
				</ResponsivePreview>
			</div>
		</div>
	);
}
