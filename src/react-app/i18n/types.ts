export type Locale = "en" | "vi";

export type ThemeMode = "light" | "dark" | "system";

export type ResolvedTheme = "light" | "dark";

export type Certification = {
	name: string;
	url: string;
};

export type Education = {
	school: string;
	url: string;
	year: string;
	degree: string;
	photoCaption: string;
};

export type Experience = {
	company: string;
	role: string;
	period: string;
	highlights: string[];
};

export type Project = {
	name: string;
	company: string;
	market: string;
	period: string;
	domain: string;
	description: string;
	techStack: string[];
	position: string;
	teamSize: string;
	responsibilities: string[];
};

export type SkillCategoryId =
	| "frontend"
	| "mobile"
	| "stateManagement"
	| "backend"
	| "cloud"
	| "devops"
	| "uiUx"
	| "methodology";

export type Skill = {
	name: string;
	years: number;
};

export type SkillCategory = {
	id: SkillCategoryId;
	skills: Skill[];
};

export type Profile = {
	name: string;
	title: string;
	location: string;
	phone: string;
	email: string;
	eyebrow: string;
	birthDate: string;
	photoCaption: string;
};

export type ResumeContent = {
	profile: Profile;
	summary: string[];
	experiences: Experience[];
	projects: Project[];
	languages: string[];
	education: Education;
	certifications: Certification[];
	skillCategories: SkillCategory[];
};

export type SkillCategoryLabels = Record<SkillCategoryId, string>;

export type ResumeUiLabels = {
	skillSetAppendix: string;
	skillSetDescription: string;
	yearsUnit: string;
	skillColumn: string;
	experienceColumn: string;
	skillCategories: SkillCategoryLabels;
	languages: string;
	education: string;
	certifications: string;
	professionalSummary: string;
	workExperience: string;
	highlightProjects: string;
	projectCompany: string;
	projectMarket: string;
	projectPeriod: string;
	teamMembers: string;
	projectDomain: string;
	projectRole: string;
	projectOverview: string;
	techStack: string;
	keyResponsibilities: string;
	printPdf: string;
	theme: string;
	language: string;
	settings: string;
	localeEn: string;
	localeVi: string;
	themeLight: string;
	themeDark: string;
	themeSystem: string;
};
