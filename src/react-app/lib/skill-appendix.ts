import type { ResumeUiLabels, Skill, SkillCategory } from "@/i18n";

type SkillYearLabels = Pick<
	ResumeUiLabels,
	"yearUnit" | "yearsUnit" | "monthUnit" | "monthsUnit"
>;

export function formatSkillYears(years: number, labels: SkillYearLabels): string {
	if (years === 0) {
		return "—";
	}

	const totalMonths = Math.round(years * 12);

	if (totalMonths <= 0) {
		return "—";
	}

	const wholeYears = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	if (wholeYears === 0) {
		if (months === 1) {
			return `1 ${labels.monthUnit}`;
		}

		return `${months} ${labels.monthsUnit}`;
	}

	if (months === 0) {
		if (wholeYears === 1) {
			return `1 ${labels.yearUnit}`;
		}

		return `${wholeYears} ${labels.yearsUnit}`;
	}

	const yearPart =
		wholeYears === 1 ? `1 ${labels.yearUnit}` : `${wholeYears} ${labels.yearsUnit}`;
	const monthPart = months === 1 ? `1 ${labels.monthUnit}` : `${months} ${labels.monthsUnit}`;

	return `${yearPart} ${monthPart}`;
}

function compareSkillsByYears(a: Skill, b: Skill): number {
	if (b.years !== a.years) {
		return b.years - a.years;
	}

	return a.name.localeCompare(b.name);
}

export function sortSkills(skills: Skill[], categoryId: SkillCategory["id"]): Skill[] {
	if (categoryId === "frontend") {
		const react = skills.find((skill) => skill.name === "React");
		const nextJs = skills.find((skill) => skill.name === "Next.js");
		const remaining = skills
			.filter((skill) => skill.name !== "React" && skill.name !== "Next.js")
			.sort(compareSkillsByYears);

		return [...(react ? [react] : []), ...(nextJs ? [nextJs] : []), ...remaining];
	}

	return [...skills].sort(compareSkillsByYears);
}
