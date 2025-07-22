export const routes = {
  home: "/",
  xp: "/xp",
  portfolio: "/portfolio",
  blog: "/blog",
  blogPost: (slug: string) => `/blog/${slug}`,
} as const;

export type Route = keyof typeof routes;
