"use client";

import { Badge } from "@/components/ui/badge";

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
          <Badge
            key={category}
            variant={isSelected ? "default" : "outline"}
            onClick={() => onSelectCategory?.(category)}
            className="cursor-pointer"
          >
            {category}
          </Badge>
        );
      })}
    </div>
  );
};
