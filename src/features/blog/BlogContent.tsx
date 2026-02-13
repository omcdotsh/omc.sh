"use client";

import { useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BlogCategories } from "./BlogCategories";
import { ArticleCard } from "./ArticleCard";
import { BlogPost } from "./blogUtils";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { useQueryState } from "nuqs";

const articleVariants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.32, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: 24,
    scale: 0.98,
    transition: { duration: 0.22, ease: "easeIn" as const },
  },
};

export const BlogContent = ({
  articles,
  categories,
}: {
  articles: BlogPost[];
  categories: string[];
}) => {
  const t = useScopedI18n("blog-section.categories");
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
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <BlogCategories
          categories={allCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <div className="flex flex-col gap-2">
        <AnimatePresence initial={false}>
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={`${article.attributes.title}-${idx}`}
              layout
              variants={articleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: idx * 0.05 }}
            >
              <ArticleCard {...article} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
