import { cn } from "@/lib/utils";
import { getSkillIconColor, SKILL_ICONS } from "@/lib/skill-icons";

export function SkillIcon({
	skill,
	className,
}: {
	skill: string;
	className?: string;
}) {
	const icon = SKILL_ICONS[skill];

	if (!icon) {
		return null;
	}

	const color = getSkillIconColor(icon.hex);

	return (
		<svg
			role="img"
			aria-label={icon.title}
			viewBox={icon.viewBox ?? "0 0 24 24"}
			className={cn("size-3.5 shrink-0", !color && "text-foreground", className)}
			style={color ? { color } : undefined}
		>
			<path fill="currentColor" d={icon.path} />
		</svg>
	);
}
