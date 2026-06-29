import { cn } from "@/lib/utils";
import type { Experience, Profile } from "@/i18n";

import { ArticleParagraphs, NewspaperPhoto, ProjectSection } from "./newspaper-primitives";

function ExperienceCard({
	job,
	className,
}: {
	job: Experience;
	className?: string;
}) {
	return (
		<div className={cn("h-full w-full", className)}>
			<ProjectSection
				variant="boxed"
				label={job.company}
				header={
					<div className="space-y-0.5">
						<div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-3">
							<h4 className="newspaper-headline min-w-0 text-base font-extrabold leading-tight md:text-lg">
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
	profile: Profile;
	experiences: Experience[];
};

export function WorkExperienceSection({
	profile,
	experiences,
}: WorkExperienceSectionProps) {
	const [primaryExperience, ...otherExperiences] = experiences;

	return (
		<>
			<div className="flex flex-col gap-5 md:hidden">
				<NewspaperPhoto
					src="/work-photo.png"
					alt={profile.name}
					caption={profile.photoCaption}
				/>
				{experiences.map((job) => (
					<ExperienceCard key={job.company} job={job} />
				))}
			</div>

			<div className="hidden flex-col gap-5 md:flex">
				<div className="flex items-stretch gap-5">
					<div className="flex w-1/2 min-w-0 self-stretch">
						<NewspaperPhoto
							src="/work-photo.png"
							alt={profile.name}
							caption={profile.photoCaption}
						/>
					</div>
					<div className="flex w-1/2 min-w-0 self-stretch">
						{primaryExperience ? (
							<ExperienceCard job={primaryExperience} />
						) : null}
					</div>
				</div>
				<div className="grid grid-cols-2 items-stretch gap-5">
					{otherExperiences.map((job) => (
						<ExperienceCard key={job.company} job={job} />
					))}
				</div>
			</div>
		</>
	);
}
