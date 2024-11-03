"use client";
import { useRef } from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Confetti } from "@/components/ui/confetti";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useScopedI18n("hero-section");

  return (
    <motion.div
      className="w-full"
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MagicCard>
        <CardHeader>
          <motion.div
            className="flex gap-2 items-center"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <CardTitle>{t("title")}</CardTitle>
            <motion.div
              className="cursor-pointer relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Confetti emoji={["👋"]} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <CardDescription>
              {t("description", {
                span: (
                  <span className="font-bold">
                    <TypewriterText
                      className="text-secondary-foreground"
                      words={[
                        t("descriptionSpan.0"),
                        t("descriptionSpan.1"),
                        t("descriptionSpan.2"),
                        t("descriptionSpan.3"),
                        t("descriptionSpan.4"),
                      ]}
                      as="code"
                    />
                  </span>
                ),
              })}
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-sm"
          >
            {t("subtext")}
          </motion.p>
        </CardContent>
        <CardFooter>
          <Button variant={"default"} asChild>
            <Link
              target="_blank"
              href={SITE_CONFIG.socials.calendar}
              className="cursor-pointer"
            >
              {t("cta")}
            </Link>
          </Button>
        </CardFooter>
      </MagicCard>
    </motion.div>
  );
}
