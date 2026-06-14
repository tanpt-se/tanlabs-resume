import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/providers/locale-provider";

export function DownloadBubble() {
	const { labels } = useLocale();

	return (
		<div className="print-hidden fixed right-5 bottom-20 z-[100]">
			<Button
				size="icon"
				aria-label={labels.printPdf}
				className="size-12 rounded-full shadow-xl transition-transform hover:scale-105"
				onClick={() => window.print()}
			>
				<Download className="size-5" />
			</Button>
		</div>
	);
}
