"use client";

import { AnimatedCursor } from "@/components/ui/animated-cursor";
import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AnimatedCursor />
      {children}
    </ThemeProvider>
  );
};
