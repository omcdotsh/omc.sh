"use client";

import { BookOpen, Briefcase, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SITE_CONFIG } from "@/lib/site-config";
import { motion, useReducedMotion } from "framer-motion";
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
import { routes } from "@/lib/routes";

export const Sidebar = () => {
  const pathnameWithLocale = usePathname();
  const locale = useCurrentLocale();
  const pathname = pathnameWithLocale.replace(`/${locale}`, "");
  const isHome = pathnameWithLocale === `/${locale}`;
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      className="sticky top-0 z-20 flex h-[100dvh] flex-col overflow-hidden border-r border-border/80"
      initial={reduceMotion ? false : { opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="p-2">
        <Button
          variant="outline"
          size="icon"
          aria-label="Home"
          asChild
          className={cn(
            "overflow-hidden rounded-md p-0 transition-colors duration-200",
            isHome && "border-primary"
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
      </div>

      <nav className="grid gap-1 p-2">
        <SidebarItem
          icon={Briefcase}
          href={routes.xp}
          label="xp"
          active={pathname === routes.xp}
        />
        <SidebarItem
          icon={FolderKanban}
          href={routes.portfolio}
          label="portfolio"
          active={pathname === routes.portfolio}
        />
        <SidebarItem
          icon={BookOpen}
          href={routes.blog}
          label="blog"
          active={pathname.includes(routes.blog)}
        />
      </nav>

      <div className="mx-auto flex flex-grow flex-col items-center justify-center">
        <div className="mx-auto ml-1 w-px flex-1 bg-border" />
        <div className="my-2 flex flex-col items-center font-mono text-[10px] text-muted-foreground">
          <span>©</span>
          {new Date()
            .getFullYear()
            .toString()
            .split("")
            .map((digit, index) => (
              <span key={index}>{digit}</span>
            ))}
        </div>
        <div className="mx-auto ml-1 w-px flex-1 bg-border" />
      </div>

      <nav className="mt-auto grid gap-1 p-2">
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
      </nav>
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
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  href?: string;
  target?: string;
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className={cn(
            "rounded-md p-0 transition-colors duration-200",
            active && "border border-primary text-primary"
          )}
          disabled={active}
          aria-label={label}
        >
          <Link href={href ?? ""} target={target}>
            <Icon className="size-5 cursor-pointer" />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={5} className="font-mono text-xs">
        {label}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
