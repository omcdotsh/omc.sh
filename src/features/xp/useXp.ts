import { useCurrentLocale } from "@/locales/client";
import { AboutItem, Achievement, Xp } from "./xp.types";
import { useMemo } from "react";
import { Locale, LOCALES } from "@/locales/locales";
import en from "@/locales/translations/en";
import fr from "@/locales/translations/fr";

const getXpPro = (locale: Locale) => {
  switch (locale) {
    case LOCALES.FR:
      return [...fr["xp-section"]["items-pro"]];
    case LOCALES.EN:
    default:
      return [...en["xp-section"]["items-pro"]];
  }
};

const getXpPerso = (locale: Locale) => {
  switch (locale) {
    case LOCALES.FR:
      return [...fr["xp-section"]["items-perso"]];
    case LOCALES.EN:
    default:
      return [...en["xp-section"]["items-perso"]];
  }
};

const getXpAcademic = (locale: Locale) => {
  switch (locale) {
    case LOCALES.FR:
      return [...fr["xp-section"]["items-academic"]];
    case LOCALES.EN:
    default:
      return [...en["xp-section"]["items-academic"]];
  }
};

const getAchievements = (locale: Locale) => {
  switch (locale) {
    case LOCALES.FR:
      return [...fr["xp-section"]["items-achievment"]];
    case LOCALES.EN:
    default:
      return [...en["xp-section"]["items-achievment"]];
  }
};

const getAboutItems = (locale: Locale) => {
  switch (locale) {
    case LOCALES.FR:
      return [...fr["xp-section"]["items-about"]];
    case LOCALES.EN:
    default:
      return [...en["xp-section"]["items-about"]];
  }
};

export function useXp() {
  const locale = useCurrentLocale();

  const xpPro: Xp[] = useMemo(() => getXpPro(locale), [locale]);
  const xpPerso: Xp[] = useMemo(() => getXpPerso(locale), [locale]);
  const xpAcademic: Xp[] = useMemo(() => getXpAcademic(locale), [locale]);
  const achievements: Achievement[] = useMemo(
    () => getAchievements(locale),
    [locale]
  );

  const aboutItems: AboutItem[] = useMemo(
    () => getAboutItems(locale),
    [locale]
  );

  return { xpPro, xpPerso, xpAcademic, achievements, aboutItems };
}
