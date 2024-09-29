import { Project, ProjectById, ProjectByJob } from "./projects.types";

export const PROJECTS_BY_ID: ProjectById = {
  "fyde-bullrun-simulator": {
    title: "fyde bullrun simulator",
    description: {
      en: "trading simulator game to test your skills",
      fr: "jeu de simulation de trading pour tester vos compétences",
    },
    imagePath: "/images/projects/fyde-bullrun-simulator.webp",
    link: "https://game.fyde.fi",
    job: ["design", "development"],
  },
  "fyde-liquid-vault": {
    title: "fyde liquid vault",
    description: {
      en: "ai powered vault for optimized liquidity & rebalancing",
      fr: "coffre-fort alimenté par l'IA pour une liquidité et un rééquilibrage optimisés",
    },
    imagePath: "/images/projects/fyde-liquid-vault.png",
    link: "https://app.fyde.fi",
    job: ["development"],
  },
  "fyde-restaking": {
    title: "fyde restaking",
    description: {
      en: "liquid restaking protocol aggregator to capture rewards",
      fr: "agrégateur de protocoles de restaking pour capturer les récompenses",
    },
    imagePath: "/images/projects/fyde-restaking.png",
    link: "https://restaking.fyde.fi",
    job: ["development"],
  },
  "blockswan-app": {
    title: "blockswan app",
    description: {
      en: "saas to manage clients & invoices in one place.",
      fr: "saas pour gérer ses clients et ses factures en un seul endroit.",
    },
    imagePath: "/images/projects/blockswan-app.png",
    link: "https://blockswan.app",
    job: ["design", "development"],
  },
  "uta-marketplace": {
    title: "ultra tech alliance",
    description: {
      en: "uniq (nft) marketplace built on the ultra blockchain",
      fr: "place de marché uniq (nft) sur la blockchain ultra",
    },
    imagePath: "/images/projects/uta-marketplace.png",
    link: "https://ultra-alliance.tech",
    job: ["design", "development"],
  },
  "uta-packages": {
    title: "ultra utilities packages",
    description: {
      en: "packages & documentation for dev tooling on the ultra blockchain",
      fr: "packages et documentation pour developer sur la blockchain ultra",
    },
    imagePath: "/images/projects/uta-packages.png",
    link: "https://github.com/ultra-alliance/ultra-utilities",
    job: ["development"],
  },
  "blockswan-protocol": {
    title: "blockswan protocol",
    description: {
      en: "decentralized and non-custodial digital services marketplace",
      fr: "place de marché de services numériques décentralisée et non-custodiale",
    },
    imagePath: "/images/projects/blockswan-protocol.png",
    link: "https://github.com/BlockSwan/blockswan-protocol",
    job: ["development"],
  },
  "rainbows-dao": {
    title: "rainbows dao",
    description: {
      en: "dApp leveraging the latest tech for the common good",
      fr: "dApp exploitant les dernières technologies pour le bien commun",
    },
    imagePath: "/images/projects/rainbows-dao.png",
    link: "https://blockswan-hq.gitbook.io/rainbows-dao",
    job: ["development"],
  },
  "cosmic-exodus": {
    title: "cosmic exodus",
    description: {
      en: "immersive strategy gamefi experience",
      fr: "une expérience immersive mélangeant gamefi et strategy",
    },
    imagePath: "/images/projects/cosmic-exodus.png",
    link: "https://cosmicexodus.xyz",
    job: ["development"],
  },
  "oscarmac-game-particles": {
    title: "particle rogue",
    description: {
      en: "simple javascript web game with metamask auth",
      fr: "jeu javascript avec authentification metamask",
    },
    imagePath: "/images/projects/oscarmac-game-particles.png",
    link: "https://oscarmacieira.github.io/GameParticle/",
    job: ["development"],
  },
  "oscarmac-coin-trainor": {
    title: "coin trainor",
    description: {
      en: "rpg game pokemon-like where you get to scale your crypto coins",
      fr: "rpg style pokemon où vous pouvez faire évoluer vos cryptos",
    },
    imagePath: "/images/projects/oscarmac-coin-trainor.png",
    link: "https://oscarmacieira.github.io/CoinTrainor/",
    job: ["development"],
  },
  "blockswan-botswan": {
    title: "botswan",
    description: {
      en: "javascript discord bot for community engagement",
      fr: "bot discord javascript pour l'engagement communautaire",
    },
    imagePath: "/images/projects/blockswan-botswan.png",
    link: "https://github.com/BlockSwan/botswan",
    job: ["development"],
  },
  "oscarmac-logofolio2": {
    title: "logofolio v2",
    description: {
      en: "collection of logos I designed and sold",
      fr: "collection de logos que j'ai conçus et vendus",
    },
    imagePath: "/images/projects/oscarmac-logofolio2.png",
    link: "https://www.behance.net/gallery/23885671/Logo-Folio-2",
    job: ["design"],
  },
  "oscarmac-logofolio1": {
    title: "logofolio v1",
    description: {
      en: "horrible list of the first logos i sold in high school",
      fr: "liste horrible des premiers logos que j'ai vendus au lycée",
    },
    imagePath: "/images/projects/oscarmac-logofolio1.png",
    link: "https://www.behance.net/gallery/17354603/Logo-Folio-1",
    job: ["design"],
  },
  "oscarmac-hunt-or-get-hunted": {
    title: "hunt or get hunted",
    description: {
      en: "illustration usable on different support (t-shirt, snapback, etc..)",
      fr: "illustration utilisable sur différents supports (t-shirt, casquette, etc..)",
    },
    imagePath: "/images/projects/oscarmac-hunt-or-get-hunted.png",
    link: "https://www.behance.net/gallery/28671007/Hunt-or-get-hunted-(Illustration)",
    job: ["design"],
  },
  "oscarmac-esport-mascots": {
    title: "esport mascots",
    description: {
      en: "collection of esport mascots i designed",
      fr: "collection de mascottes esport que j'ai conçues",
    },
    imagePath: "/images/projects/oscarmac-esport-mascots.png",
    link: "https://www.behance.net/gallery/17335269/Sports-Logos",
    job: ["design"],
  },
  "oscarmac-jersey-design": {
    title: "jersey design",
    description: {
      en: "esport jersey designs ready for print",
      fr: "designs de maillots esport prêts à imprimer",
    },
    imagePath: "/images/projects/oscarmac-jersey-design.png",
    link: "https://www.behance.net/gallery/22813281/Jersey-Design",
    job: ["design"],
  },
  "oscarmac-twitter-banners": {
    title: "twitter banners",
    description: {
      en: "twitter banners i designed for online customers",
      fr: "bannières twitter que j'ai conçues pour des clients en ligne",
    },
    imagePath: "/images/projects/oscarmac-twitter-banners.png",
    link: "https://www.behance.net/gallery/17270929/Header-Twitter",
    job: ["design"],
  },
  "oscarmac-oscardesign": {
    title: "oscar design",
    description: {
      en: "personal branding for my design business",
      fr: "image de marque personnelle pour mon entreprise de design",
    },
    imagePath: "/images/projects/oscarmac-oscardesign.jpeg",
    link: "https://www.behance.net/gallery/21497405/Personal-Branding",
    job: ["design"],
  },
  "oscarmac-rasta-skull": {
    title: "rasta skull",
    description: {
      en: "vectorized illustration usable on different support",
      fr: "illustration vectorisée utilisable sur différents supports",
    },
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
