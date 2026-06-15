import { cn } from "@/lib/utils";
import { getSkillIconColor, SKILL_ICONS } from "@/lib/skill-icons";

export function SkillIcon({
	skill,
	className,
	monochrome = false,
}: {
	skill: string;
	className?: string;
	monochrome?: boolean;
}) {
	const icon = SKILL_ICONS[skill];

	if (!icon) {
		return null;
	}

	const color = monochrome ? undefined : getSkillIconColor(icon.hex);

	return (
		<svg
			role="img"
			aria-label={icon.title}
			viewBox={icon.viewBox ?? "0 0 24 24"}
			className={cn("size-3.5 shrink-0 text-foreground", className)}
			style={color ? { color } : undefined}
		>
			<path fill="currentColor" d={icon.path} />
		</svg>
	);
}
