"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect } from "react";
import { DEFAULT_THEME, THEMES } from "./useAppTheme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme && !THEMES.includes(currentTheme)) {
      localStorage.setItem("theme", DEFAULT_THEME);
    }
  }, []);

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme={DEFAULT_THEME}
      themes={THEMES}
    >
      {children}
    </NextThemeProvider>
  );
};
