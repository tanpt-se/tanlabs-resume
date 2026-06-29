import { useState } from "react";
import { Cog, Monitor, Moon, Sun, X } from "lucide-react";

import { FAB_BUTTON_CLASS, FabBubble } from "@/components/FabBubble";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { uiLabels } from "@/i18n";
import { useTheme } from "@/providers/theme-provider";

export function SettingsBubble() {
	const { themeMode, setThemeMode } = useTheme();
	const [open, setOpen] = useState(false);

	return (
		<FabBubble className="bottom-5">
			<DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
				<DropdownMenuTrigger asChild>
					<Button
						size="icon"
						aria-label={uiLabels.settings}
						aria-expanded={open}
						className={FAB_BUTTON_CLASS}
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
					<DropdownMenuLabel>{uiLabels.theme}</DropdownMenuLabel>
					<DropdownMenuRadioGroup
						value={themeMode}
						onValueChange={(value) =>
							setThemeMode(value as typeof themeMode)
						}
					>
						<DropdownMenuRadioItem value="light">
							<Sun />
							{uiLabels.themeLight}
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="dark">
							<Moon />
							{uiLabels.themeDark}
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="system">
							<Monitor />
							{uiLabels.themeSystem}
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</FabBubble>
	);
}
