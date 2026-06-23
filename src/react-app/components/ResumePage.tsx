import { NewspaperDivider } from "@/components/resume/newspaper-primitives";
import { ProjectCard } from "@/components/resume/ProjectCard";
import { ResumeBottomGrid } from "@/components/resume/ResumeBottomGrid";
import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { ResumeSection } from "@/components/resume/ResumeSection";
import { SkillSetAppendix } from "@/components/resume/SkillSetAppendix";
import { WorkExperienceSection } from "@/components/resume/WorkExperienceSection";
import { useLocale } from "@/providers/locale-provider";

export default function ResumePage() {
	const { content, labels } = useLocale();
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

	return (
		<div className="newspaper-page min-h-screen bg-background">
			<div className="px-4 pt-2 pb-24">
				<div className="@container resume-preview-content mx-auto max-w-5xl space-y-6 px-2 pt-2 pb-4 @md:px-4 @md:pt-3 @md:pb-6">
					<ResumeHeader profile={profile} />

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
							<WorkExperienceSection profile={profile} experiences={experiences} />
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
							labels={labels}
							languages={languages}
							education={education}
							certifications={certifications}
						/>

						<NewspaperDivider />

						<SkillSetAppendix labels={labels} skillCategories={skillCategories} />
					</div>
				</div>
			</div>
		</div>
	);
}
