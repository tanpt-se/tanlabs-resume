const PDF_PATH = "/Pham-Trong-Tan-CV.pdf";
const PDF_FILENAME = "Pham-Trong-Tan-CV.pdf";

export function downloadResumePdf(): void {
	const link = document.createElement("a");
	link.href = PDF_PATH;
	link.download = PDF_FILENAME;
	document.body.appendChild(link);
	link.click();
	link.remove();
}
