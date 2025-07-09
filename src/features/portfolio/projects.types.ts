import { Locale } from "@/locales/locales";

export type ProjectJob = "design" | "development";

export type Project = {
  title: string;
  description: Record<Locale, string>;
  imagePath: string;
  link: string;
  job: ProjectJob[];
};

export type ProjectId =
  | "blockswan-app"
  | "blockswan-botswan"
  | "blockswan-protocol"
  | "cosmic-exodus"
  | "fyde-bullrun-simulator"
  | "fyde-liquid-vault"
  | "fyde-restaking"
  | "oscarmac-coin-trainor"
  | "oscarmac-esport-mascots"
  | "oscarmac-game-particles"
  | "oscarmac-hunt-or-get-hunted"
  | "oscarmac-jersey-design"
  | "oscarmac-logofolio1"
  | "oscarmac-logofolio2"
  | "oscarmac-oscardesign"
  | "oscarmac-rasta-skull"
  | "oscarmac-twitter-banners"
  | "rainbows-dao"
  | "uta-marketplace"
  | "uta-packages"
  | "morpho-app-v2"
  | "neutrl-docs"
  | "neutrl-landing"
  | "neutrl-dashboard";

export type ProjectById = Record<ProjectId, Project>;

export type ProjectByJob = Record<ProjectJob, Project[]>;
