import type { Project, ResumeUiLabels } from "@/i18n";

export type ProjectMetaField = {
	label: string;
	value?: string;
	url?: string;
	members?: Project["teamMembers"];
};

export function getProjectMetaFields(
	project: Project,
	labels: ResumeUiLabels,
): ProjectMetaField[] {
	return [
		{
			label: labels.projectCompany,
			value: project.company,
			url: project.clientUrl,
		},
		{ label: labels.projectMarket, value: project.market },
		{ label: labels.projectPeriod, value: project.period },
		{ label: labels.teamMembers, members: project.teamMembers },
		{ label: labels.projectDomain, value: project.domain },
		{ label: labels.projectRole, value: project.position },
	];
}
