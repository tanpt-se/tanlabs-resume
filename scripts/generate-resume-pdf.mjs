import { access, rename } from "node:fs/promises";
import { spawn } from "node:child_process";
import process from "node:process";

const host = "127.0.0.1";
const port = 4177;
const outputPath = `${process.cwd()}/public/Pham-Trong-Tan-CV.pdf`;
const temporaryPath = `${process.cwd()}/public/.Pham-Trong-Tan-CV.pdf`;
const chromeCandidates = [
	process.env.CHROME_PATH,
	"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
	"/Applications/Chromium.app/Contents/MacOS/Chromium",
].filter(Boolean);

async function findChrome() {
	for (const candidate of chromeCandidates) {
		try {
			await access(candidate);
			return candidate;
		} catch {}
	}

	throw new Error("Chrome not found. Set CHROME_PATH to a Chrome or Chromium executable.");
}

async function waitForServer(url) {
	for (let attempt = 0; attempt < 60; attempt += 1) {
		try {
			const response = await fetch(url);
			if (response.ok) {
				return;
			}
		} catch {}

		await new Promise((resolve) => setTimeout(resolve, 250));
	}

	throw new Error(`Resume server did not start at ${url}`);
}

function waitForExit(child) {
	return new Promise((resolve, reject) => {
		child.once("error", reject);
		child.once("exit", (code) => {
			if (code === 0) {
				resolve();
				return;
			}
			reject(new Error(`PDF renderer exited with code ${code}`));
		});
	});
}

const url = `http://${host}:${port}/?pdf=1`;
const server = spawn(
	process.platform === "win32" ? "npm.cmd" : "npm",
	["run", "dev", "--", "--host", host, "--port", String(port), "--strictPort"],
	{ stdio: "ignore" },
);

try {
	await waitForServer(url);
	const chrome = await findChrome();
	const renderer = spawn(
		chrome,
		[
			"--headless=new",
			"--disable-gpu",
			"--no-pdf-header-footer",
			"--run-all-compositor-stages-before-draw",
			"--virtual-time-budget=3000",
			`--print-to-pdf=${temporaryPath}`,
			url,
		],
		{ stdio: "ignore" },
	);
	await waitForExit(renderer);
	await rename(temporaryPath, outputPath);
	process.stdout.write(`${outputPath}\n`);
} finally {
	server.kill("SIGTERM");
}
