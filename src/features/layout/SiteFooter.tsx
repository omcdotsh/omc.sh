"use client";

import { SITE_CONFIG } from "@/lib/site-config";
import Link from "next/link";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { usePathname } from "next/navigation";
import { VerticalColors } from "../theme/VerticalColors";
import { routes } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { ArrowRight } from "lucide-react";
import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

const NAV_LINKS = [
  { href: routes.home, labelKey: "index" as const },
  { href: routes.portfolio, labelKey: "work" as const },
  { href: routes.xp, labelKey: "xp" as const },
  { href: routes.blog, labelKey: "notes" as const },
];

const SOCIALS = [
  { href: SITE_CONFIG.socials.github, label: "github", icon: IconBrandGithub },
  {
    href: SITE_CONFIG.socials.linkedin,
    label: "linkedin",
    icon: IconBrandLinkedin,
  },
  { href: SITE_CONFIG.socials.twitter, label: "x", icon: IconBrandX },
  {
    href: SITE_CONFIG.socials.behance,
    label: "behance",
    icon: IconBrandBehance,
  },
  {
    href: `mailto:${SITE_CONFIG.socials.mail}`,
    label: "email",
    icon: IconMail,
  },
];

export const SiteFooter = () => {
  const locale = useCurrentLocale();
  const t = useScopedI18n("footer");
  const tNav = useScopedI18n("nav");
  const pathname = usePathname();

  return (
    <footer className="mt-24 border-t border-foreground/10">
      <div className="omc-container flex flex-col gap-10 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="font-display text-[clamp(2.75rem,8vw,5.5rem)] font-black leading-[0.9] tracking-[-0.04em]">
              {t("title")}
              <span className="text-dot">.</span>
            </p>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {t("subtext")}
            </p>
            <nav className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {NAV_LINKS.map(({ href, labelKey }) => {
                const isActive =
                  pathname === `/${locale}${href === "/" ? "" : href}` ||
                  (href === "/" && pathname === `/${locale}`);
                return isActive ? (
                  <span key={href} className="text-foreground">
                    {tNav(labelKey)}
                  </span>
                ) : (
                  <Link
                    key={href}
                    href={`/${locale}${href === "/" ? "" : href}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {tNav(labelKey)}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-6">
              <VerticalColors />
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <Magnetic>
              <Button size="lg" asChild>
                <Link
                  target="_blank"
                  href={SITE_CONFIG.socials.calendar}
                  className="inline-flex items-center gap-2"
                >
                  {t("calendar")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Magnetic>
            <Button variant="outline" size="lg" asChild>
              <Link
                href={`/${locale}${routes.xp}`}
                className="inline-flex items-center gap-2"
              >
                {t("hire")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <div className="mt-2 flex items-center gap-1">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-foreground/10 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-foreground/10 pt-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {t("tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
};
