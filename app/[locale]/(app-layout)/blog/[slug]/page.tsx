import { BlogPostParams, BlogUtils } from "@/features/blog/blogUtils";
import { getServerUrl } from "@/lib/server-url";
import { SITE_CONFIG } from "@/lib/site-config";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { logger } from "@/lib/logger";
import { ServerMdx } from "@/features/markdown/ServerMdx";
import { BlogPageContent } from "@/features/blog/BlogPageContent";
import { LOCALES } from "@/locales/locales";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: BlogPostParams): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await BlogUtils.getCurrentPost(slug, locale);

  if (!post) {
    notFound();
  }

  const coverImage = `https://omc.sh${post.attributes.coverUrl}`;

  return {
    title: post.attributes.title,
    description: post.attributes.description,
    keywords: post.attributes.keywords,
    authors: {
      name: SITE_CONFIG.name,
      url: getServerUrl(),
    },
    openGraph: {
      title: post.attributes.title,
      description: post.attributes.description,
      url: coverImage,
      type: "article",
    },
    twitter: {
      title: post.attributes.title,
      description: post.attributes.description,
      images: coverImage,
    },
  };
}

export async function generateStaticParams() {
  const enPosts = await BlogUtils.getPosts({ locale: LOCALES.EN });
  const frPosts = await BlogUtils.getPosts({ locale: LOCALES.FR });
  const enParams = enPosts.map((post) => ({
    slug: post.slug,
    locale: LOCALES.EN,
  }));
  const frParams = frPosts.map((post) => ({
    slug: post.slug,
    locale: LOCALES.FR,
  }));

  return [...enParams, ...frParams];
}

export default async function RoutePage(props: BlogPostParams) {
  const { slug, locale } = await props.params;
  const post = await BlogUtils.getCurrentPost(slug, locale);

  if (!post) {
    notFound();
  }

  if (
    post.attributes.status === "draft" &&
    process.env.VERCEL_ENV === "production"
  ) {
    logger.warn(`Post "${post.attributes.title}" is a draft`);
    notFound();
  }

  return (
    <BlogPageContent
      mdx={
        <ServerMdx
          source={post.content}
          className="prose mb-8 dark:prose-invert lg:prose-lg xl:prose-xl"
        />
      }
      blogPost={post}
    />
  );
}
