"use client";

import type { FC } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/src/shared/lib/shadcn";

interface Props {
  className?: string;
}

export const ThemeSwitcher: FC<Props> = ({ className }) => {
  const { setTheme, theme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme) {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  };

  return (
    <div className={cn("inline-flex", className)} onClick={handleSwitchTheme}>
      <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  );
};
