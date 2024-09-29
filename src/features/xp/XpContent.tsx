"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQueryState } from "nuqs";
import { XpTimelineCard } from "./XpTimelineCard";
import { motion, AnimatePresence } from "framer-motion";
import { useScopedI18n } from "@/locales/client";
import { useXp } from "./useXp";
import { AnimatedBadgeList } from "@/components/ui/animated-badge-list";
import { useMemo } from "react";

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

  return (
    <motion.div
      className="w-full flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Tabs
        value={tab ?? DEFAULT_TAB}
        onValueChange={(value) => setTab(value as XpTab)}
        className="w-[100%]"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="professional">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("tabs.0")}
            </motion.span>
          </TabsTrigger>
          <TabsTrigger value="personal">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("tabs.1")}
            </motion.span>
          </TabsTrigger>
          <TabsTrigger value="academic">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("tabs.2")}
            </motion.span>
          </TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <motion.div key={tab}>
            <TabsContent value="professional">
              <XpTimelineCard experiences={xpPro} />
            </TabsContent>
            <TabsContent value="personal">
              <div>
                <AnimatedBadgeList items={aboutItemsTitles} />
                <XpTimelineCard experiences={xpPerso} />
              </div>
            </TabsContent>
            <TabsContent value="academic">
              <div>
                <AnimatedBadgeList items={achievementTitles} />
                <XpTimelineCard experiences={xpAcademic} />
              </div>
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  );
};
