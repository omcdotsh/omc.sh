"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Xp } from "./xp.types";

export function XpTimelineCard({
  experiences,
  title,
}: {
  experiences: Xp[];
  title?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MagicCard
        className="w-full"
        gradientColor={SITE_CONFIG.brand.primary + "20"}
      >
        {title ? (
          <CardHeader>
            <motion.div
              className="flex gap-2 items-center "
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CardTitle>{title}</CardTitle>
            </motion.div>
          </CardHeader>
        ) : null}

        <CardContent>
          <div className="relative pt-4">
            <motion.div
              className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-primary"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                item={exp}
                index={index}
                last={index === experiences.length - 1}
              />
            ))}
          </div>
        </CardContent>
      </MagicCard>
    </motion.div>
  );
}

function ExperienceItem({
  item,
  index,
  last,
}: {
  item: Xp;
  index: number;
  last: boolean;
}) {
  return (
    <motion.div
      className={cn(["flex", !last && "mb-8"])}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
    >
      <div className="mr-2 mt-1">
        <div className="flex h-2 w-2 items-center justify-center rounded-full bg-primary">
          <div className="h-1 w-1 rounded-full bg-background" />
        </div>
      </div>
      <div>
        <p className="text-xs text-primary">{item.date}</p>
        <h3 className="text-md font-semibold">{item.title}</h3>
        <p className="text-sm text-muted-foreground">@{item.company}</p>
        <p className="mt-2 text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
}
