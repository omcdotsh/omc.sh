"use client";

import { SITE_CONFIG } from "@/lib/site-config";
import { ThemeToggle } from "../theme/ThemeToggle";
import { motion } from "framer-motion";
import { LocaleToggle } from "../locale/LocaleToggle";
import { usePathname } from "next/navigation";
import { useCurrentLocale } from "@/locales/client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Header = () => {
  const locale = useCurrentLocale();
  const pathnameWithLocale = usePathname();
  const isHome = pathnameWithLocale === `/${locale}`;

  return (
    <motion.header
      className="sticky top-0 z-10 flex h-[53px] w-full items-center justify-between px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center w-full">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href={`/${locale}`} passHref>
            <span
              className={cn(
                "text-lg text-foreground hover:text-primary font-bold",
                isHome && "text-primary",
                "transition-all duration-300"
              )}
            >
              {SITE_CONFIG.name}
            </span>
          </Link>
        </motion.div>

        <motion.div
          className="h-[1px] bg-primary flex-grow mx-4"
          style={{ flexBasis: "200%" }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
        />

        <div className="min-w-fit">
          <LocaleToggle />
        </div>

        <motion.div
          className="h-[1px] bg-primary flex-grow mx-4"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
        />

        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </motion.header>
  );
};
