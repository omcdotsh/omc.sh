"use client";

import { useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BlogCategories } from "./BlogCategories";
import { ArticleCard } from "./ArticleCard";
import { BlogPost } from "./blogUtils";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { useQueryState } from "nuqs";
import { PageHero } from "@/components/layout/page-hero";

export const BlogContent = ({
  articles,
  categories,
}: {
  articles: BlogPost[];
  categories: string[];
}) => {
  const t = useScopedI18n("blog-section.categories");
  const page = useScopedI18n("blog-page");
  const allCategory = t("all");
  const locale = useCurrentLocale();

  const [selectedCategory, setSelectedCategory] = useQueryState<string>(
    "category",
    {
      defaultValue: allCategory,
      parse: (value) => value || allCategory,
    }
  );

  const allCategories = useMemo(
    () => [allCategory, ...categories],
    [categories, allCategory]
  );

  const filteredArticles = useMemo(() => {
    if (selectedCategory === allCategory) return articles;
    return articles.filter((a) => a.attributes.category === selectedCategory);
  }, [articles, selectedCategory, allCategory]);

  useEffect(() => {
    setSelectedCategory(allCategory);
  }, [locale, setSelectedCategory, allCategory]);

  return (
    <div className="omc-container w-full">
      <PageHero
        index="NT"
        kicker={page("kicker")}
        title={page("title")}
        description={page("description")}
      />

      <div className="mt-8 flex flex-col gap-8">
        <BlogCategories
          categories={allCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="flex flex-col border-t border-foreground/15">
          <AnimatePresence initial={false}>
            {filteredArticles.map((article, idx) => (
              <motion.div
                key={`${article.attributes.title}-${idx}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
              >
                <ArticleCard {...article} index={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
