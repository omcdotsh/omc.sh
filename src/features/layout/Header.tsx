"use client";

import { SITE_CONFIG } from "@/lib/site-config";
import { ThemeToggle } from "../theme/ThemeToggle";
import { motion, useReducedMotion } from "framer-motion";
import { LocaleToggle } from "../locale/LocaleToggle";
import { usePathname } from "next/navigation";
import { useCurrentLocale } from "@/locales/client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Header = () => {
  const locale = useCurrentLocale();
  const pathnameWithLocale = usePathname();
  const isHome = pathnameWithLocale === `/${locale}`;
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="sticky top-0 z-10 flex h-14 w-full items-center justify-between border-b border-border/80 bg-background/80 px-4 backdrop-blur-md"
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="flex w-full items-center">
        <Link href={`/${locale}`} className="cursor-pointer">
          <span
            className={cn(
              "font-mono text-sm font-bold tracking-tight text-foreground transition-colors duration-200 hover:text-primary",
              isHome && "text-primary"
            )}
          >
            {SITE_CONFIG.name}
          </span>
        </Link>

        <div className="mx-4 h-px flex-grow bg-border" />

        <div className="min-w-fit">
          <LocaleToggle />
        </div>

        <div className="mx-4 h-px flex-grow bg-border" />

        <ThemeToggle />
      </div>
    </motion.header>
  );
};
