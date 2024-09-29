import { getServerUrl } from "@/lib/server-url";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${getServerUrl()}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${getServerUrl()}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${getServerUrl()}/xp`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
