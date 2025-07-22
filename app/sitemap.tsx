import { BlogUtils } from "@/features/blog/blogUtils";
import { getRouteUrl, getServerUrl } from "@/lib/server-url";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await BlogUtils.getPosts({});
  return [
    {
      url: getRouteUrl("home"),
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: getRouteUrl("portfolio"),
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: getRouteUrl("xp"),
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: getRouteUrl("blog"),
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    ...posts.map(
      (post) =>
        ({
          url: `${getServerUrl()}/blog/${post.slug}`,
          lastModified: new Date(post.attributes.date),
          changeFrequency: "monthly",
        } as const)
    ),
  ];
}
