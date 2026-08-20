"use client";

import { SITE_CONFIG } from "@/lib/site-config";
import { routes } from "@/lib/routes";
import { ThemeToggle } from "../theme/ThemeToggle";
import { LocaleToggle } from "../locale/LocaleToggle";
import { usePathname } from "next/navigation";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic";

const NAV = [
  { href: routes.portfolio, labelKey: "work" as const },
  { href: routes.xp, labelKey: "xp" as const },
  { href: routes.blog, labelKey: "notes" as const },
] as const;

export const SiteHeader = () => {
  const locale = useCurrentLocale();
  const pathnameWithLocale = usePathname();
  const pathname = pathnameWithLocale.replace(`/${locale}`, "") || "/";
  const isHome = pathname === "/" || pathname === "";
  const t = useScopedI18n("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/8 bg-background/85 backdrop-blur-xl">
      <div className="omc-container flex h-16 items-center gap-4">
        <Link
          href={`/${locale}`}
          className={cn(
            "font-display text-xl font-black tracking-tight transition-opacity hover:opacity-70",
            isHome ? "opacity-100" : "opacity-90"
          )}
        >
          {SITE_CONFIG.name}
        </Link>

        <nav className="ml-6 hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className={cn(
                  "relative px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(item.labelKey)}
                {active ? (
                  <span className="absolute inset-x-3 -bottom-[15px] h-[2px] bg-foreground" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <LocaleToggle />
          <ThemeToggle />
          <Magnetic>
            <Button
              variant="default"
              size="sm"
              asChild
              className="ml-2 hidden sm:inline-flex"
            >
              <Link
                target="_blank"
                href={SITE_CONFIG.socials.calendar}
                className="inline-flex items-center gap-2"
              >
                {t("book")}
                <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </Magnetic>
        </div>
      </div>

      <nav className="flex border-t border-foreground/8 md:hidden">
        {NAV.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className={cn(
                "flex-1 py-2.5 text-center font-mono text-[10px] uppercase tracking-[0.16em]",
                active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground"
              )}
            >
              {t(item.labelKey)}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
