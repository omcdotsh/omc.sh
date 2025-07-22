import { enUS, fr } from "date-fns/locale";

export const LOCALES = {
  EN: "en",
  FR: "fr",
} as const;

export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

export const DEFAULT_LOCALE = LOCALES.EN;

export const ALL_LOCALES = Object.values(LOCALES);

export const LOCALE_MAP = {
  [LOCALES.EN]: enUS,
  [LOCALES.FR]: fr,
} as const;

export const getDateFnsLocale = (locale: Locale) => {
  return LOCALE_MAP[locale] ?? enUS;
};
