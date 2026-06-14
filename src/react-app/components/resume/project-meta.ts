import type { Project, ResumeUiLabels } from "@/i18n/types";

export type ProjectMetaField = {
	label: string;
	value: string;
};

export function getProjectMetaFields(
	project: Project,
	labels: ResumeUiLabels,
): ProjectMetaField[] {
	return [
		{ label: labels.projectCompany, value: project.company },
		{ label: labels.projectMarket, value: project.market },
		{ label: labels.projectPeriod, value: project.period },
		{ label: labels.teamMembers, value: project.teamSize },
		{ label: labels.projectDomain, value: project.domain },
		{ label: labels.projectRole, value: project.position },
	];
}
