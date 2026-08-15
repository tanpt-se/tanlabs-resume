import { Download } from "lucide-react";

import { FAB_BUTTON_CLASS, FabBubble } from "@/components/FabBubble";
import { Button } from "@/components/ui/button";
import { uiLabels } from "@/i18n";
import { downloadResumePdf } from "@/lib/download-resume-pdf";

export function DownloadCvBubble() {
	return (
		<FabBubble className="bottom-20">
			<Button
				size="icon"
				aria-label={uiLabels.downloadCv}
				className={FAB_BUTTON_CLASS}
				onClick={() => downloadResumePdf()}
			>
				<Download className="size-5" />
			</Button>
		</FabBubble>
	);
}
