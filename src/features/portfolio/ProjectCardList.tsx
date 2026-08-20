"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Project } from "./projects.types";
import { ExternalLinkIcon } from "lucide-react";
import { useCurrentLocale } from "@/locales/client";
import { Reveal } from "@/components/motion/reveal";

export const ProjectCardList = ({
  items,
  className,
}: {
  items?: Project[];
  className?: string;
}) => {
  const locale = useCurrentLocale();

  return (
    <div className={cn("flex flex-col border-t border-foreground/10", className)}>
      {items?.map((item, idx) => (
        <Reveal key={item.link ?? item.title} delay={Math.min(idx * 0.05, 0.25)}>
          <Link
            href={item.link || "#"}
            target="_blank"
            className="group relative grid cursor-pointer gap-0 border-b border-foreground/10 transition-colors duration-300 hover:bg-foreground hover:text-background md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors group-hover:text-background/60">
                  <span className="size-1.5 rounded-full bg-dot" />
                  {String(idx + 1).padStart(2, "0")} / project
                </p>
                <h3 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/70">
                  {item.description[locale as keyof typeof item.description]}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em]">
                open
                <ExternalLinkIcon className="size-3.5" />
              </div>
            </div>

            <div className="relative min-h-[220px] overflow-hidden border-t border-foreground/10 md:min-h-[320px] md:border-l md:border-t-0">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className="object-cover object-center grayscale transition-[filter] duration-500 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 transition-opacity group-hover:opacity-20" />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
};
