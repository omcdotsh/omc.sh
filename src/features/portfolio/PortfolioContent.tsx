"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCardList } from "@/features/portfolio/ProjectCardList";
import { PROJECT_BY_JOB } from "@/features/portfolio/projects.constants";
import { ProjectJob } from "@/features/portfolio/projects.types";
import { useQueryState } from "nuqs";

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

  const items = PROJECT_BY_JOB[as];

  return (
    <div className="w-full flex flex-col gap-2">
      <Tabs
        value={as ?? DEFAULT_JOB}
        onValueChange={(value) => setAs(value as ProjectJob)}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="development">developer</TabsTrigger>
          <TabsTrigger value="design">designer</TabsTrigger>
        </TabsList>
      </Tabs>
      <ProjectCardList items={items} />
    </div>
  );
};
