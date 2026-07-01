import type { ProjectResponsibilities } from "@/lib/key-responsibilities";

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

export type ProjectStorePlatform = "google-play" | "app-store" | "web";

export type ProjectStoreLink = {
	platform: ProjectStorePlatform;
	title: string;
	url: string;
};

export type ProjectTeamMember = {
	count: number;
	role: string;
};

export type Project = {
	name: string;
	company: string;
	clientUrl?: string;
	market: string;
	period: string;
	domain: string;
	description: string;
	storeLinks?: ProjectStoreLink[];
	techStack: string[];
	position: string;
	teamMembers: ProjectTeamMember[];
	responsibilities: ProjectResponsibilities;
};

export type SkillCategoryId =
	| "frontend"
	| "mobile"
	| "stateManagement"
	| "uiUx"
	| "backend"
	| "database"
	| "cloud"
	| "versionControl"
	| "devOps"
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
	birthDate: string;
	photoCaption: string;
};

export type ResumeContent = {
	profile: Profile;
	summary: string[];
	experiences: Experience[];
	projects: Project[];
	language: string;
	education: Education;
	certifications: Certification[];
	skillCategories: SkillCategory[];
};

export type SkillCategoryLabels = Record<SkillCategoryId, string>;

export type ResumeUiLabels = {
	skillSetAppendix: string;
	skillSetDescription: string;
	yearUnit: string;
	yearsUnit: string;
	monthUnit: string;
	monthsUnit: string;
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
	projectReferences: string;
	techStack: string;
	keyResponsibilities: string;
	theme: string;
	settings: string;
	themeLight: string;
	themeDark: string;
	themeSystem: string;
};
