"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryState } from "nuqs";
import { XpTimelineCard } from "./XpTimelineCard";
import { AnimatePresence, motion } from "framer-motion";
import { useScopedI18n } from "@/locales/client";
import { useXp } from "./useXp";
import { AnimatedBadgeList } from "@/components/ui/animated-badge-list";
import { useMemo } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { cn } from "@/lib/utils";

type XpTab = "professional" | "personal" | "academic";

const DEFAULT_TAB: XpTab = "professional";

const parseTab = (value: string): XpTab => {
  if (["professional", "personal", "academic"].includes(value)) {
    return value as XpTab;
  }
  return DEFAULT_TAB;
};

export const XPContent = () => {
  const t = useScopedI18n("xp-section");
  const page = useScopedI18n("xp-page");
  const { xpPro, xpPerso, xpAcademic, achievements, aboutItems } = useXp();

  const [tab, setTab] = useQueryState<XpTab>("tab", {
    defaultValue: DEFAULT_TAB,
    parse: parseTab,
  });

  const achievementTitles = useMemo(() => {
    return achievements.map((xp) => xp.title);
  }, [achievements]);

  const aboutItemsTitles = useMemo(() => {
    return aboutItems.map((item) => item.title);
  }, [aboutItems]);

  const tabs: { value: XpTab; label: string }[] = [
    { value: "professional", label: t("tabs.0") },
    { value: "personal", label: t("tabs.1") },
    { value: "academic", label: t("tabs.2") },
  ];

  return (
    <div className="omc-container w-full">
      <PageHero
        index="XP"
        kicker={page("kicker")}
        title={page("title")}
        description={page("description")}
      />

      <Tabs
        value={tab ?? DEFAULT_TAB}
        onValueChange={(value) => setTab(value as XpTab)}
        className="mt-10 w-full"
      >
        <TabsList className="mb-8 grid h-auto w-full grid-cols-3 gap-1 rounded-pill border border-foreground/10 bg-transparent p-1">
          {tabs.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className={cn(
                "rounded-pill py-3 font-mono text-xs uppercase tracking-[0.16em]",
                "data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none"
              )}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <TabsContent value="professional" className="mt-0">
              <XpTimelineCard experiences={xpPro} />
            </TabsContent>
            <TabsContent value="personal" className="mt-0">
              <div className="space-y-6">
                <AnimatedBadgeList items={aboutItemsTitles} />
                <XpTimelineCard experiences={xpPerso} />
              </div>
            </TabsContent>
            <TabsContent value="academic" className="mt-0">
              <div className="space-y-6">
                <AnimatedBadgeList items={achievementTitles} />
                <XpTimelineCard experiences={xpAcademic} />
              </div>
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </div>
  );
};
