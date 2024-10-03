import en from "@/locales/translations/en";
import fr from "@/locales/translations/fr";

export type XpSection = (typeof en | typeof fr)["xp-section"];
export type XpPro = XpSection["items-pro"][number];
export type XpPerso = XpSection["items-perso"][number];
export type XpAcademic = XpSection["items-academic"][number];
export type XpItem = XpPro | XpPerso | XpAcademic;
export type Achievement = XpSection["items-achievement"][number];
export type AboutItem = XpSection["items-about"][number];
