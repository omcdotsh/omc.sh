import { DEFAULT_LOCALE, Locale } from "@/locales/locales";
import { PageParams } from "@/types/next.types";
import fm from "front-matter";
import fs from "fs/promises";
import path from "path";
import { cache } from "react";
import { z } from "zod";

const getBlogDirectory = (locale: Locale) => {
  return path.join(process.cwd(), "content", locale);
};

const AttributeSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()),
  status: z.enum(["draft", "published"]),
  coverUrl: z.string(),
  category: z.string(),
});

type BlogPostAttributes = z.infer<typeof AttributeSchema> & {
  date: string;
};

export type BlogPost = {
  slug: string;
  attributes: BlogPostAttributes;
  content: string;
  readingTimeMinutes: number;
};

export type BlogPostParams = PageParams<{ slug: string; locale: Locale }>;

export const BlogUtils = {
  attributes: AttributeSchema,

  readingTime: (markdownText: string) => {
    const textOnly = markdownText.replaceAll(/[\n#()*+<>[\]-]/g, " ");

    const wordCount = textOnly
      .split(/\s+/)
      .filter((word) => word.length > 0).length;

    const readingTimeMinutes = Math.ceil(wordCount / 200);

    return readingTimeMinutes;
  },

  getPosts: cache(async function getPosts({
    locale,
    category,
  }: {
    locale?: Locale;
    category?: string;
  }) {
    const fileNames = await fs.readdir(
      getBlogDirectory(locale ?? DEFAULT_LOCALE)
    );
    const posts: BlogPost[] = [];
    for await (const fileName of fileNames) {
      const fullPath = path.join(
        getBlogDirectory(locale ?? DEFAULT_LOCALE),
        fileName
      );
      const fileContents = await fs.readFile(fullPath, "utf8");

      const matter = fm(fileContents);

      const result = AttributeSchema.safeParse(matter.attributes);

      if (!result.success) {
        continue;
      }

      if (
        process.env.VERCEL_ENV === "production" &&
        result.data.status === "draft"
      ) {
        continue;
      }

      if (category) {
        if (result.data.category !== category) {
          continue;
        }
      }

      const [date, slug] = fileName.split("_");

      if (!date || !slug) {
        continue;
      }

      posts.push({
        slug: slug.replace(".mdx", ""),
        content: matter.body,
        attributes: {
          date,
          ...result.data,
          coverUrl: `/images/blog/${result.data.coverUrl}`,
        },
        readingTimeMinutes: BlogUtils.readingTime(matter.body),
      });
    }

    return posts.sort((a, b) => {
      return (
        new Date(b.attributes.date).getTime() -
        new Date(a.attributes.date).getTime()
      );
    });
  }),

  getCategories: async ({ locale }: { locale?: Locale }) => {
    const posts = await BlogUtils.getPosts({ locale });
    const categories = new Set<string>();
    for (const post of posts) {
      if (!post.attributes.category) {
        continue;
      }
      categories.add(post.attributes.category);
    }
    return Array.from(categories);
  },
  getCurrentPost: async (slug: string, locale?: Locale) => {
    const posts = await BlogUtils.getPosts({ locale });
    return posts.find((post) => post.slug === slug);
  },
};
