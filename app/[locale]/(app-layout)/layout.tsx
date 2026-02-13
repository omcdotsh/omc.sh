import { AppNavigation } from "./app-navigation";
import { Locale } from "@/locales/locales";
import { I18nProviderClient } from "@/locales/client";
import type { ReactNode } from "react";

export default async function RouteLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <I18nProviderClient locale={locale as Locale}>
      <AppNavigation>{children}</AppNavigation>
    </I18nProviderClient>
  );
}
