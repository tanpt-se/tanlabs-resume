import { useMemo } from "react";

import { SkillIcon } from "@/components/SkillIcon";
import { cn } from "@/lib/utils";
import { formatSkillYears, sortSkills } from "@/lib/skill-appendix";
import type { ResumeUiLabels, SkillCategory } from "@/i18n";

import { ResumeSection } from "./ResumeSection";

type SkillSetAppendixProps = {
	labels: ResumeUiLabels;
	skillCategories: SkillCategory[];
};

export function SkillSetAppendix({ labels, skillCategories }: SkillSetAppendixProps) {
	const sections = useMemo(
		() =>
			skillCategories.map((category) => ({
				...category,
				skills: sortSkills(category.skills, category.id),
			})),
		[skillCategories],
	);

	return (
		<ResumeSection
			title={labels.skillSetAppendix}
			contentClassName="space-y-4"
		>
			<p className="newspaper-kicker text-[0.68rem] text-muted-foreground">
				{labels.skillSetDescription}
			</p>

			<div className="grid grid-cols-1 gap-4 @md:grid-cols-2 @lg:grid-cols-3">
				{sections.map((section) => (
					<div
						key={section.id}
						className="overflow-hidden border border-foreground/25 bg-card"
					>
						<div className="newspaper-block-head border-b px-3 py-2">
							<h3 className="newspaper-headline text-xs uppercase">
								{labels.skillCategories[section.id]}
							</h3>
						</div>
						<div className="overflow-x-auto">
							<table className="w-full min-w-0 border-collapse text-sm">
								<thead>
									<tr className="border-b border-border bg-muted/40">
										<th className="newspaper-kicker px-3 py-2 text-left text-[0.62rem] font-bold">
											{labels.skillColumn}
										</th>
										<th className="newspaper-kicker px-3 py-2 text-right text-[0.62rem] font-bold">
											{labels.experienceColumn}
										</th>
									</tr>
								</thead>
								<tbody>
									{section.skills.map((skill, index) => (
										<tr
											key={skill.name}
											className={cn(
												"border-b border-border/70 last:border-b-0",
												index % 2 === 0 ? "bg-secondary/50" : "bg-card",
											)}
										>
											<td className="px-3 py-2">
												<div className="flex min-w-0 items-center gap-2">
													<SkillIcon skill={skill.name} />
													<span className="truncate font-medium">{skill.name}</span>
												</div>
											</td>
											<td className="px-3 py-2 text-right text-xs font-medium tabular-nums text-muted-foreground">
												{formatSkillYears(skill.years, labels)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				))}
			</div>
		</ResumeSection>
	);
}
