import type { ReactNode } from "react";

import { NewspaperDivider } from "@/components/resume/newspaper-primitives";
import { ProjectCard } from "@/components/resume/ProjectCard";
import { ResumeBottomGrid } from "@/components/resume/ResumeBottomGrid";
import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { ResumeSection } from "@/components/resume/ResumeSection";
// import { SkillSetAppendix } from "@/components/resume/SkillSetAppendix";
import { WorkExperienceSection } from "@/components/resume/WorkExperienceSection";
import { resumeContent, uiLabels } from "@/i18n";

function ResumeSheet({ children }: { children: ReactNode }) {
	return <article className="resume-sheet">{children}</article>;
}

export default function ResumePage() {
	const {
		profile,
		summary,
		experiences,
		projects,
		language,
		education,
		certifications,
		// skillCategories,
		portrait,
	} = resumeContent;

	return (
		<div className="newspaper-page min-h-screen bg-background">
			<div className="resume-stage">
				<ResumeSheet>
					<ResumeHeader profile={profile} />

					<div className="space-y-8">
						<ResumeSection
							title={uiLabels.professionalSummary}
							contentClassName="newspaper-drop-cap space-y-4 text-sm leading-relaxed text-muted-foreground"
						>
							{summary.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</ResumeSection>

						<ResumeBottomGrid
							labels={uiLabels}
							language={language}
							education={education}
							portrait={portrait}
							certifications={certifications}
						/>
					</div>
				</ResumeSheet>

				<ResumeSheet>
					<ResumeSection title={uiLabels.workExperience} contentClassName="space-y-5">
						<WorkExperienceSection experiences={experiences} />
					</ResumeSection>
				</ResumeSheet>

				<ResumeSheet>
					<ResumeSection title={uiLabels.highlightProjects} contentClassName="space-y-6">
						{projects.map((project, index) => (
							<div key={project.name} className="print-project-page space-y-6">
								{index > 0 && <NewspaperDivider />}
								<ProjectCard project={project} labels={uiLabels} />
							</div>
						))}
					</ResumeSection>
				</ResumeSheet>

				{/* ponytail: appendix off until skill years are recounted
				<ResumeSheet>
					<SkillSetAppendix labels={uiLabels} skillCategories={skillCategories} />
				</ResumeSheet>
				*/}
			</div>
		</div>
	);
}
