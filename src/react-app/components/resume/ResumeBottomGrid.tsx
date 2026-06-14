import { ExternalLink } from "lucide-react";

import { SkillsSetDialog } from "@/components/SkillsSetDialog";
import { SkillIcon } from "@/components/SkillIcon";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type {
	Certification,
	Education,
	ResumeUiLabels,
	Skill,
	SkillCategory,
	ViewportSize,
} from "@/i18n/types";

import { ResumeSection } from "./ResumeSection";

type ResumeBottomGridProps = {
	viewport: ViewportSize;
	labels: ResumeUiLabels;
	skills: Skill[];
	skillCategories: SkillCategory[];
	languages: string[];
	education: Education;
	certifications: Certification[];
};

export function ResumeBottomGrid({
	viewport,
	labels,
	skills,
	skillCategories,
	languages,
	education,
	certifications,
}: ResumeBottomGridProps) {
	return (
		<div
			className={cn(
				"grid w-full gap-8",
				viewport === "mobile" ? "grid-cols-1" : "grid-cols-2",
			)}
		>
			<ResumeSection
				title={labels.coreSkills}
				action={<SkillsSetDialog skillCategories={skillCategories} />}
				contentClassName="flex flex-wrap gap-2"
			>
				{skills.map((skill) => (
					<Badge
						key={skill.name}
						variant="outline"
						className="gap-1.5 rounded-none font-normal"
					>
						<SkillIcon skill={skill.name} />
						{skill.name}
					</Badge>
				))}
			</ResumeSection>

			<ResumeSection title={labels.languages}>
				<p className="newspaper-body text-sm leading-relaxed text-muted-foreground">
					{languages[0]}
				</p>
			</ResumeSection>

			<ResumeSection title={labels.education} contentClassName="space-y-2">
				<Badge variant="outline" className="rounded-none">
					{education.year}
				</Badge>
				<p className="text-sm font-semibold">{education.school}</p>
				<p className="newspaper-body text-sm text-muted-foreground">{education.degree}</p>
			</ResumeSection>

			<ResumeSection title={labels.certifications} contentClassName="space-y-3">
				{certifications.map((cert) => (
					<a
						key={cert.url}
						href={cert.url}
						target="_blank"
						rel="noreferrer"
						className="group flex items-start gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
					>
						<ExternalLink className="mt-0.5 size-3.5 shrink-0 opacity-60 group-hover:opacity-100" />
						<span>{cert.name}</span>
					</a>
				))}
			</ResumeSection>
		</div>
	);
}
