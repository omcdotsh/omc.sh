"use client";
import { createI18nClient } from "next-international/client";
import { LOCALES } from "./locales";

export const {
  useCurrentLocale,
  useChangeLocale,
  useI18n,
  useScopedI18n,
  I18nProviderClient,
} = createI18nClient({
  [LOCALES.EN]: () => import("./translations/en"),
  [LOCALES.FR]: () => import("./translations/fr"),
});
