import { BlogContent } from "@/features/blog/BlogContent";
import { BlogUtils } from "@/features/blog/blogUtils";
import { combineWithParentMetadata } from "@/lib/metadata";
import { Locale } from "@/locales/locales";
import { PageParams } from "@/types/next.types";

export const generateMetadata = combineWithParentMetadata({
  title: "blog",
  description:
    "explore my blog, showcasing my thoughts and insights on software development, blockchain technology, and DeFi applications.",
});

export default async function RoutePage(props: PageParams<{ locale: Locale }>) {
  const { locale } = props.params;

  const categories = await BlogUtils.getCategories({
    locale,
  });

  const posts = await BlogUtils.getPosts({ locale });

  return <BlogContent articles={posts} categories={categories} />;
}
