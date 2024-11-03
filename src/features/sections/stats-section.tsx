"use client";
import { useRef } from "react";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { NumberTicker, NumberTickerProps } from "@/components/ui/number-ticker";
import { MagicCard } from "@/components/ui/magic-card";
import { SITE_CONFIG } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useScopedI18n } from "@/locales/client";
import { useAppTheme } from "../theme/useAppTheme";

interface StatItemProps {
  label: string;
  value: number;
  numberConfig?: Partial<NumberTickerProps>;
  prefix?: string;
  suffix?: string;
  ctaText: string;
  ctaLink: string;
  isExternal?: boolean;
}

function StatItem({
  label,
  value,
  numberConfig,
  prefix,
  suffix,
  ctaText,
  ctaLink,
  isExternal,
}: StatItemProps) {
  const { color } = useAppTheme();
  return (
    <MagicCard
      className="relative flex flex-col h-full"
      gradientColor={SITE_CONFIG.brand.primary(color ?? "red") + "20"}
    >
      <CardHeader className="flex-grow">
        <CardTitle className="text-3xl font-bold">
          {prefix && <span>{prefix}</span>}
          {!value ? 0 : <NumberTicker value={value} {...numberConfig} />}
          {suffix && <span>{suffix}</span>}
        </CardTitle>
        <CardDescription className="mt-2">{label}</CardDescription>
      </CardHeader>
      <CardFooter>
        {isExternal ? (
          <Link
            href={ctaLink ?? ""}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            passHref
          >
            <Button variant="link" className="">
              {">"} {ctaText} <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </Link>
        ) : (
          <Link href={ctaLink} passHref>
            <Button variant="link">
              {">"} {ctaText}
            </Button>
          </Link>
        )}
      </CardFooter>
    </MagicCard>
  );
}

export function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useScopedI18n("stats-section");

  return (
    <motion.div
      className="w-full pb-4"
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ x: -10, y: 10 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="font-bold text-xl mb-2 mt-4">{t("title")}</h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <StatItem
          label={t("items.0.label")}
          value={Number(t("items.0.value"))}
          suffix={t("items.0.suffix")}
          ctaText={t("items.0.ctaText")}
          ctaLink={t("items.0.ctaLink")}
        />
        <StatItem
          label={t("items.1.label")}
          value={Number(t("items.1.value"))}
          suffix={t("items.1.suffix")}
          ctaText={t("items.1.ctaText")}
          ctaLink={t("items.1.ctaLink")}
        />
        <StatItem
          label={t("items.2.label")}
          prefix=""
          value={Number(t("items.2.value"))}
          ctaText={t("items.2.ctaText")}
          ctaLink={t("items.2.ctaLink")}
        />
        <StatItem
          label={t("items.3.label")}
          value={1}
          suffix="/1"
          numberConfig={{}}
          ctaText={t("items.3.ctaText")}
          ctaLink={t("items.3.ctaLink")}
          isExternal={true}
        />
      </motion.div>
    </motion.div>
  );
}
