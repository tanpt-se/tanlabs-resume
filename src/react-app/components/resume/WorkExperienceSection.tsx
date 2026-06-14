import { cn } from "@/lib/utils";
import type { Experience, Profile, ViewportSize } from "@/i18n/types";

import { ArticleParagraphs, ProjectSection } from "./newspaper-primitives";

function WorkExperiencePhoto({ profile }: { profile: Profile }) {
	return (
		<figure className="newspaper-photo">
			<div className="newspaper-photo__frame">
				<img
					src="/work-photo.png"
					alt={profile.name}
					className="newspaper-photo__image"
				/>
			</div>
			<figcaption className="newspaper-photo__caption">
				{profile.photoCaption}
			</figcaption>
		</figure>
	);
}

function ExperienceCard({
	job,
	viewport,
	className,
}: {
	job: Experience;
	viewport: ViewportSize;
	className?: string;
}) {
	return (
		<div className={cn("h-full w-full", className)}>
			<ProjectSection
				variant="boxed"
				stackedHeader
				label={job.company}
				uppercase={false}
				viewport={viewport}
				headerAside={
					<div className="space-y-0.5 text-left text-sm">
						<p className="font-medium text-foreground">{job.role}</p>
						<p className="text-xs text-muted-foreground">{job.period}</p>
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
	viewport: ViewportSize;
};

export function WorkExperienceSection({
	profile,
	experiences,
	viewport,
}: WorkExperienceSectionProps) {
	if (viewport === "mobile") {
		return experiences.map((job) => (
			<ExperienceCard key={job.company} job={job} viewport={viewport} />
		));
	}

	const [primaryExperience, ...otherExperiences] = experiences;

	return (
		<>
			<div className="flex items-stretch gap-5">
				<div className="flex w-1/2 min-w-0 self-stretch">
					<WorkExperiencePhoto profile={profile} />
				</div>
				<div className="flex w-1/2 min-w-0 self-stretch">
					{primaryExperience ? (
						<ExperienceCard job={primaryExperience} viewport={viewport} />
					) : null}
				</div>
			</div>
			<div className="grid grid-cols-2 items-stretch gap-5">
				{otherExperiences.map((job) => (
					<ExperienceCard key={job.company} job={job} viewport={viewport} />
				))}
			</div>
		</>
	);
}
