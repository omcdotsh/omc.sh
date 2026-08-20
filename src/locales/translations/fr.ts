import { routes } from "@/lib/routes";

export default {
  nav: {
    index: "index",
    work: "work",
    xp: "expérience",
    notes: "notes",
    book: "lancer un projet",
  },
  "hero-section": {
    eyebrow: "un nom · tous les mediums · possibilités infinies",
    role: "Produits crypto de bout en bout — du protocole à l'interface, jusqu'au ship.",
    subtext:
      "Des builds menés par le design, avec une vraie profondeur eng. Produit, systèmes et delivery comme un seul ownership.",
    cta: "lancer un projet",
    secondaryCta: "expérience",
    tagDesign: "design",
    tagDev: "développement",
    tagStrategy: "stratégie",
    frameCaption: "o · m · c · — fenêtres · masques · crops · focus",
    available: "disponible",
  },
  "stats-section": {
    title: "résultats",
    items: [
      {
        label: "années à livrer des systèmes en production, web3 et produit",
        value: "5",
        suffix: "+",
        ctaText: "parcours",
        ctaLink: `${routes.xp}?tab=professional`,
      },
      {
        label: "TVL pic sur un protocole DeFi mené de bout en bout",
        value: "230",
        suffix: "M",
        ctaText: "expérience",
        ctaLink: `${routes.xp}?tab=professional`,
      },
      {
        label: "protocoles et produits livrés sous de vraies contraintes",
        value: "4",
        suffix: "+",
        ctaText: "work",
        ctaLink: routes.portfolio,
      },
    ],
  },
  "xp-section": {
    tabs: ["pro", "perso", "académique"],
    title: "expérience professionnelle",
    "items-pro": [
      {
        title: "lead développeur",
        company: "neutrl",
        date: "août 2025 - présent",
        description:
          "• direction de l'architecture et de la livraison d'un protocole DeFi ayant atteint 230 M$ de TVL au pic, avec des contributions en Solidity, backend, infrastructure de données et frontend, tout en portant les intégrations protocole et l'architecture produit.\n\n• conception et livraison des fonctionnalités cœur du protocole : produits structurés, staking, engagements de lock, points, referrals, distribution de rewards et Merkle claims — écriture de contrats Solidity, intégration de protocoles audités, et traduction de primitives financières complexes en expériences utilisateur intuitives.\n\n• construction et maintenance de la stack protocole : intégrations smart contracts, indexeurs, APIs GraphQL, pipelines analytics, SDKs et applications frontend, pour le suivi de portefeuille en temps réel, le calcul d'incentives et les insights protocole.\n\n• collaboration directe avec les fondateurs et ingénieurs pour passer du concept à la production, en livrant rapidement des features critiques gérant des centaines de millions de dollars d'actifs on-chain.",
        skills: [
          "typescript",
          "react",
          "next.js",
          "graphql",
          "wagmi",
          "viem",
          "ponder",
          "envio",
          "solidity",
          "foundry",
          "sdks",
        ],
      },
      {
        title: "ingénieur logiciel",
        company: "morpho",
        date: "déc 2024 - août 2025",
        description:
          "• livraison de composants majeurs de Morpho App V2 : infrastructure de lending, borrowing et gestion de positions pour onboarder et migrer du capital à travers les protocoles DeFi.\n\n• conception et lancement de flux de migration inter-protocoles via Morpho Bundler v3, permettant de migrer des positions de lending et borrowing depuis Aave v2/v3 et Compound v2/v3 vers Morpho.\n\n• développement de workflows de refinancement pour rééquilibrer efficacement les positions de dette entre marchés Morpho, en optimisant coûts d'emprunt et utilisation du collatéral.\n\n• mise en place des simulations de transactions, de l'infrastructure de referral et d'une couche hybride SSR/données on-chain, pour une visualisation de portefeuille fiable en temps réel et des previews d'exécution.",
        skills: [
          "typescript",
          "react",
          "next.js",
          "graphql",
          "wagmi",
          "viem",
          "blue-sdk",
          "blue-sdk-viem",
          "blue-sdk-wagmi",
          "simulation-sdk",
          "bundler-sdk-viem",
          "ssr",
          "fuul",
          "sdk",
          "emotion",
          "reown",
        ],
      },
      {
        title: "ingénieur fullstack",
        company: "fyde",
        date: "fév 2024 - déc 2024",
        description:
          "• direction du développement frontend d'un protocole DeFi, livrant l'infrastructure utilisateur pour le staking, les rewards, l'onboarding et les interactions smart contracts.\n\n• architecture et optimisation de systèmes frontend haute performance : réduction de la taille des bundles de 40%+ et amélioration du CLS de 25%, renforçant fiabilité et expérience utilisateur.\n\n• construction des intégrations protocole et de l'infrastructure wallet avec Wagmi, Viem et account abstraction, supportant une croissance de trafic x10 pendant les TGE, 50 000+ visites mensuelles, et la création de 300+ smart accounts via une plateforme de simulation de trading blockchain.",
        skills: [
          "typescript",
          "react",
          "next.js",
          "graphql",
          "postgresql",
          "aws",
          "wagmi",
          "viem",
          "privy",
          "rainbowkit",
          "telegram api",
          "réseaux evm",
          "web3 authentification",
        ],
      },
      {
        title: "ingénieur fullstack",
        company: "pimster",
        date: "juin 2023 - fév 2024",
        description:
          "• développement et livraison de features full-stack sur les applications client et entreprise, contribuant à l'onboarding, la gestion de contenu et les workflows d'engagement utilisés par 30+ marques enterprise.\n\n• contribution à une migration PostgreSQL à grande échelle et à la modernisation de la plateforme, améliorant les outils internes et augmentant la productivité de l'équipe CRM de 70%.\n\n• construction de couches applicatives scalables avec Next.js, GraphQL, NestJS et Strapi, permettant une itération produit rapide sur le web, le mobile et les plateformes enterprise.",
        skills: [
          "typescript",
          "react",
          "next.js",
          "nest.js",
          "strapi",
          "postgresql",
          "graphql",
          "aws",
          "migration de base de données",
          "design réactif",
          "développement d'applications d'entreprise",
        ],
      },
      {
        title: "web3 couteau-suisse",
        company: "cosmic exodus",
        date: "2022",
        description:
          "• direction de l'ingénierie tokenomics et de la planification financière pour la viabilité et la durabilité du projet, alignant les incitations économiques avec l'engagement des utilisateurs.\n\n• développement des fonctionnalités frontend principales de la dapp pour l'échange décentralisé (dex) utilisant moralis v1, react et etherjs.\n\n• rôle clé dans la prospection des partenaires et les relations avec les investisseurs pendant la phase pré-seed, contribuant à une levée de fonds réussie de 70k$.",
        skills: [
          "tokenomics",
          "planification financière",
          "relations investisseurs",
          "développement de dapp",
          "react",
          "mongodb",
          "express",
          "typescript",
          "moralis",
          "wagmi",
        ],
      },
      {
        title: "développeur web3",
        company: "rainbows dao",
        date: "2022",
        description:
          "• mise à jour et déploiement de smart contracts sur polygon, assurant des interactions sécurisées et efficaces pour le mvp avec etherjs.\n\n• développement de l'interface dapp et du système backend avec moralis v1, créant une expérience utilisateur cohérente et permettant des interactions blockchain fluides.\n\n• livraison d'un mvp entièrement fonctionnel, intégrant des composants frontend react et backend mongodb pour accélérer les tests produits et le feedback.",
        skills: [
          "développement de smart contract",
          "développement de dapp",
          "infrastructure DAO",
          "react",
          "mongodb",
          "express",
          "typescript",
          "moralis",
          "wagmi",
        ],
      },
      {
        title: "testeur logiciel",
        company: "cajoo",
        date: "déc 2021 - jan 2022",
        description:
          "• manipulation de grands ensembles de données pour l'assurance qualité logicielle, assurant une couverture complète des scénarios de test et des cas limites.\n\n• préparation et exécution de cas de test et de plans de test logiciels, documentant méticuleusement chaque étape pour garantir la reproductibilité et un test approfondi.\n\n• documentation précise des résultats des tests et signalement des défauts, fournissant des informations détaillées pour faciliter la correction efficace des bugs et améliorer la qualité globale du logiciel.",
        skills: [
          "test logiciel",
          "manipulation de données",
          "documentation",
          "rapport de défauts",
        ],
      },
      {
        title: "opérateur de contenu espagne",
        company: "manomano",
        date: "nov 2021 - déc 2021",
        description:
          "• maintien de la cohérence de la marque dans les fiches produits, assurant que tout le contenu respecte les directives de l'entreprise et représente efficacement l'identité de la marque.\n\n• vérification de l'exactitude et de la pertinence des descriptions des produits en espagnol pour le marché espagnol, adaptant le contenu aux préférences locales et aux nuances culturelles pour améliorer l'engagement des utilisateurs et les taux de conversion.",
        skills: [
          "extraction de données",
          "normalisation de données",
          "gestion de contenu",
        ],
      },
      {
        title: "responsable de plateforme",
        company: "henri wartner group",
        date: "mai 2020 - juil 2020",
        description:
          "• soutien au développement commercial pendant la crise du COVID, identifiant les opportunités et adaptant les stratégies pour répondre aux demandes d'un marché en constante évolution.\n\n• création de l'identité de marque et mise en place d'une plateforme de vente en ligne pour la fabrication et la distribution de masques, développant un langage visuel cohérent et une interface intuitive pour stimuler les ventes et établir une présence sur le marché.",
        skills: [
          "développement commercial",
          "création d'identité de marque",
          "analyse de marché",
          "mise en place de plateforme e-commerce",
          "étude de prix",
        ],
      },
      {
        title: "assistant chef de projet",
        company: "tbwa groupe",
        date: "mai 2018 - juil 2018",
        description:
          "• développement d'analyses comparatives de la concurrence, analysant les tendances du marché et les stratégies des concurrents pour éclairer la prise de décision stratégique et identifier les axes d'amélioration.\n\n• structuration des hiérarchies de marques, organisant et catégorisant les éléments de marque pour assurer une communication claire et une représentation cohérente à travers différents canaux et points de contact.",
        skills: [
          "analyse concurrentielle",
          "analyse de données",
          "gestion de marque",
          "planification média",
          "gestion de projet",
          "génération de leads média",
        ],
      },
      {
        title: "assistant graphiste",
        company: "jésus et gabriel",
        date: "juin 2015",
        description:
          "• première approche du monde du travail dans une agence de marketing et communication, assistant sur divers projets de design et apprenant les meilleures pratiques de l'industrie.\n\n• contribution à la création d'actifs visuels pour les campagnes clients, développant des compétences en logiciels de design graphique et comprenant l'importance de la cohérence de marque dans les supports marketing.",
        skills: [
          "design graphique",
          "marketing",
          "communication",
          "adobe creative suite",
        ],
      },
    ],
    "items-perso": [
      {
        title: "ingénieur fullstack",
        company: "ultra tech alliance",
        date: "2023",
        description:
          "• création d'une suite d'outils de développement open-source et de documentation pour la blockchain Ultra, incluant un client JavaScript, un kit UI React, et un SDK React.\n\n• développement d'une place de marché NFT utilisant ces outils, assurant une expérience cohérente et conviviale.\n\n• atteinte de 200 téléchargements hebdomadaires sur npm, stimulant l'engagement et l'adoption dans la communauté des développeurs.",
        skills: [
          "typescript",
          "react",
          "lerna",
          "ultra wallet",
          "C++",
          "eosjs",
          "packages npm",
          "développement blockchain",
          "développement de marketplace",
        ],
      },
      {
        title: "fondateur",
        company: "blockswan",
        date: "2021 - présent",
        description:
          "• développement d'une application de gestion de factures pour freelances, simplifiant la facturation et le suivi des paiements pour améliorer la productivité.\n\n• création d'une plateforme saas avec un référencement optimisé, augmentant le trafic de 60%, atteignant plus de 50 utilisateurs mensuels et générant 84$ de revenus mensuels récurrents.\n\n• conception, test et déploiement de smart contracts pour une place de marché de services numériques, obtenant une 3ème place parmi 3 388 projets lors du hackathon polygon buidl it avec un prix de 5k usdc et une subvention de 5k usdc.",
        skills: [
          "nodejs",
          "express",
          "ipfs",
          "solidity",
          "hardhat",
          "foundry",
          "ponder",
          "react",
          "design ui/ux",
          "marketing",
          "architecture de plateforme",
          "implémentation de smart contract",
        ],
      },
      {
        title: "designer freelance",
        company: "oscar design",
        date: "2014 - présent",
        description:
          "• création et vente de designs graphiques pour divers clients, spécialisé dans la création de logos, de bannières et la personnalisation de maillots pour les équipes e-sports.\n\n• développement et maintenance de sites web pour petites entreprises et startups, axé sur le design responsive et l'optimisation de l'expérience utilisateur.\n\n• fourniture de services de marketing sur les réseaux sociaux, création de contenu engageant et gestion de campagnes pour des clients dans les industries de la crypto et de l'e-sport.",
        skills: [
          "design graphique",
          "développement web",
          "création de logo",
          "conception de bannière",
          "conception de maillot",
          "marketing sur les réseaux sociaux",
          "e-sports",
          "crypto",
        ],
      },
      {
        title: "créateur de marque",
        company: "savaged",
        date: "2014",
        description:
          "• conceptualisation et design d'une petite collection de vêtements, axée sur l'esthétique streetwear urbaine et incorporant des éléments graphiques uniques.\n\n• gestion du processus de production depuis les designs initiaux jusqu'aux produits finaux, collaborant avec des fabricants locaux pour assurer la qualité et la livraison dans les délais.\n\n• développement et exécution d'une stratégie de distribution locale, incluant la mise en place de boutiques éphémères et le partenariat avec de petites boutiques pour présenter et vendre la collection.",
        skills: [
          "développement de marque",
          "conception de vêtements",
          "gestion de production",
          "distribution locale",
          "marketing",
          "promotion",
        ],
      },
    ],
    "items-academic": [
      {
        title: "sciences informatiques",
        company: "42",
        date: "sept 2022",
        description:
          "• engagement dans une éducation intensive en informatique et technologie de l'information à travers un modèle d'apprentissage par les pairs unique.\n\n• développement de solides compétences en résolution de problèmes et en adaptabilité grâce à des projets pratiques et des défis de codage collaboratifs.",
        skills: [
          "apprentissage par les pairs",
          "sciences informatiques",
          "technologies de l'information",
          "programmation",
          "algorithmes",
          "développement logiciel",
        ],
      },
      {
        title: "économie & gestion d'entreprise",
        company: "escp",
        date: "sept 2020 - juil 2021",
        description:
          "• achèvement de la première année d'un programme de bachelor sur le campus de Londres, acquérant une exposition aux pratiques commerciales internationales.\n\n• étude des concepts fondamentaux du business et développement d'une perspective globale à travers l'interaction avec un corps étudiant diversifié.",
        skills: [
          "économie",
          "gestion d'entreprise",
          "affaires internationales",
          "finance",
          "marketing",
        ],
      },
      {
        title: "économie & gestion d'entreprise",
        company: "paris dauphine | uc3m",
        date: "sept 2017 - juil 2019",
        description:
          "• achèvement des deux premières années d'un programme de licence à Madrid, avec des cours dispensés en espagnol et en anglais.\n\n• participation à un programme hautement sélectif avec seulement 40 étudiants admis, favorisant un environnement d'apprentissage compétitif et collaboratif.",
        skills: [
          "économie",
          "gestion d'entreprise",
          "espagnol",
          "anglais",
          "études internationales",
        ],
      },
      {
        title: "cours d'été",
        company: "université de georgetown",
        date: "juil - sept 2017",
        description:
          "• immersion dans des cours intensifs couvrant la psychologie, la sociologie, le droit du sport et les sciences informatiques dans une université américaine de premier rang.\n\n• acquisition d'une précieuse exposition à la culture académique américaine et développement de compétences en communication interculturelle dans un cadre de campus diversifié.",
        skills: [
          "psychologie",
          "sociologie",
          "droit du sport",
          "sciences informatiques",
          "immersion académique",
        ],
      },
      {
        title: "école et lycée",
        company: "saint-jean de passy & assomption de lubeck",
        date: "sept 2007 - août 2017",
        description:
          "• achèvement de l'éducation primaire et secondaire dans des institutions parisiennes prestigieuses, construisant une solide base académique.\n\n• développement de compétences en pensée critique et en gestion du temps à travers des cours rigoureux et des activités extrascolaires.",
        skills: [
          "système éducatif français",
          "études scientifiques",
          "pensée critique",
          "gestion du temps",
        ],
      },
    ],
    "items-achievement": [
      {
        title: "top 3 hackathon polygon buidlit 2022",
        company: "polygon",
        date: "septembre 2021",
        description: "réussite en programmation de dapp web3",
      },
      {
        title: "certificat de programmation de dapp web3",
        company: "moralis",
        date: "mai 2022",
        description: "certification en développement web3",
      },
      {
        title: "baccalauréat scientifique",
        date: "2017",
        description: "obtenu avec mention (option maths)",
      },
      {
        title: "ielts (7.0)",
        date: "2017",
        description:
          "écoute (6.5) - lecture (8.0) - écriture (5.5) - expression orale (7.0)",
      },
      {
        title: "certificat google analytics",
        company: "google",
        date: "2020",
        description: "certification en analyse web",
      },
    ],
    "items-about": [
      {
        title: "français natif",
      },
      {
        title: "anglais courant",
      },
      {
        title: "espagnol maîtrisé",
      },
      {
        title: "autonome",
      },
      {
        title: "curieux",
      },
      {
        title: "empathique",
      },
      {
        title: "esprit d'équipe",
      },
      {
        title: "football",
      },
      {
        title: "karaté",
      },
      {
        title: "gaming",
      },
      {
        title: "crypto",
      },
    ],
  },
  "portfolio-section": {
    tabs: ["développeur", "designer"],
    kicker: "travaux sélectionnés",
    title: "Chaque projet, son propre monde.",
    description:
      "Interfaces et systèmes construits sous de vraies contraintes — capital, utilisateurs, temps.",
  },
  "xp-page": {
    kicker: "expérience",
    title: "Oscar — le parcours.",
    description:
      "Lead engineer et product builder. Morpho, Neutrl, et les systèmes entre les deux.",
  },
  "blog-page": {
    kicker: "notes",
    title: "Penser en public.",
    description: "Écrits sur les systèmes, le produit, et builder à découvert.",
  },
  footer: {
    title: "Construisons quelque chose qui compte",
    subtext:
      "Brief projet ou conversation recrutement — même porte, prochain pas clair.",
    calendar: "lancer un projet",
    hire: "voir l'expérience",
    tagline: "identité stable · expression fluide",
    linkedin: "linkedin",
    x: "x",
    github: "github",
    behance: "behance",
    email: "email",
  },
  "cta-section": {
    eyebrow: "comment ça ship",
    title: "Du sens, sans bruit.",
    subtext:
      "Prendre le chemin difficile du design à la production — contrats, data, APIs, et l'UI à laquelle on confie de l'argent.",
    cta: "lancer un projet",
    secondaryCta: "voir l'expérience",
    "1": {
      title: "Ownership de bout en bout",
      description:
        "De l'architecture au ship. Solidity, indexeurs, GraphQL, SDKs et UI produit comme un seul système.",
    },
    "2": {
      title: "Fiabilité sous capital",
      description:
        "Simulations, migrations et chemins d'exécution pensés pour du vrai TVL — pas des démos.",
    },
    "3": {
      title: "Des interfaces qui expliquent l'argent",
      description:
        "Des primitives financières complexes traduites en expériences produit claires et rapides.",
    },
  },
  "work-with-section": {
    title: "équipes sélectionnées",
    headline: "Là où le travail devait être exact.",
    subtext: "Protocoles et produits livrés sous de vraies contraintes.",
    seeWork: "voir tout le work",
    caps: [
      "design",
      "développement",
      "stratégie",
      "motion",
      "solidity",
      "produit",
      "indexeurs",
      "brand",
    ],
  },
  "blog-section": {
    categories: {
      all: "tout",
    },
    back: "retour au blog",
  },
} as const;
