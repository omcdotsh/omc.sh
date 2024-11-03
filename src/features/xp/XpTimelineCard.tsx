"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { XpItem } from "./xp.types";
import { AnimatedBadgeList } from "@/components/ui/animated-badge-list";
import { useAppTheme } from "../theme/useAppTheme";

export function XpTimelineCard({
  experiences,
  title,
}: {
  experiences: readonly XpItem[];
  title?: string;
}) {
  const { color } = useAppTheme();
  // Track how many items are in view
  const [visibleItems, setVisibleItems] = useState(0);

  // Compute the height of the timeline based on the visible items
  const targetHeight = (visibleItems / experiences.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MagicCard
        className="w-full"
        gradientColor={SITE_CONFIG.brand.primary(color ?? "red") + "20"}
      >
        {title ? (
          <CardHeader>
            <motion.div
              className="flex gap-2 items-center"
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
              animate={{ height: `${targetHeight}%` }} // Smoothly animate height
              transition={{ type: "tween", duration: 0.5, ease: "easeOut" }} // Smooth transition
            />
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                item={exp}
                index={index}
                last={index === experiences.length - 1}
                onReveal={() => setVisibleItems((prev) => prev + 1)}
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
  onReveal,
}: {
  item: XpItem;
  index: number;
  last: boolean;
  onReveal: () => void;
}) {
  return (
    <motion.div
      className={cn(["flex", !last && "mb-8"])}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} // Reveal effect on scroll
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      onViewportEnter={onReveal} // Trigger onReveal when item enters viewport
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
        <p className="mt-2 text-sm whitespace-pre-line">{item.description}</p>
        {item.skills ? (
          <AnimatedBadgeList items={item.skills} badgeVariant={"outline"} />
        ) : null}
      </div>
    </motion.div>
  );
}
