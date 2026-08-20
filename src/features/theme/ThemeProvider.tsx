"use client";

import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes";
import { useEffect } from "react";
import { DEFAULT_THEME, THEMES } from "./useAppTheme";

const DS_FLAG = "omc-ds";
const DS_VERSION = "omc-brand-v1";

function ThemeMigration() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyMigrated = localStorage.getItem(DS_FLAG) === DS_VERSION;
    if (alreadyMigrated) {
      if (theme && !THEMES.includes(theme)) {
        setTheme(DEFAULT_THEME);
      }
      return;
    }

    setTheme(DEFAULT_THEME);
    localStorage.setItem(DS_FLAG, DS_VERSION);
  }, [theme, setTheme]);

  return null;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme={DEFAULT_THEME}
      themes={THEMES}
    >
      <ThemeMigration />
      {children}
    </NextThemeProvider>
  );
};
