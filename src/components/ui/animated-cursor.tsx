"use client";

import { THEME_COLOR_MAP, useAppTheme } from "@/features/theme/useAppTheme";
import dynamic from "next/dynamic";

const DynamicCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export const AnimatedCursor = () => {
  const { color } = useAppTheme();
  const bg = color ? THEME_COLOR_MAP[color] : "red";

  return (
    <DynamicCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: bg,
      }}
      outerStyle={{
        border: `3px solid ${bg}`,
      }}
    />
  );
};
