import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";
import Link from "next/link";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { VerticalColors } from "../theme/VerticalColors";
import { routes } from "@/lib/routes";

const NAV_LINKS = [
  { href: routes.home, label: "omc.sh" },
  { href: routes.xp, label: "xp" },
  { href: routes.portfolio, label: "portfolio" },
  { href: routes.blog, label: "blog" },
];

export const Footer = () => {
  const locale = useCurrentLocale();
  const t = useScopedI18n("footer");
  const pathname = usePathname();
  return (
    <motion.footer
      className="mt-8 w-full border-t border-border/80 bg-background/70 py-5 backdrop-blur-sm"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mx-auto flex w-full items-center justify-between gap-3">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.35 }}
        >
          <Avatar className="h-6 w-6 md:h-8 md:w-8">
            <AvatarImage src="/icon.png" alt={SITE_CONFIG.name} />
          </Avatar>
          <div className="flex flex-col">
            <nav className="flex flex-wrap gap-1 text-xs">
              <AnimatePresence>
                {NAV_LINKS.map(({ href, label }, index) => {
                  const isActive =
                    pathname === `/${locale}${href}` ||
                    (href === "/" && pathname === `/${locale}`);
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {isActive ? (
                        <span className="text-muted-foreground pointer-events-none">
                          {label}
                        </span>
                      ) : (
                        <Link
                          href={`/${locale}${href}`}
                          className="transition-colors hover:text-primary"
                        >
                          {label}
                        </Link>
                      )}
                      {index < NAV_LINKS.length - 1 && (
                        <span className="inline text-muted-foreground ml-1 sm:mx-1">
                          |
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </nav>
            <VerticalColors />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.35 }}
        >
          <Button
            variant="outline"
            size="sm"
            className="border-border font-mono transition-colors hover:border-primary"
            asChild
          >
            <Link
              target="_blank"
              href={SITE_CONFIG.socials.calendar}
              className="cursor-pointer"
            >
              {t("calendar")}
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.footer>
  );
};
