"use client";

import { Reveal } from "@/components/motion/reveal";
import { SpectrumTag, type SpectrumHue } from "@/components/brand/spectrum-tag";
import Image from "next/image";
import { useScopedI18n } from "@/locales/client";
import { useAppTheme } from "../theme/useAppTheme";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const companies = [
  {
    name: "neutrl",
    logo: "/images/partners/neutrl.svg",
    alt: "Neutrl Protocol",
    hue: "blue" as SpectrumHue,
  },
  {
    name: "morpho labs",
    logo: "/images/partners/morpho.svg",
    alt: "Morpho Labs",
    hue: "teal" as SpectrumHue,
  },
  {
    name: "fyde labs",
    logo: "/images/partners/fyde.svg",
    alt: "Fyde Labs",
    hue: "indigo" as SpectrumHue,
  },
  {
    name: "ultra",
    logo: "/images/partners/ultra.svg",
    alt: "Ultra",
    hue: "pink" as SpectrumHue,
  },
];

const CAPABILITY_HUES: SpectrumHue[] = [
  "yellow",
  "red",
  "blue",
  "teal",
  "purple",
  "orange",
  "green",
  "pink",
];

export function WorkWithSection() {
  const t = useScopedI18n("work-with-section");
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  const capabilities = [
    t("caps.0"),
    t("caps.1"),
    t("caps.2"),
    t("caps.3"),
    t("caps.4"),
    t("caps.5"),
    t("caps.6"),
    t("caps.7"),
  ];

  return (
    <section className="py-16">
      <div className="omc-container">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                02 / {t("title")}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {t("headline")}
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">{t("subtext")}</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mb-10 flex flex-wrap gap-2">
            {capabilities.map((label, i) => (
              <SpectrumTag
                key={label}
                label={label}
                hue={CAPABILITY_HUES[i % CAPABILITY_HUES.length]}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 border border-foreground/10 md:grid-cols-4">
            {companies.map((company, i) => (
              <div
                key={company.name}
                className={`group relative flex h-32 items-center justify-center px-6 transition-colors duration-300 hover:bg-foreground hover:text-background ${
                  i % 2 === 1 ? "border-l border-foreground/10" : ""
                } ${i > 1 ? "border-t border-foreground/10 md:border-t-0" : ""} ${
                  i > 0 ? "md:border-l md:border-foreground/10" : ""
                }`}
              >
                <span
                  className="absolute left-4 top-4 size-2 rounded-full opacity-80"
                  style={{
                    backgroundColor: `var(--spectrum-${company.hue})`,
                  }}
                />
                <Image
                  src={company.logo}
                  alt={company.alt}
                  width={110}
                  height={28}
                  className={cn(
                    "max-h-8 w-auto object-contain transition-[filter] duration-300",
                    isDark
                      ? "invert group-hover:invert-0"
                      : "group-hover:invert"
                  )}
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-8">
            <Link
              href={routes.portfolio}
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("seeWork")}
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
