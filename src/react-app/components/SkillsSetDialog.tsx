import {
	Cloud,
	Code2,
	GitBranch,
	Layers,
	LayoutTemplate,
	Palette,
	Smartphone,
	Workflow,
} from "lucide-react";
import type { ComponentType } from "react";
import { useMemo } from "react";

import { SkillIcon } from "@/components/SkillIcon";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import type { SkillCategory, SkillCategoryId } from "@/i18n/types";
import { cn } from "@/lib/utils";
import { useLocale } from "@/providers/locale-provider";
import { useViewport } from "@/providers/viewport-provider";

const CATEGORY_ICONS: Record<
	SkillCategoryId,
	ComponentType<{ className?: string }>
> = {
	frontend: Code2,
	mobile: Smartphone,
	stateManagement: Workflow,
	backend: Layers,
	cloud: Cloud,
	devops: GitBranch,
	uiUx: Palette,
	methodology: LayoutTemplate,
};

export function SkillsSetDialog({
	skillCategories,
}: {
	skillCategories: SkillCategory[];
}) {
	const { labels } = useLocale();
	const { viewport } = useViewport();

	const sections = useMemo(
		() =>
			skillCategories.map((category) => ({
				...category,
				skills: [...category.skills].sort((a, b) => b.years - a.years),
			})),
		[skillCategories],
	);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" size="sm" className="print-hidden shrink-0">
					<Layers className="size-3.5" />
					{labels.openSkillSet}
				</Button>
			</DialogTrigger>
			<DialogContent
				className={cn(
					"max-h-[min(85vh,720px)] gap-0 overflow-hidden p-0",
					viewport === "web" && "max-w-5xl",
					viewport === "tablet" && "max-w-3xl",
					viewport === "mobile" && "max-w-lg",
				)}
			>
				<DialogHeader className="border-b px-6 py-5">
					<DialogTitle>{labels.skillSetTitle}</DialogTitle>
					<DialogDescription>{labels.skillSetDescription}</DialogDescription>
				</DialogHeader>
				<div
					className={cn(
						"grid gap-4 overflow-y-auto px-6 py-5",
						viewport === "web" && "grid-cols-3",
						viewport === "tablet" && "grid-cols-2",
						viewport === "mobile" && "grid-cols-1",
					)}
				>
					{sections.map((section) => {
						const Icon = CATEGORY_ICONS[section.id];

						return (
							<section
								key={section.id}
								className="flex h-full flex-col overflow-hidden rounded-xl border bg-card"
							>
								<div className="flex items-center gap-2 border-b border-primary/10 bg-primary/5 px-3.5 py-2.5">
									<div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
										<Icon className="size-3.5" />
									</div>
									<h3 className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
										{labels.skillCategories[section.id]}
									</h3>
								</div>
								<div className="overflow-x-auto">
									<table className="w-full min-w-0 border-collapse text-sm">
										<tbody>
											{section.skills.map((skill, index) => (
												<tr
													key={skill.name}
													className={cn(
														"border-b border-border/70 last:border-b-0",
														index % 2 === 0
															? "bg-secondary/90 dark:bg-secondary"
															: "bg-card",
													)}
												>
													<td className="px-3 py-2.5">
														<div className="flex min-w-0 items-center gap-2">
															<SkillIcon skill={skill.name} />
															<span className="truncate font-medium">
																{skill.name}
															</span>
														</div>
													</td>
													<td className="px-3 py-2.5 text-right text-xs font-medium tabular-nums text-muted-foreground">
														{skill.years} {labels.yearsUnit}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</section>
						);
					})}
				</div>
			</DialogContent>
		</Dialog>
	);
}
