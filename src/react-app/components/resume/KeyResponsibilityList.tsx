import {
	listProjectResponsibilities,
	type ProjectResponsibilities,
} from "@/lib/key-responsibilities";

type KeyResponsibilityListProps = {
	items: ProjectResponsibilities;
};

export function KeyResponsibilityList({ items }: KeyResponsibilityListProps) {
	const entries = listProjectResponsibilities(items);

	if (entries.length === 0) {
		return null;
	}

	return (
		<div className="space-y-3 text-sm leading-relaxed">
			{entries.map(({ label, bullets }) => (
				<div key={label} className="print-break-inside-avoid">
					<p className="font-semibold text-foreground">{label}</p>
						<ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
						{bullets?.map((item) => (
							<li key={item} className="newspaper-body print-break-inside-avoid">
								{item}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
