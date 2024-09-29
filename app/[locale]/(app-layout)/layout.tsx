import { LayoutParams } from "@/types/next.types";
import { AppNavigation } from "./app-navigation";
import { Locale } from "@/locales/locales";
import { I18nProviderClient } from "@/locales/client";

export default function RouteLayout({
  children,
  params: { locale },
}: LayoutParams<{ locale: Locale }>) {
  return (
    <I18nProviderClient locale={locale}>
      <AppNavigation>{children}</AppNavigation>
    </I18nProviderClient>
  );
}
