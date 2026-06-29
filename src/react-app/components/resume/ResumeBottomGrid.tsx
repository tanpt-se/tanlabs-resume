import { ExternalLink } from "lucide-react";

import type {
	Certification,
	Education,
	ResumeUiLabels,
} from "@/i18n";

import { NewspaperPhoto } from "./newspaper-primitives";
import { ResumeSection } from "./ResumeSection";

type ResumeBottomGridProps = {
	labels: ResumeUiLabels;
	languages: string[];
	education: Education;
	certifications: Certification[];
};

export function ResumeBottomGrid({
	labels,
	languages,
	education,
	certifications,
}: ResumeBottomGridProps) {
	return (
		<div className="grid w-full grid-cols-1 items-stretch gap-8 @md:grid-cols-2">
			<div className="space-y-8">
				<ResumeSection title={labels.certifications} contentClassName="space-y-3">
					{certifications.map((cert) => (
						<a
							key={cert.url}
							href={cert.url}
							target="_blank"
							rel="noreferrer"
							className="group flex items-start gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
						>
							<ExternalLink className="mt-0.5 size-3.5 shrink-0 opacity-60 group-hover:opacity-100" />
							<span>{cert.name}</span>
						</a>
					))}
				</ResumeSection>

				<ResumeSection title={labels.languages}>
					<p className="newspaper-body text-sm leading-relaxed text-muted-foreground">
						{languages[0]}
					</p>
				</ResumeSection>

				<ResumeSection title={labels.education} contentClassName="space-y-2">
					<a
						href={education.url}
						target="_blank"
						rel="noreferrer"
						className="text-sm font-semibold underline-offset-4 hover:underline"
					>
						{education.school} ({education.year})
					</a>
					<p className="newspaper-body text-sm text-muted-foreground">{education.degree}</p>
				</ResumeSection>
			</div>

			<NewspaperPhoto
				src="/education-photo.png"
				alt={education.photoCaption}
				caption={education.photoCaption}
				className="h-full min-h-48"
			/>
		</div>
	);
}
