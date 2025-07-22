"use client";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import { BlogPost } from "./blogUtils";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
import { useCurrentLocale } from "@/locales/client";
import { getDateFnsLocale } from "@/locales/locales";

export const ArticleCard = ({
  slug,
  attributes,
  readingTimeMinutes,
}: BlogPost) => {
  const [hovered, setHovered] = useState(false);
  const locale = useCurrentLocale();

  return (
    <Link
      href={routes.blogPost(slug)}
      className={cn(
        "group block",
        "transition-transform transform",
        "duration-300 cursor-pointer"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MagicCard className="p-0 h-[200px] overflow-hidden">
        <div className="flex flex-row h-full">
          {/* Content section - Left side */}
          <div className="flex flex-col justify-between flex-1 min-w-0 p-4 sm:p-6 h-full">
            <div className="flex flex-col flex-1">
              {/* Header with date and reading time */}
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <time className="text-xs sm:text-sm text-muted-foreground font-medium lowercase">
                  {attributes?.date
                    ? format(new Date(attributes.date), "MMM d, yyyy", {
                        locale: getDateFnsLocale(locale),
                      })
                    : "N/A"}
                </time>
                <span className="text-muted-foreground text-xs sm:text-sm">
                  •
                </span>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                  <Clock size={12} className="sm:w-4 sm:h-4" />
                  <span>{readingTimeMinutes} min</span>
                </div>
              </div>

              {/* Title */}
              <h3
                className={cn(
                  "text-sm sm:text-lg font-bold leading-tight mb-2 sm:mb-3 line-clamp-2",
                  "transition-colors duration-300",
                  hovered ? "text-primary" : "text-foreground"
                )}
              >
                {attributes.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                {attributes.description.slice(0, 100)}...
              </p>
            </div>

            {/* Read more indicator */}
            <div className="flex items-center gap-1 sm:gap-2 mt-3">
              <span
                className={cn(
                  "text-xs sm:text-sm font-medium transition-colors duration-300",
                  hovered ? "text-primary" : "text-muted-foreground"
                )}
              >
                Read article
              </span>
              <ArrowRight
                size={12}
                className={cn(
                  "sm:w-4 sm:h-4 transition-all duration-300",
                  hovered
                    ? "translate-x-1 text-primary"
                    : "translate-x-0 text-muted-foreground"
                )}
              />
            </div>
          </div>

          {/* Image section - Right side */}
          <div className="w-28 sm:w-48 h-full flex-shrink-0 p-2 sm:p-3">
            <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
              <Image
                src={attributes.coverUrl}
                alt={attributes.title}
                fill
                quality={100}
                priority={false}
                unoptimized={false}
                className={cn(
                  "object-cover object-center transition-transform duration-500",
                  hovered ? "scale-105" : "scale-100"
                )}
              />
            </div>
          </div>
        </div>
      </MagicCard>
    </Link>
  );
};
