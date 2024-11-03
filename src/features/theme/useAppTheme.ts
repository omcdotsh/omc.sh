import { useTheme } from "next-themes";
import { useMemo, useCallback } from "react";

export const THEME_MODES = ["light", "dark"] as const;
export const THEME_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "indigo",
  "violet",
  "pink",
  "white",
  "black",
] as const;

export type ThemeMode = (typeof THEME_MODES)[number];
export type ThemeColor = (typeof THEME_COLORS)[number];

export const DEFAULT_THEME_COLOR: ThemeColor = "red";
export const DEFAULT_THEME_MODE: ThemeMode = "dark";

export const THEME_COLOR_MAP: Record<ThemeColor, string> = {
  red: "rgb(217, 45, 98)",
  orange: "rgb(255, 119, 0)",
  yellow: "rgb(223, 185, 3)",
  green: "rgb(27, 184, 87)",
  cyan: "rgb(0, 188, 212)",
  blue: "rgb(82, 150, 250)",
  indigo: "rgb(64, 78, 255)",
  violet: "rgb(128, 0, 255)",
  pink: "rgb(255, 38, 140)",
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
};

export const HEXA_COLOR_MAP: Record<ThemeColor, string> = {
  red: "#FF0000",
  orange: "#FF7F00",
  yellow: "#FFFF00",
  green: "#00FF00",
  cyan: "#00FFFF",
  blue: "#0000FF",
  indigo: "#4B0082",
  violet: "#8B00FF",
  pink: "#FFC0CB",
  white: "#FFFFFF",
  black: "#000000",
};

export const THEME_COLOR_TO_FILTER_MAP: Record<ThemeColor, string> = {
  red: "none",
  orange: "hue-rotate(30deg)",
  yellow: "hue-rotate(45deg)",
  green: "hue-rotate(120deg)",
  cyan: "hue-rotate(180deg)",
  blue: "hue-rotate(210deg)",
  indigo: "hue-rotate(240deg)",
  violet: "hue-rotate(270deg)",
  pink: "hue-rotate(330deg)",
  white: "grayscale(100%)",
  black: "grayscale(100%)",
};

export const THEMES = [
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
];

export const DEFAULT_THEME = "dark-red";

export function useAppTheme() {
  const { theme, setTheme } = useTheme();

  const [mode, color] = useMemo(() => {
    if (!theme) return [undefined, undefined];
    const [m, c] = theme.split("-");
    return [m as ThemeMode, c as ThemeColor];
  }, [theme]);

  const setThemeMode = useCallback(
    (newMode: ThemeMode) => {
      if (color === "white" && newMode === "light") {
        setTheme("light-black");
      } else if (color === "black" && newMode === "dark") {
        setTheme("dark-white");
      } else {
        setTheme(`${newMode}-${color}`);
      }
    },
    [color, setTheme]
  );

  const setThemeColor = useCallback(
    (newColor: ThemeColor) => {
      setTheme(`${mode}-${newColor}`);
    },
    [mode, setTheme]
  );

  return {
    theme,
    mode: mode,
    color: color,
    setTheme,
    setThemeMode,
    setThemeColor,
  };
}
