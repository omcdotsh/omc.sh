"use client";

import { Reveal, RevealStagger, revealItem } from "@/components/motion/reveal";
import { NumberTicker } from "@/components/ui/number-ticker";
import Link from "next/link";
import { useScopedI18n } from "@/locales/client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function StatBlock({
  index,
  label,
  value,
  suffix,
  ctaText,
  ctaLink,
  accent,
}: {
  index: string;
  label: string;
  value: number;
  suffix?: string;
  ctaText: string;
  ctaLink: string;
  accent: string;
}) {
  return (
    <motion.div variants={revealItem}>
      <Link
        href={ctaLink}
        className="group block h-full border border-foreground/10 bg-background p-6 transition-colors duration-300 hover:bg-foreground hover:text-background"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-2 font-mono text-xs">
            <span
              className="size-1.5 rounded-full"
              style={{ backgroundColor: accent }}
            />
            {index}
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-background/70">
            {ctaText}
            <ArrowRight className="size-3" />
          </span>
        </div>
        <p className="mt-8 font-display text-5xl font-black tracking-tight sm:text-6xl">
          <NumberTicker value={value} />
          {suffix}
        </p>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/70">
          {label}
        </p>
      </Link>
    </motion.div>
  );
}

export function StatsSection() {
  const t = useScopedI18n("stats-section");

  return (
    <section className="border-y border-foreground/10 bg-muted/40 py-16">
      <div className="omc-container">
        <Reveal>
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            03 / {t("title")}
          </p>
        </Reveal>

        <RevealStagger className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <StatBlock
            index="A"
            label={t("items.0.label")}
            value={Number(t("items.0.value"))}
            suffix={t("items.0.suffix")}
            ctaText={t("items.0.ctaText")}
            ctaLink={t("items.0.ctaLink")}
            accent="var(--spectrum-yellow)"
          />
          <StatBlock
            index="B"
            label={t("items.1.label")}
            value={Number(t("items.1.value"))}
            suffix={t("items.1.suffix")}
            ctaText={t("items.1.ctaText")}
            ctaLink={t("items.1.ctaLink")}
            accent="var(--spectrum-blue)"
          />
          <StatBlock
            index="C"
            label={t("items.2.label")}
            value={Number(t("items.2.value"))}
            suffix={t("items.2.suffix")}
            ctaText={t("items.2.ctaText")}
            ctaLink={t("items.2.ctaLink")}
            accent="var(--spectrum-teal)"
          />
        </RevealStagger>
      </div>
    </section>
  );
}
