import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/site-config";
import Link from "next/link";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { THEME_COLOR_TO_FILTER_MAP, useAppTheme } from "../theme/useAppTheme";
import { VerticalColors } from "../theme/VerticalColors";

const NAV_LINKS = [
  { href: "/", label: "omc.sh" },
  { href: "/xp", label: "xp" },
  { href: "/portfolio", label: "portfolio" },
];

export const Footer = () => {
  const locale = useCurrentLocale();
  const t = useScopedI18n("footer");
  const pathname = usePathname();
  const { color } = useAppTheme();
  return (
    <motion.footer
      className="w-full bg-background/70 backdrop-blur-sm py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full mx-auto flex justify-between items-center">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="w-4 h-4 md:w-8 md:h-8">
              <AvatarImage
                src="/icon.png"
                style={{
                  filter: color ? THEME_COLOR_TO_FILTER_MAP[color] : "red",
                }}
                alt={SITE_CONFIG.name}
              />
            </Avatar>
          </motion.div>
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button
            variant="outline"
            size="sm"
            className="hover:scale-102 active:scale-95 transition-transform border-primary"
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
