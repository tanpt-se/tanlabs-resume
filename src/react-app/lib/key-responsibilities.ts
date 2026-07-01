export const PROJECT_RESPONSIBILITY_KEYS = [
	"Technical Leadership & Architecture",
	"Product Delivery & Engineering Excellence",
	"Cross-functional Collaboration & UI/UX",
	"Team Mentorship & Agile Coordination",
] as const;

export type ProjectResponsibilityKey = (typeof PROJECT_RESPONSIBILITY_KEYS)[number];

export type ProjectResponsibilityContent = readonly string[];

export type ProjectResponsibilities = Partial<
	Record<ProjectResponsibilityKey, ProjectResponsibilityContent>
>;

type ProjectResponsibilityItem = {
	label: ProjectResponsibilityKey;
	bullets?: ProjectResponsibilityContent;
};

export function listProjectResponsibilities(
	items: ProjectResponsibilities,
): ProjectResponsibilityItem[] {
	return PROJECT_RESPONSIBILITY_KEYS.flatMap((label) => {
		const bullets = items[label]?.filter((item) => item.trim().length > 0);
		if (!bullets?.length) {
			return [];
		}

		return [{ label, bullets }];
	});
}

export function hasProjectResponsibilities(items: ProjectResponsibilities): boolean {
	return listProjectResponsibilities(items).length > 0;
}
