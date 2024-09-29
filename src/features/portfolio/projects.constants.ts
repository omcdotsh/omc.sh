import { Project, ProjectById, ProjectByJob } from "./projects.types";

export const PROJECTS_BY_ID: ProjectById = {
  "fyde-liquid-vault": {
    title: "fyde liquid vault",
    description: "ai powered vault for optimized liquidity & rebalancing",
    imagePath: "/images/projects/fyde-liquid-vault.png",
    link: "https://app.fyde.fi",
    job: ["development"],
  },
  "fyde-restaking": {
    title: "fyde restaking",
    description: "stack points in eigenlayer and many more in one go",
    imagePath: "/images/projects/fyde-restaking.png",
    link: "https://restaking.fyde.fi",
    job: ["development"],
  },
  "fyde-bullrun-simulator": {
    title: "fyde bullrun simulator",
    description: "exciting trading simulator to test your skills",
    imagePath: "/images/projects/fyde-bullrun-simulator.webp",
    link: "https://game.fyde.fi",
    job: ["design", "development"],
  },
  "uta-marketplace": {
    title: "ultra tech alliance",
    description: "uniq (nft) marketplace built on the ultra blockchain",
    imagePath: "/images/projects/uta-marketplace.png",
    link: "https://ultra-alliance.tech",
    job: ["design", "development"],
  },
  "uta-packages": {
    title: "ultra utilities packages",
    description:
      "packages & documentation for dev tooling on the ultra blockchain",
    imagePath: "/images/projects/uta-packages.png",
    link: "https://github.com/ultra-alliance/ultra-utilities",
    job: ["development"],
  },
  "blockswan-protocol": {
    title: "blockswan protocol",
    description: "decentralized and non-custodial digital services marketplace",
    imagePath: "/images/projects/blockswan-protocol.png",
    link: "https://github.com/BlockSwan/blockswan-protocol",
    job: ["development"],
  },
  "rainbows-dao": {
    title: "rainbows dao",
    description: "dApp leveraging the latest tech for the common good",
    imagePath: "/images/projects/rainbows-dao.png",
    link: "https://rainbows.fi",
    job: ["development"],
  },
  "cosmic-exodus": {
    title: "cosmic exodus",
    description: "immersive strategy gamefi experience",
    imagePath: "/images/projects/cosmic-exodus.png",
    link: "https://cosmicexodus.xyz",
    job: ["development"],
  },
  "oscarmac-game-particles": {
    title: "particle rogue",
    description: "simple javascript web game with metamask auth",
    imagePath: "/images/projects/oscarmac-game-particles.png",
    link: "https://github.com/oscarmac/oscarmac-game-particles",
    job: ["development"],
  },
  "oscarmac-coin-trainor": {
    title: "coin trainor",
    description:
      "rpg game pokemon-like where you get to scale your crypto coins",
    imagePath: "/images/projects/oscarmac-coin-trainor.png",
    link: "https://github.com/oscarmac/oscarmac-coin-trainor",
    job: ["development"],
  },
  "blockswan-botswan": {
    title: "botswan",
    description: "javascript discord bot for community engagement",
    imagePath: "/images/projects/blockswan-botswan.png",
    link: "https://github.com/BlockSwan/botswan",
    job: ["development"],
  },
  "oscarmac-logofolio2": {
    title: "logofolio v2",
    description: "collection of logos I designed and sold",
    imagePath: "/images/projects/oscarmac-logofolio2.png",
    link: "https://www.behance.net/gallery/23885671/Logo-Folio-2",
    job: ["design"],
  },
  "oscarmac-logofolio1": {
    title: "logofolio v1",
    description: "horirble list of the first logos i sold in high school",
    imagePath: "/images/projects/oscarmac-logofolio1.png",
    link: "https://www.behance.net/gallery/17354603/Logo-Folio-1",
    job: ["design"],
  },
  "oscarmac-hunt-or-get-hunted": {
    title: "hunt or get hunted",
    description:
      "illustration usable on different support (t-shirt, snapback, etc..)",
    imagePath: "/images/projects/oscarmac-hunt-or-get-hunted.png",
    link: "https://www.behance.net/gallery/28671007/Hunt-or-get-hunted-(Illustration)",
    job: ["design"],
  },
  "oscarmac-esport-mascots": {
    title: "esport mascots",
    description: "collection of esport mascots i designed",
    imagePath: "/images/projects/oscarmac-esport-mascots.png",
    link: "https://www.behance.net/gallery/17335269/Sports-Logos",
    job: ["design"],
  },
  "oscarmac-jersey-design": {
    title: "jersey design",
    description: "esport jersey designs ready for print",
    imagePath: "/images/projects/oscarmac-jersey-design.png",
    link: "https://www.behance.net/gallery/22813281/Jersey-Design",
    job: ["design"],
  },
  "oscarmac-twitter-banners": {
    title: "twitter banners",
    description: "twitter banners i designed for online customers",
    imagePath: "/images/projects/oscarmac-twitter-banners.png",
    link: "https://www.behance.net/gallery/17270929/Header-Twitter",
    job: ["design"],
  },
  "oscarmac-oscardesign": {
    title: "oscar design",
    description: "personal branding for my design business",
    imagePath: "/images/projects/oscarmac-oscardesign.jpeg",
    link: "https://www.behance.net/gallery/21497405/Personal-Branding",
    job: ["design"],
  },
  "oscarmac-rasta-skull": {
    title: "rasta skull",
    description: "vectorized illustration usable on different support",
    imagePath: "/images/projects/oscarmac-rasta-skull.png",
    link: "https://www.behance.net/gallery/25613919/Rasta-Skull",
    job: ["design"],
  },
} as const;

export const ALL_PROJECTS: Project[] = Object.values(PROJECTS_BY_ID);

export const DESIGNER_PROJECTS: Project[] = Object.values(
  PROJECTS_BY_ID
).filter((project) => project.job.includes("design"));

export const DEVELOPER_PROJECTS: Project[] = Object.values(
  PROJECTS_BY_ID
).filter((project) => project.job.includes("development"));

export const PROJECT_BY_JOB: ProjectByJob = {
  design: DESIGNER_PROJECTS,
  development: DEVELOPER_PROJECTS,
} as const;
