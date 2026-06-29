import { resumeContent } from "./resume/content";
import { uiLabels } from "./ui";

export type {
	ThemeMode,
	ResolvedTheme,
	ResumeContent,
	ResumeUiLabels,
	Skill,
	SkillCategory,
	SkillCategoryId,
	SkillCategoryLabels,
	Profile,
	Experience,
	Project,
	ProjectStorePlatform,
	ProjectStoreLink,
	ProjectTeamMember,
	Certification,
	Education,
} from "./types";

export { uiLabels, resumeContent };
export const THEME_STORAGE_KEY = "resume-theme";
export const DEFAULT_THEME = "light" as const;
