"use client";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function PageHero({
  index,
  kicker,
  title,
  description,
  children,
  className,
}: {
  index: string;
  kicker: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-foreground/10 pb-12 pt-6",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 top-0 font-display text-[clamp(6rem,22vw,14rem)] font-black leading-none tracking-[-0.06em] text-foreground/[0.04]"
      >
        {index}
      </div>

      <Reveal>
        <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-dot" />
          {index} / {kicker}
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.75rem,8vw,5.5rem)] font-black leading-[0.9] tracking-[-0.04em]">
          {title}
        </h1>
      </Reveal>

      {description ? (
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}

      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
