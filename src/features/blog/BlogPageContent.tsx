"use client";

import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { BlogPost } from "./blogUtils";
import { getDateFnsLocale } from "@/locales/locales";
import Image from "next/image";

export interface BlogPageContentProps {
  mdx: ReactNode;
  blogPost: BlogPost;
}

export const BlogPageContent = ({ mdx, blogPost }: BlogPageContentProps) => {
  const locale = useCurrentLocale();
  const t = useScopedI18n("blog-section");

  return (
    <article className="omc-container w-full">
      <div className="border-b border-foreground/10 pb-10 pt-4">
        <Button
          asChild
          variant="outline"
          className="mb-8 font-mono text-xs uppercase tracking-[0.14em]"
        >
          <Link href={routes.blog} className="inline-flex items-center gap-2">
            <ArrowLeft className="size-3.5" />
            {t("back")}
          </Link>
        </Button>

        <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-dot" />
          {format(new Date(blogPost.attributes.date), "MMMM d, yyyy", {
            locale: getDateFnsLocale(locale),
          })}
          {blogPost.attributes.category
            ? ` · ${blogPost.attributes.category}`
            : ""}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,7vw,4.75rem)] font-black leading-[0.95] tracking-[-0.04em]">
          {blogPost.attributes.title}
        </h1>
        {blogPost.attributes.description ? (
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {blogPost.attributes.description}
          </p>
        ) : null}
      </div>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden border border-foreground/15">
        <Image
          src={blogPost.attributes.coverUrl}
          alt={blogPost.attributes.title}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="prose mx-auto mt-10 max-w-3xl pb-16 dark:prose-invert">
        {mdx}
      </div>
    </article>
  );
};
