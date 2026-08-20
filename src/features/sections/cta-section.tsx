"use client";

import { useScopedI18n, useCurrentLocale } from "@/locales/client";
import { Reveal, RevealStagger, revealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { routes } from "@/lib/routes";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  const t = useScopedI18n("cta-section");
  const locale = useCurrentLocale();

  const principles = [
    {
      n: "01",
      title: t("1.title"),
      description: t("1.description"),
      accent: "var(--spectrum-yellow)",
    },
    {
      n: "02",
      title: t("2.title"),
      description: t("2.description"),
      accent: "var(--spectrum-blue)",
    },
    {
      n: "03",
      title: t("3.title"),
      description: t("3.description"),
      accent: "var(--spectrum-pink)",
    },
  ];

  return (
    <section className="py-16">
      <div className="omc-container">
        <Reveal>
          <div className="mb-10 grid gap-6 border-b border-foreground/10 pb-8 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                04 / {t("eyebrow")}
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em]">
                {t("title")}
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground md:justify-self-end md:text-right">
              {t("subtext")}
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid gap-0 border border-foreground/10 md:grid-cols-3">
          {principles.map((item, i) => (
            <motion.div
              key={item.n}
              variants={revealItem}
              className={`group relative overflow-hidden p-7 transition-colors duration-300 hover:bg-foreground hover:text-background ${
                i < principles.length - 1
                  ? "border-b border-foreground/10 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <p className="inline-flex items-center gap-2 font-mono text-xs">
                <span
                  className="size-1.5 rounded-full transition-transform group-hover:scale-125"
                  style={{ backgroundColor: item.accent }}
                />
                {item.n}
              </p>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </RevealStagger>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Magnetic>
              <Button size="lg" asChild>
                <Link
                  target="_blank"
                  href={SITE_CONFIG.socials.calendar}
                  className="inline-flex items-center gap-2"
                >
                  {t("cta")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Magnetic>
            <Button variant="outline" size="lg" asChild>
              <Link
                href={`/${locale}${routes.xp}`}
                className="inline-flex items-center gap-2"
              >
                {t("secondaryCta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
