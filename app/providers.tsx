"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <AnimatedCursor />
      {children}
    </ThemeProvider>
  );
};
