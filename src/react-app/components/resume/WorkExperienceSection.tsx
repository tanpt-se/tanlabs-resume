import { cn } from "@/lib/utils";
import type { Experience } from "@/i18n";

import { ArticleParagraphs, ProjectSection } from "./newspaper-primitives";

function ExperienceCard({
	job,
	className,
}: {
	job: Experience;
	className?: string;
}) {
	return (
		<div className={cn("print-break-inside-avoid w-full", className)}>
			<ProjectSection
				variant="boxed"
				label={job.company}
				header={
					<div className="space-y-0.5">
						<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
							<h4 className="newspaper-headline min-w-0 text-base font-extrabold leading-tight">
								{job.company}
							</h4>
							<p className="shrink-0 text-sm leading-snug text-muted-foreground">
								{job.period}
							</p>
						</div>
						<p className="font-body text-sm italic text-foreground">{job.role}</p>
					</div>
				}
			>
				<ArticleParagraphs items={job.highlights} />
			</ProjectSection>
		</div>
	);
}

type WorkExperienceSectionProps = {
	experiences: Experience[];
};

export function WorkExperienceSection({ experiences }: WorkExperienceSectionProps) {
	return (
		<div className="flex flex-col gap-5">
			{experiences.map((job) => (
				<ExperienceCard key={job.company} job={job} />
			))}
		</div>
	);
}
