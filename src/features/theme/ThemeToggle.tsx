"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useAppTheme } from "./useAppTheme";

export function ThemeToggle() {
  const { mode, setThemeMode } = useAppTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setThemeMode(mode === "light" ? "dark" : "light")}
    >
      {mode === "light" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
