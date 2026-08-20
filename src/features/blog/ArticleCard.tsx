"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "./blogUtils";
import { routes } from "@/lib/routes";
import { useCurrentLocale } from "@/locales/client";
import { getDateFnsLocale } from "@/locales/locales";

export const ArticleCard = ({
  slug,
  attributes,
  readingTimeMinutes,
  index = 0,
}: BlogPost & { index?: number }) => {
  const locale = useCurrentLocale();

  return (
    <Link
      href={routes.blogPost(slug)}
      className="group grid cursor-pointer gap-0 border-b border-foreground/10 transition-colors duration-300 hover:bg-foreground hover:text-background md:grid-cols-[1fr_0.85fr]"
    >
      <div className="flex flex-col justify-between p-6 sm:p-8">
        <div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors group-hover:text-background/60">
            <span className="inline-flex items-center gap-2 text-foreground transition-colors group-hover:text-background">
              <span className="size-1.5 rounded-full bg-dot" />
              {String(index + 1).padStart(2, "0")}
            </span>
            <time>
              {attributes?.date
                ? format(new Date(attributes.date), "MMM d, yyyy", {
                    locale: getDateFnsLocale(locale),
                  })
                : "—"}
            </time>
            <span>·</span>
            <span>{readingTimeMinutes} min</span>
            {attributes.category ? (
              <>
                <span>·</span>
                <span>{attributes.category}</span>
              </>
            ) : null}
          </div>
          <h3 className="mt-4 font-display text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
            {attributes.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/70">
            {attributes.description}
          </p>
        </div>
        <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em]">
          read
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      <div className="relative min-h-[200px] overflow-hidden border-t border-foreground/10 md:min-h-[260px] md:border-l md:border-t-0">
        <Image
          src={attributes.coverUrl}
          alt={attributes.title}
          fill
          quality={90}
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/25 transition-opacity group-hover:opacity-0" />
      </div>
    </Link>
  );
};
