import type { Locale, ResumeContent, ViewportSize } from "./types";
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
	ViewportSize,
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
export const VIEWPORT_STORAGE_KEY = "resume-viewport";
export const DEFAULT_LOCALE: Locale = "vi";
export const DEFAULT_THEME = "dark" as const;
export const DEFAULT_VIEWPORT = "web" as const;

export function isViewportSize(value: string): value is ViewportSize {
	return value === "mobile" || value === "tablet" || value === "web";
}

export const VIEWPORT_WIDTHS = {
	mobile: 390,
	tablet: 768,
	web: 1152,
} as const;

/** Logical screen heights for device-frame preview (portrait). */
export const VIEWPORT_HEIGHTS = {
	mobile: 844,
	tablet: 1024,
	web: 0,
} as const;
