"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProjectCardList } from "@/features/portfolio/ProjectCardList";
import { PROJECT_BY_JOB } from "@/features/portfolio/projects.constants";
import { ProjectJob } from "@/features/portfolio/projects.types";
import { useQueryState } from "nuqs";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_JOB: ProjectJob = "development";

const parseJob = (value: string): ProjectJob => {
  if (["development", "design"].includes(value)) {
    return value as ProjectJob;
  }
  return DEFAULT_JOB;
};

export const PortfolioContent = () => {
  const [as, setAs] = useQueryState<ProjectJob>("as", {
    defaultValue: DEFAULT_JOB,
    parse: parseJob,
  });

  return (
    <motion.div
      className="w-full flex flex-col gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Tabs
        value={as ?? DEFAULT_JOB}
        onValueChange={(value) => setAs(value as ProjectJob)}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="development">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              developer
            </motion.span>
          </TabsTrigger>
          <TabsTrigger value="design">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              designer
            </motion.span>
          </TabsTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <motion.div key={as}>
            <TabsContent value="development">
              <ProjectCardList items={PROJECT_BY_JOB.development} />
            </TabsContent>
            <TabsContent value="design">
              <ProjectCardList items={PROJECT_BY_JOB.design} />
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  );
};
