import { Mail, MapPin, Phone } from "lucide-react";

import type { Profile } from "@/i18n";

type ResumeHeaderProps = {
	profile: Profile;
};

export function ResumeHeader({ profile }: ResumeHeaderProps) {
	return (
		<header className="resume-header px-2 pb-4 pt-1 @md:px-4 @md:pb-5 @md:pt-2">
			<div className="flex w-full flex-col items-center space-y-4 text-center">
				<p className="text-center text-sm">{profile.birthDate}</p>
				<div className="w-full space-y-2 text-center">
					<h1 className="newspaper-headline text-center text-4xl uppercase @md:text-6xl">
						{profile.name}
					</h1>
					<p className="text-center text-lg font-semibold text-muted-foreground @md:text-xl">
						{profile.title}
					</p>
				</div>
				<div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
					<span className="inline-flex items-center gap-1.5">
						<MapPin className="size-3.5 shrink-0" />
						{profile.location}
					</span>
					<a
						href={`tel:${profile.phone.replace(/\s/g, "")}`}
						className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
					>
						<Phone className="size-3.5 shrink-0" />
						{profile.phone}
					</a>
					<a
						href={`mailto:${profile.email}`}
						className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
					>
						<Mail className="size-3.5 shrink-0" />
						{profile.email}
					</a>
				</div>
			</div>
		</header>
	);
}
