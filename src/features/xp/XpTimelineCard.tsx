"use client";

import { cn } from "@/lib/utils";
import { XpItem } from "./xp.types";
import { AnimatedBadgeList } from "@/components/ui/animated-badge-list";
import { Reveal } from "@/components/motion/reveal";

export function XpTimelineCard({
  experiences,
}: {
  experiences: readonly XpItem[];
  title?: string;
}) {
  return (
    <div className="relative space-y-0 border-t border-foreground/10">
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={`${exp.company}-${exp.date}-${index}`}
          item={exp}
          index={index}
          last={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}

function ExperienceItem({
  item,
  index,
  last,
}: {
  item: XpItem;
  index: number;
  last: boolean;
}) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={Math.min(index * 0.04, 0.2)}>
      <article
        className={cn(
          "group grid gap-4 border-b border-foreground/10 py-8 transition-colors duration-300 hover:bg-muted/60 md:grid-cols-[5rem_1fr] md:gap-8 md:py-10",
          !last && ""
        )}
      >
        <div className="flex items-start justify-between md:block">
          <span className="inline-flex items-center gap-2 font-mono text-sm">
            <span className="size-1.5 rounded-full bg-dot" />
            {n}
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:mt-3">
            {item.date}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {item.title}
            </h3>
            <p className="font-mono text-sm text-muted-foreground">
              @{item.company}
            </p>
          </div>
          <p className="mt-4 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          {item.skills ? (
            <div className="mt-5">
              <AnimatedBadgeList items={item.skills} badgeVariant="outline" />
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}
