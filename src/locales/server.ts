import { createI18nServer } from "next-international/server";
import { LOCALES } from "./locales";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  [LOCALES.EN]: () => import("./translations/en"),
  [LOCALES.FR]: () => import("./translations/fr"),
});
