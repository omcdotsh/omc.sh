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
  return (
    <MagicCard
      className="relative flex flex-col h-full"
      gradientColor={SITE_CONFIG.brand.primary + "20"}
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
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button variant="link" className="">
              {">"} {ctaText} <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </a>
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

  return (
    <motion.div
      className="w-full"
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
        <h1 className="font-bold text-xl mb-2">some numbers</h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <StatItem
          label="years in the web3 business trying to build something that matters"
          value={5}
          suffix="+"
          ctaText="Learn More"
          ctaLink="/about"
        />
        <StatItem
          label="clients satisfied all around the world"
          value={45}
          suffix="+"
          ctaText="View Clients"
          ctaLink="https://example.com/clients"
          isExternal={true}
        />
        <StatItem
          label="university dropout because it was boring"
          prefix=""
          value={2}
          ctaText="Education"
          ctaLink="/education"
        />
        <StatItem
          label="blockchain hackathon victory in the pocket"
          value={1}
          suffix="/1"
          numberConfig={{}}
          ctaText="Hackathon Details"
          ctaLink="https://example.com/hackathons"
          isExternal={true}
        />
      </motion.div>
    </motion.div>
  );
}
