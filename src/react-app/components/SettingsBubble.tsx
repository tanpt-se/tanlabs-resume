import { useState } from "react";
import { Cog, Monitor, Moon, Smartphone, Sun, Tablet, X } from "lucide-react";

import { LocaleFlag } from "@/components/LocaleFlag";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Locale, ViewportSize } from "@/i18n";
import { useLocale } from "@/providers/locale-provider";
import { useTheme } from "@/providers/theme-provider";
import { useViewport } from "@/providers/viewport-provider";

const locales: { value: Locale; labelKey: "localeEn" | "localeVi" }[] = [
	{ value: "en", labelKey: "localeEn" },
	{ value: "vi", labelKey: "localeVi" },
];

const viewports: {
	value: ViewportSize;
	labelKey: "viewportMobile" | "viewportTablet" | "viewportWeb";
	icon: typeof Smartphone;
}[] = [
	{ value: "mobile", labelKey: "viewportMobile", icon: Smartphone },
	{ value: "tablet", labelKey: "viewportTablet", icon: Tablet },
	{ value: "web", labelKey: "viewportWeb", icon: Monitor },
];

export function SettingsBubble() {
	const { locale, setLocale, labels } = useLocale();
	const { themeMode, setThemeMode } = useTheme();
	const { viewport, setViewport } = useViewport();
	const [open, setOpen] = useState(false);

	return (
		<div className="print-hidden fixed right-5 bottom-5 z-[100]">
			<DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
				<DropdownMenuTrigger asChild>
					<Button
						size="icon"
						aria-label={labels.settings}
						aria-expanded={open}
						className="size-12 rounded-full shadow-xl transition-transform hover:scale-105"
					>
						{open ? <X className="size-5" /> : <Cog className="size-5" />}
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent
					side="top"
					align="end"
					className="mb-2 min-w-56"
					onCloseAutoFocus={(event) => event.preventDefault()}
				>
					<DropdownMenuLabel>{labels.language}</DropdownMenuLabel>
					<DropdownMenuRadioGroup
						value={locale}
						onValueChange={(value) => setLocale(value as Locale)}
					>
						{locales.map((item) => (
							<DropdownMenuRadioItem key={item.value} value={item.value}>
								<LocaleFlag locale={item.value} />
								{labels[item.labelKey]}
							</DropdownMenuRadioItem>
						))}
					</DropdownMenuRadioGroup>

					<DropdownMenuSeparator />

					<DropdownMenuLabel>{labels.viewport}</DropdownMenuLabel>
					<DropdownMenuRadioGroup
						value={viewport}
						onValueChange={(value) => setViewport(value as ViewportSize)}
					>
						{viewports.map((item) => {
							const Icon = item.icon;
							return (
								<DropdownMenuRadioItem key={item.value} value={item.value}>
									<Icon />
									{labels[item.labelKey]}
								</DropdownMenuRadioItem>
							);
						})}
					</DropdownMenuRadioGroup>

					<DropdownMenuSeparator />

					<DropdownMenuLabel>{labels.theme}</DropdownMenuLabel>
					<DropdownMenuRadioGroup
						value={themeMode}
						onValueChange={(value) =>
							setThemeMode(value as typeof themeMode)
						}
					>
						<DropdownMenuRadioItem value="light">
							<Sun />
							{labels.themeLight}
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="dark">
							<Moon />
							{labels.themeDark}
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="system">
							<Monitor />
							{labels.themeSystem}
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
