export default {
  "hero-section": {
    title: "bonjour ami",
    description: "moi, un ingénieur {span} qui adore créer des trucs cool",
    descriptionSpan: ["fullstack", "web3", "blockchain", "frontend", "backend"],
    subtext:
      "je construis la prochaine génération d'applications web3. des smart contracts aux interfaces utilisateurs, je concrétise vos idées innovantes",
    cta: "> contactez-moi",
  },
  "stats-section": {
    title: "quelques chiffres",
    items: [
      {
        label: "années d'expérience à livrer des solutions innovantes",
        value: "5",
        suffix: "+",
        ctaText: "voir mon parcours",
        ctaLink: "/xp?tab=professional",
      },
      {
        label: "clients satisfaits partout dans le monde",
        value: "20",
        suffix: "+",
        ctaText: "quelques exemples",
        ctaLink: "/portfolio",
      },
      {
        label: "abandons universitaires, parce qu'honnêtement c'est ennuyeux",
        value: "2",
        ctaText: "voir ça",
        ctaLink: "/xp?tab=academic",
      },
      {
        label: "victoire à un hackathon blockchain dans la poche",
        value: "1",
        suffix: "/1",
        ctaText: "voir la preuve",
        ctaLink: "https://devpost.com/software/blockswanfamily",
      },
    ],
  },
  "xp-section": {
    tabs: ["pro", "perso", "académique"],
    title: "expérience professionnelle",
    "items-pro": [
      {
        title: "ingénieur fullstack",
        company: "fyde labs",
        date: "2024 - présent",
        description:
          "• direction du développement d'applications utilisateur interagissant avec des smart contracts, réduisant la taille des bundles de plus de 40% et améliorant le cls de 25%, optimisant la stabilité visuelle et l'expérience utilisateur.\n\n• maintenance, optimisation et ajout de nouvelles fonctionnalités liées au protocole utilisant wagmi et viem, supportant avec succès des pics de trafic dépassant 1000% pendant l'événement de génération de tokens (tge) et gérant plus de 50 000 visites mensuelles.\n\n• création d'un jeu de simulation de trading bullrun, aboutissant à plus de 300 comptes blockchain créés via un système d'authentification web3 fluide et cumulant plus de 5 000 parties lancées.",
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
        date: "2023 - 2024",
        description:
          "• direction du développement full-stack du concept au déploiement au sein d'une équipe, implémentant un flux d'intégration client qui a augmenté les taux de création de comptes et amélioré l'expérience utilisateur.\n\n• collaboration sur les processus de migration postgresql pour améliorer les fonctionnalités frontend, augmentant la productivité de l'équipe crm de 70%.\n\n• contribution aux composants graphql, à un plugin strapi personnalisé et à une api nestjs pour une gestion efficace des données.\n\n• développement et optimisation de fonctionnalités pour les applications client saas et les interfaces mobiles utilisant next.js, assurant l'évolutivité et un engagement élevé des utilisateurs dans un environnement d'équipe collaboratif.",
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
  },
  footer: {
    calendar: "contactez-moi >",
    linkedin: "stalkez mon linkedin",
    x: "retweetez-moi sur X",
    github: "forkez mon github",
    behance: "admirez mon behance",
    email: "envoyez-moi un mail",
  },
  "cta-section": {
    title: "révolutionnez vos projets web3",
    "1": {
      title: "intégration blockchain",
      description:
        "connectez facilement vos dapps avec de multiples réseaux blockchain.",
    },
    "2": {
      title: "développement de smart contracts",
      description:
        "créez des smart contracts sécurisés et efficaces pour vos applications décentralisées.",
    },
    "3": {
      title: "solutions defi",
      description:
        "construisez des applications de finance décentralisée robustes avec des technologies de pointe.",
    },
  },
} as const;
