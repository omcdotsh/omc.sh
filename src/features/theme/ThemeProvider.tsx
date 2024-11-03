"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark-red"
      themes={[
        "light-red",
        "dark-red",
        "light-orange",
        "dark-orange",
        "light-yellow",
        "dark-yellow",
        "light-green",
        "dark-green",
        "light-cyan",
        "dark-cyan",
        "light-blue",
        "dark-blue",
        "light-indigo",
        "dark-indigo",
        "light-violet",
        "dark-violet",
        "light-pink",
        "dark-pink",
        "light-black",
        "dark-white",
      ]}
      enableSystem
    >
      {children}
    </NextThemeProvider>
  );
};
