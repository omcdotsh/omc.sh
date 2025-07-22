"use client";

import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { format } from "date-fns";
import { ArrowBigLeftDashIcon } from "lucide-react";
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
    <div>
      <div className="bg-moss-main rounded-lg p-4 md:p-6 flex flex-col gap-4">
        <Button asChild variant="ghost" className="w-fit">
          <Link href={routes.blog}>
            <ArrowBigLeftDashIcon className="w-4 h-4 mr-2" />
            {t("back")}
          </Link>
        </Button>

        <div className="flex flex-col gap-0">
          <time className="text-xs text-primary">
            {format(new Date(blogPost.attributes.date), "MMMM d, yyyy", {
              locale: getDateFnsLocale(locale),
            })}
          </time>
          <h1 className="text-2xl md:text-4xl font-semibold text-primary leading-tight">
            {blogPost.attributes.title}
          </h1>
        </div>
        <div className="w-full aspect-video rounded-lg overflow-hidden relative">
          <Image
            src={blogPost.attributes.coverUrl}
            alt={blogPost.attributes.title}
            fill
            className="object-cover object-center"
          />
        </div>
        {mdx}
      </div>
    </div>
  );
};
