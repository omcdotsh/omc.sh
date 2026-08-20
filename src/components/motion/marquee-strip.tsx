"use client";

import Marquee from "react-fast-marquee";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MarqueeStrip({
  items,
  className,
  reverse = false,
  speed = 40,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
  speed?: number;
}) {
  const reduceMotion = useReducedMotion();
  const content = items.map((item, i) => (
    <span
      key={`${item}-${i}`}
      className="mx-6 font-display text-4xl font-extrabold uppercase tracking-[-0.04em] text-foreground/15 sm:text-5xl md:text-6xl"
    >
      {item}
      <span className="mx-6 text-dot">/</span>
    </span>
  ));

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "flex flex-wrap justify-center gap-4 overflow-hidden border-y border-foreground/15 py-4",
          className
        )}
      >
        {items.slice(0, 4).map((item) => (
          <span
            key={item}
            className="font-display text-2xl font-bold uppercase text-foreground/30"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden border-y border-foreground/15 py-3",
        className
      )}
    >
      <Marquee speed={speed} gradient={false} direction={reverse ? "right" : "left"}>
        {content}
        {content}
      </Marquee>
    </div>
  );
}
