"use client";

import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
