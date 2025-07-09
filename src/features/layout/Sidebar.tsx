"use client";

import { ChefHat, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SITE_CONFIG } from "@/lib/site-config";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandBehance,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCurrentLocale } from "@/locales/client";

export const Sidebar = () => {
  const pathnameWithLocale = usePathname();
  const locale = useCurrentLocale();
  const pathname = pathnameWithLocale.replace(`/${locale}`, "");
  const isHome = pathnameWithLocale === `/${locale}`;

  return (
    <motion.aside
      className="inset-y z-20 flex h-[100dvh] flex-col sticky top-0 overflow-hidden"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="p-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <Button
          variant="outline"
          size="icon"
          aria-label="Home"
          asChild
          className={cn(
            "overflow-hidden p-0 rounded-lg",
            "transition-all duration-300",
            isHome ? "scale-110" : "scale-100"
          )}
        >
          <Link
            href="/"
            style={{
              backgroundImage: `url(${SITE_CONFIG.appIcon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "4px",
            }}
          />
        </Button>
      </motion.div>
      <motion.nav
        className="grid gap-1 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <SidebarItem
          icon={FlaskConical}
          href="/xp"
          label="XP"
          active={pathname === "/xp"}
        />
        <SidebarItem
          icon={ChefHat}
          href="/portfolio"
          label="portfolio"
          active={pathname === "/portfolio"}
        />
      </motion.nav>

      <div className="flex flex-col items-center justify-center flex-grow mx-auto">
        <motion.div
          className="w-[1px] bg-primary mx-auto ml-1"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
        />

        <div className="text-xs text-muted-foreground flex flex-col items-center my-2">
          <span>©</span>
          {new Date()
            .getFullYear()
            .toString()
            .split("")
            .map((digit, index) => (
              <span key={index}>{digit}</span>
            ))}
        </div>

        <motion.div
          className="w-[1px] bg-primary mx-auto ml-1"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
      <motion.nav
        className="mt-auto grid gap-1 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <SidebarItem
          icon={IconBrandGithub}
          label="github"
          href={SITE_CONFIG.socials.github}
          target="_blank"
        />
        <SidebarItem
          icon={IconBrandLinkedin}
          label="linkedin"
          href={SITE_CONFIG.socials.linkedin}
          target="_blank"
        />
        <SidebarItem
          icon={IconBrandX}
          label="twitter"
          href={SITE_CONFIG.socials.twitter}
          target="_blank"
        />
        <SidebarItem
          icon={IconBrandBehance}
          label="behance"
          href={SITE_CONFIG.socials.behance}
          target="_blank"
        />
        <SidebarItem
          icon={IconMail}
          label="email"
          href={`mailto:${SITE_CONFIG.socials.mail}`}
          target="_blank"
        />
      </motion.nav>
    </motion.aside>
  );
};

const SidebarItem = ({
  icon: Icon,
  label,
  active = false,
  href,
  target,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  href?: string;
  target?: string;
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            asChild
            variant={"ghost"}
            size="icon"
            className={cn([
              `rounded-lg p-0`,
              active ? "border border-primary text-primary" : "",
            ])}
            disabled={active}
            aria-label={label}
          >
            <Link href={href ?? ""} target={target}>
              <Icon className="size-5 cursor-pointer" />
            </Link>
          </Button>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={5}>
        {label}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
