"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProjectCardList } from "@/features/portfolio/ProjectCardList";
import { PROJECT_BY_JOB } from "@/features/portfolio/projects.constants";
import { ProjectJob } from "@/features/portfolio/projects.types";
import { useQueryState } from "nuqs";
import { AnimatePresence, motion } from "framer-motion";
import { useScopedI18n } from "@/locales/client";
import { PageHero } from "@/components/layout/page-hero";
import { cn } from "@/lib/utils";

type PortfolioTab = "development" | "design";

const DEFAULT_JOB: PortfolioTab = "development";

const parseJob = (value: string): ProjectJob => {
  if (["development", "design"].includes(value)) {
    return value as ProjectJob;
  }
  return DEFAULT_JOB;
};

export const PortfolioContent = () => {
  const t = useScopedI18n("portfolio-section");
  const [as, setAs] = useQueryState<ProjectJob>("as", {
    defaultValue: DEFAULT_JOB,
    parse: parseJob,
  });

  return (
    <div className="w-full">
      <div className="omc-container">
        <PageHero
          index="WK"
          kicker={t("kicker")}
          title={t("title")}
          description={t("description")}
        />

        <Tabs
          value={as ?? DEFAULT_JOB}
          onValueChange={(value) => setAs(value as ProjectJob)}
          className="mt-10 w-full"
        >
          <TabsList className="mb-8 grid h-auto w-full max-w-md grid-cols-2 gap-0 rounded-pill border border-foreground/10 bg-transparent p-1">
            <TabsTrigger
              value="development"
              className={cn(
                "rounded-pill py-3 font-mono text-xs uppercase tracking-[0.16em]",
                "data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none"
              )}
            >
              {t("tabs.0")}
            </TabsTrigger>
            <TabsTrigger
              value="design"
              className={cn(
                "rounded-pill py-3 font-mono text-xs uppercase tracking-[0.16em]",
                "data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none"
              )}
            >
              {t("tabs.1")}
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={as}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <TabsContent value="development" className="mt-0">
                <ProjectCardList items={PROJECT_BY_JOB.development} />
              </TabsContent>
              <TabsContent value="design" className="mt-0">
                <ProjectCardList items={PROJECT_BY_JOB.design} />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
};
