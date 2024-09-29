export type ProjectJob = "design" | "development";

export type Project = {
  title: string;
  description: string;
  imagePath: string;
  link: string;
  job: ProjectJob[];
};

export type ProjectId =
  | "fyde-liquid-vault"
  | "fyde-restaking"
  | "fyde-bullrun-simulator"
  | "uta-marketplace"
  | "uta-packages"
  | "blockswan-protocol"
  | "rainbows-dao"
  | "cosmic-exodus"
  | "oscarmac-game-particles"
  | "oscarmac-coin-trainor"
  | "blockswan-botswan"
  | "oscarmac-logofolio2"
  | "oscarmac-logofolio1"
  | "oscarmac-hunt-or-get-hunted"
  | "oscarmac-esport-mascots"
  | "oscarmac-jersey-design"
  | "oscarmac-twitter-banners"
  | "oscarmac-oscardesign"
  | "oscarmac-rasta-skull";

export type ProjectById = Record<ProjectId, Project>;

export type ProjectByJob = Record<ProjectJob, Project[]>;
