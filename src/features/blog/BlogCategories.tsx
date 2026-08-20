"use client";

import { cn } from "@/lib/utils";

export interface BlogCategoriesProps {
  categories: string[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const BlogCategories = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: BlogCategoriesProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory?.(category)}
            className={cn(
              "cursor-pointer rounded-pill border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200",
              isSelected
                ? "border-foreground bg-foreground text-background"
                : "border-foreground/15 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
