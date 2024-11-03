import React from "react";
import {
  THEME_COLOR_MAP,
  THEME_COLORS,
  ThemeColor,
  useAppTheme,
} from "./useAppTheme";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const colors = THEME_COLORS.filter(
  (color) => color !== "white" && color !== "black"
);

const ColorButton: React.FC<{
  themeColor: ThemeColor;
  currentColor: ThemeColor;
  onClick: () => void;
}> = ({ themeColor, currentColor, onClick }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <button
      onClick={onClick}
      className={cn(
        "w-2 h-2 rounded-md p-0",
        `bg-[${THEME_COLOR_MAP[themeColor]}]`,
        currentColor === themeColor
          ? "ring-2 ring-primary"
          : "ring ring-background"
      )}
      style={{ backgroundColor: THEME_COLOR_MAP[themeColor] }}
      aria-label={`Set ${themeColor} theme`}
    />
  </motion.div>
);

export const VerticalColors: React.FC = () => {
  const { setThemeColor, color, mode } = useAppTheme();

  return (
    <div className="flex flex-row gap-2">
      {colors.map((themeColor) => (
        <ColorButton
          key={themeColor}
          themeColor={themeColor}
          currentColor={color ?? "red"}
          onClick={() => setThemeColor(themeColor)}
        />
      ))}
      <ColorButton
        themeColor={mode === "dark" ? "white" : "black"}
        currentColor={color ?? "red"}
        onClick={() => setThemeColor(mode === "dark" ? "white" : "black")}
      />
    </div>
  );
};
