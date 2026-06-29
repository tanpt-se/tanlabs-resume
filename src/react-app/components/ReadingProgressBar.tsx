import { useReadingProgress } from "@/hooks/use-reading-progress";

export function ReadingProgressBar() {
	const progress = useReadingProgress();

	return (
		<div
			className="print-hidden pointer-events-none fixed inset-x-0 top-0 z-[90] h-1 bg-border"
			role="progressbar"
			aria-valuenow={Math.round(progress)}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-label="Reading progress"
		>
			<div
				className="h-full bg-foreground transition-[width] duration-150 ease-out"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
}
