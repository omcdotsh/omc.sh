"use client";

import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/ui/magic-card";
import { CardHeader, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { useScopedI18n } from "@/locales/client";
import { SITE_CONFIG } from "@/lib/site-config";
import { useAppTheme } from "../theme/useAppTheme";

interface CompanyLogo {
  name: string;
  logo: string;
  alt: string;
  link?: string;
}

const companies: CompanyLogo[] = [
  {
    name: "neutrl",
    logo: "/images/partners/neutrl.svg",
    alt: "Neutrl Protocol",
  },
  {
    name: "morpho labs",
    logo: "/images/partners/morpho.svg",
    alt: "Morpho Labs",
  },
  {
    name: "fyde labs",
    logo: "/images/partners/fyde.svg",
    alt: "Fyde Labs",
  },
  {
    name: "ultra",
    logo: "/images/partners/ultra.svg",
    alt: "Ultra",
  },
];

function CompanyLogo({ company }: { company: CompanyLogo }) {
  const { mode } = useAppTheme();
  const isDark = mode === "dark";

  return (
    <motion.div
      className="flex items-center justify-center px-3 py-2 mx-1 transition-all duration-200"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative w-16 h-10 max-h-8 flex items-center justify-center">
        <Image
          src={company.logo}
          alt={company.alt}
          width={64}
          height={40}
          className="object-contain max-w-full max-h-full transition-all duration-200 invert-0 dark:invert"
          style={{
            filter: isDark ? "invert(1)" : "invert(0)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function WorkWithSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useScopedI18n("work-with-section");
  const { color } = useAppTheme();

  return (
    <motion.div
      className="w-full pb-4 overflow-x-hidden"
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <MagicCard
          className="p-4"
          gradientColor={SITE_CONFIG.brand.primary(color ?? "red") + "20"}
        >
          <div className="relative flex items-center justify-center">
            {companies.map((company, index) => (
              <CompanyLogo key={`${company.name}-${index}`} company={company} />
            ))}
          </div>

          <div className="text-center pt-3">
            <p className="text-xs text-muted-foreground">{t("subtext")}</p>
          </div>
        </MagicCard>
      </motion.div>
    </motion.div>
  );
}
