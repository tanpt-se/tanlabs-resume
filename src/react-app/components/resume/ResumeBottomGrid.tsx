import { ExternalLink } from "lucide-react";

import type {
	Certification,
	Education,
	Language,
	Portrait,
	ResumeUiLabels,
} from "@/i18n";

import { NewspaperPhoto } from "./newspaper-primitives";
import { ResumeSection } from "./ResumeSection";

type ResumeBottomGridProps = {
	labels: ResumeUiLabels;
	language: Language;
	education: Education;
	portrait: Portrait;
	certifications: Certification[];
};

export function ResumeBottomGrid({
	labels,
	language,
	education,
	portrait,
	certifications,
}: ResumeBottomGridProps) {
	return (
		<div className="grid w-full grid-cols-1 items-start gap-8 @md:grid-cols-2">
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

				<ResumeSection title={labels.languages} contentClassName="space-y-2">
					<p className="text-sm font-semibold">{language.name}</p>
					<p className="newspaper-body text-sm text-muted-foreground">{language.detail}</p>
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
				src={portrait.src}
				alt=""
				className="print-break-inside-avoid"
			/>
		</div>
	);
}
