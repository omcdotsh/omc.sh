"use client";

import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { LetterFrames } from "@/components/brand/letter-frames";
import { SpectrumTag } from "@/components/brand/spectrum-tag";
import { useScopedI18n, useCurrentLocale } from "@/locales/client";
import { SITE_CONFIG } from "@/lib/site-config";
import { routes } from "@/lib/routes";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const t = useScopedI18n("hero-section");
  const locale = useCurrentLocale();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[88vh] overflow-hidden border-b border-foreground/10">
      <div className="omc-container flex min-h-[88vh] flex-col justify-between py-10">
        <motion.div
          className="flex flex-wrap items-center justify-between gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {t("eyebrow")}
          </p>
          <div className="flex flex-wrap gap-2">
            <SpectrumTag label={t("tagDesign")} hue="yellow" />
            <SpectrumTag label={t("tagDev")} hue="red" />
            <SpectrumTag label={t("tagStrategy")} hue="blue" />
          </div>
        </motion.div>

        <div className="grid items-end gap-10 py-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <motion.h1
              className="font-display text-[clamp(5rem,18vw,12rem)] font-black leading-[0.78] tracking-[-0.06em]"
              initial={reduceMotion ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              omc
              <span className="text-dot">.</span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-2xl font-display text-[clamp(1.35rem,3.2vw,2.35rem)] font-semibold leading-[1.1] tracking-tight"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              {t("role")}
            </motion.p>

            <motion.p
              className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              {t("subtext")}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
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
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="lg:pb-2"
          >
            <LetterFrames />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {t("frameCaption")}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 gap-4 border-t border-foreground/10 pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:grid-cols-4"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <span>Neutrl</span>
          <span>Morpho</span>
          <span>$230M TVL</span>
          <span className="inline-flex items-center gap-2 text-foreground">
            <span className="size-1.5 rounded-full bg-dot" />
            {t("available")}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
