export const LOCALES = {
  EN: "en",
  FR: "fr",
} as const;

export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

export const DEFAULT_LOCALE = LOCALES.EN;

export const ALL_LOCALES = Object.values(LOCALES);
