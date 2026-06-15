import type { Locale, ResumeContent } from "./types";
import { resumeEn } from "./resume/en";
import { resumeVi } from "./resume/vi";
import { uiLabels } from "./ui";

export type {
	Locale,
	ThemeMode,
	ResolvedTheme,
	ResumeContent,
	ResumeUiLabels,
	Skill,
	SkillCategory,
	SkillCategoryId,
	SkillCategoryLabels,
} from "./types";

const resumeByLocale: Record<Locale, ResumeContent> = {
	en: resumeEn,
	vi: resumeVi,
};

export function getResumeContent(locale: Locale): ResumeContent {
	return resumeByLocale[locale];
}

export function getUiLabels(locale: Locale) {
	return uiLabels[locale];
}

export function isLocale(value: string): value is Locale {
	return value === "en" || value === "vi";
}

export const LOCALE_STORAGE_KEY = "resume-locale";
export const THEME_STORAGE_KEY = "resume-theme";
export const DEFAULT_LOCALE: Locale = "en";
export const DEFAULT_THEME = "light" as const;
