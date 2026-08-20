"use client";

import { SiteFooter } from "@/features/layout/SiteFooter";
import { SiteHeader } from "@/features/layout/SiteHeader";
import { DotCursor } from "@/components/motion/dot-cursor";

export const AppNavigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <DotCursor />
      <div className="relative z-10">
        <SiteHeader />
        <main className="w-full">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
};
