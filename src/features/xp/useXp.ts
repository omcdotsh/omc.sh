import { useCurrentLocale } from "@/locales/client";
import { useMemo } from "react";
import { Locale, LOCALES } from "@/locales/locales";
import en from "@/locales/translations/en";
import fr from "@/locales/translations/fr";
import { Achievement, XpPro, XpPerso, XpAcademic, AboutItem } from "./xp.types";

type XpSection =
  | "items-pro"
  | "items-perso"
  | "items-academic"
  | "items-achievement"
  | "items-about";

type XpType<T extends XpSection> = T extends "items-pro"
  ? readonly XpPro[]
  : T extends "items-perso"
  ? readonly XpPerso[]
  : T extends "items-academic"
  ? readonly XpAcademic[]
  : T extends "items-achievement"
  ? readonly Achievement[]
  : T extends "items-about"
  ? readonly AboutItem[]
  : never;

const getXpData = <T extends XpSection>(
  locale: Locale,
  section: T
): XpType<T> => {
  switch (locale) {
    case LOCALES.FR:
      return fr["xp-section"][section] as unknown as XpType<T>;

    case LOCALES.EN:
      return en["xp-section"][section] as unknown as XpType<T>;
    default:
      return en["xp-section"][section] as unknown as XpType<T>;
  }
};

export function useXp() {
  const locale = useCurrentLocale();

  const xpPro = useMemo<readonly XpPro[]>(
    () => getXpData(locale, "items-pro"),
    [locale]
  );
  const xpPerso = useMemo<readonly XpPerso[]>(
    () => getXpData(locale, "items-perso"),
    [locale]
  );
  const xpAcademic = useMemo<readonly XpAcademic[]>(
    () => getXpData(locale, "items-academic"),
    [locale]
  );
  const achievements = useMemo<readonly Achievement[]>(
    () => getXpData(locale, "items-achievement"),
    [locale]
  );
  const aboutItems = useMemo<readonly AboutItem[]>(
    () => getXpData(locale, "items-about"),
    [locale]
  );

  return { xpPro, xpPerso, xpAcademic, achievements, aboutItems };
}
