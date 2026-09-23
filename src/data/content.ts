export interface ProductItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  image: string;
  origin: 'maroc' | 'afrique' | 'monde';
  details?: {
    varieties?: string;
    packaging?: string;
    certifications?: string;
    seasonality?: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  icon?: string;
  points: string[];
}

export const SITE_CONTENT = {
  brand: {
    name: "SALI COMMODITIES",
    registered: true,
    baseline: "From good origins to greater opportunities",
    description: "Société d’import-export spécialisée dans l’agro-alimentaire et les matières premières d'exception.",
    holding: "SALI Capital",
    phone: "+212 6 61 37 39 37",
    email: "contact@sali-commodities.com",
    address: "Casablanca, Maroc",
    linkedin: "https://www.linkedin.com"
  },
  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "Notre expertise", href: "#expertise" },
    { label: "Produits", href: "#produits" },
    { label: "Notre réseau", href: "#reseau" },
    { label: "À propos", href: "#engagement" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    tag: "IMPORT • EXPORT • AGRO-ALIMENTAIRE",
    titleLine1: "Des produits du terroir",
    titleLine2: "aux marchés",
    titleHighlight: "du monde",
    subtitle: "Nous connectons des producteurs d'exception aux opportunités internationales.",
    ctaPrimary: "Découvrir notre activité",
    ctaSecondary: "",
    indicators: ["01", "02", "03"],
    corridors: ["Maroc", "Afrique", "Monde"]
  },
  featureBoxes: [
    {
      id: "sourcing",
      title: "Sourcing responsable",
      subtitle: "Des producteurs de confiance",
      icon: "leaf"
    },
    {
      id: "reseau",
      title: "Réseau international",
      subtitle: "Une présence sur 4 continents",
      icon: "globe"
    },
    {
      id: "qualite",
      title: "Qualité & conformité",
      subtitle: "Des standards internationaux",
      icon: "award"
    },
    {
      id: "logistique",
      title: "Logistique maîtrisée",
      subtitle: "De la ferme au marché",
      icon: "truck"
    }
  ],
  productsSection: {
    tag: "NOS PRODUITS",
    title: "Des produits d'exception, aux quatre coins du monde",
    subtitle: "Du Maroc à l'Afrique de l'Ouest et à l'international, nous sélectionnons les meilleurs produits agro-alimentaires pour répondre aux exigences des marchés mondiaux.",
    viewAllBtn: "Voir tous les produits",
    categories: [
      { id: "all", label: "Tous les produits" },
      { id: "maroc", label: "Origine Maroc" },
      { id: "afrique", label: "Afrique de l'Ouest" },
      { id: "monde", label: "International" }
    ],
    items: [
      {
        id: "agrumes",
        name: "Agrumes",
        category: "Fruits frais - Maroc",
        desc: "Clémentines de Berkane, oranges Navel et Maroc Late parfumées, célèbres mondialement pour leur goût très sucré et leur fraîcheur incomparable.",
        image: "/images/agrumes.png",
        origin: "maroc"
      },
      {
        id: "tomates",
        name: "Tomates rondes & cerises",
        category: "Maraîchage - Maroc",
        desc: "Tomates cultivées sous serres modernes, rigoureusement sélectionnées et calibrées selon les exigences européennes les plus strictes.",
        image: "/images/tomates.png",
        origin: "maroc"
      },
      {
        id: "huile-olive",
        name: "Huile d'olive extra-vierge",
        category: "Terroir & Épicerie - Maroc",
        desc: "Huile vierge extra issue d'oliviers picholine marocaine, extraite à froid avec une acidité minimale pour une qualité gastronomique supérieure.",
        image: "/images/huile-olive.png",
        origin: "maroc"
      },
      {
        id: "myrtilles",
        name: "Myrtilles fraîches",
        category: "Fruits rouges - Maroc",
        desc: "Myrtilles croquantes récoltées à la main avec passion, conditionnées immédiatement pour préserver leur pruine naturelle et leur fermeté.",
        image: "/images/01_myrtilles.jpg",
        origin: "maroc"
      },
      {
        id: "framboises",
        name: "Framboises",
        category: "Fruits rouges - Maroc",
        desc: "Framboises de première qualité aux arômes intenses et à la tenue irréprochable, destinées aux centrales d'achat et à la haute gastronomie.",
        image: "/images/02_framboises.jpg",
        origin: "maroc"
      },
      {
        id: "poivrons",
        name: "Poivrons (Rouge, Jaune, Vert)",
        category: "Maraîchage - Maroc",
        desc: "Poivrons charnus et colorés, issus d'exploitations certifiées garantissant une traçabilité totale et une régularité de calibre parfaite.",
        image: "/images/03_poivrons_trio.jpg",
        origin: "maroc"
      },
      {
        id: "fruits-legumes-iqf",
        name: "Fruits & Légumes IQF",
        category: "Surgélation Individuelle Rapide",
        desc: "Gamme complète de fruits et légumes surgelés IQF conservant l'intégrité cellulaire, les saveurs originelles et toutes les qualités nutritionnelles.",
        image: "/images/04_fruits_legumes_IQF.jpg",
        origin: "maroc"
      },
      {
        id: "haricots-verts",
        name: "Haricots verts",
        category: "Maraîchage - Maroc",
        desc: "Haricots verts cueillis à la main à maturité parfaite, triés méticuleusement pour une tendreté et une finesse optimales.",
        image: "/images/05_haricots_verts.jpg",
        origin: "maroc"
      },
      {
        id: "avocats",
        name: "Avocats",
        category: "Fruits tropicaux - Afrique de l'Ouest",
        desc: "Avocats Hass et Fuerte de qualité supérieure, récoltés à maturité optimale pour une chair crémeuse et une excellente tenue au transport international.",
        image: "/images/09_avocats.jpg",
        origin: "afrique"
      },
      {
        id: "fruits-secs",
        name: "Fruits secs et Noix",
        category: "Épicerie fine & Snacking sain - Afrique de l'Ouest",
        desc: "Sélection premium d'amandes, noix de cajou et fruits à coque grillés ou bruts, répondant aux standards internationaux d'import-export.",
        image: "/images/06_fruits_secs.jpg",
        origin: "afrique"
      },
      {
        id: "cacao",
        name: "Dérivés de Cacao",
        category: "Matières premières - International",
        desc: "Fèves de cacao fermentées et séchées de premier choix, beurre et dérivés, approvisionnés auprès de coopératives équitables partenaires.",
        image: "/images/07_cacao.jpg",
        origin: "monde"
      },
      {
        id: "sardines",
        name: "Sardines en conserve",
        category: "Produits de la mer - Maroc",
        desc: "Sardines fraîches de l'Atlantique marocain préparées artisanalement à l'huile d'olive et aux aromates, réputées pour leur finesse gustative.",
        image: "/images/08_sardines_en_conserve.jpg",
        origin: "maroc"
      }
    ] as ProductItem[]
  },
  commitment: {
    tag: "NOTRE ENGAGEMENT",
    title: "Qualité, traçabilité et impact positif",
    desc: "Nous travaillons aux côtés de producteurs engagés, dans le respect des hommes, des ressources naturelles et des normes internationales.",
    featureCard: {
      image: "/images/agriculture-durable.png",
      title: "Une agriculture durable pour un avenir meilleur",
      subtitle: "Des filières responsables, du champ au consommateur"
    },
    pillars: [
      {
        icon: "leaf",
        title: "Bonnes pratiques agricoles",
        desc: "Encouragement des méthodes de culture raisonnée, réduction de l'empreinte environnementale et préservation de la biodiversité."
      },
      {
        icon: "shieldCheck",
        title: "Traçabilité intégrale",
        desc: "Identification précise de la parcelle, du producteur et des conditions d'acheminement jusqu'au client final."
      },
      {
        icon: "users",
        title: "Soutien aux producteurs locaux",
        desc: "Partenariats équitables de long terme garantissant une juste valorisation du travail agricole et le développement des communautés."
      },
      {
        icon: "globe",
        title: "Développement économique durable",
        desc: "Création de valeur partagée entre les terroirs d'origine et les marchés de distribution internationaux."
      }
    ]
  },
  network: {
    tag: "NOTRE RÉSEAU",
    title: "Des origines multiples, un même engagement",
    desc: "Grâce à notre réseau intégré de producteurs et de plateformes logistiques, nous connectons les filières d'excellence aux marchés mondiaux en Europe, aux États-Unis, en Égypte, en Afrique du Sud et au Moyen-Orient.",
    cta: "Découvrir notre réseau",
    mapImage: "/images/carte-monde-base.png",
    hubs: [
      {
        name: "Maroc (Hub Central)",
        role: "Plateforme pivot & sourcing agricole d'exception (Casablanca / Agadir)",
        flows: "Hub export vers l'Europe, les Amériques, l'Afrique et le Moyen-Orient",
        coordinates: { x: 462, y: 195 }
      },
      {
        name: "États-Unis",
        role: "Grand marché nord-américain, centrales d'achat & distributeurs spécialisés",
        flows: "Agrumes, Huile d'olive extra-vierge, Fruits IQF",
        coordinates: { x: 255, y: 170 }
      },
      {
        name: "Europe",
        role: "Marchés de consommation exigeants (France, Espagne, Royaume-Uni, Allemagne)",
        flows: "Liaisons maritimes et routières directes en flux tendu",
        coordinates: { x: 495, y: 140 }
      },
      {
        name: "Égypte",
        role: "Bassin de production méditerranéen & carrefour commercial stratégique",
        flows: "Agrumes, légumes primeurs et partenariats logistiques",
        coordinates: { x: 585, y: 198 }
      },
      {
        name: "Afrique du Sud",
        role: "Partenariats Sud-Sud & complémentarité de contre-saison",
        flows: "Échanges bilatéraux de fruits et produits agroalimentaires",
        coordinates: { x: 545, y: 395 }
      },
      {
        name: "Afrique de l'Ouest",
        role: "Bassin de production tropicale de haute qualité (Sénégal, Côte d'Ivoire)",
        flows: "Cacao, fruits tropicaux, anacarde et denrées vivrières",
        coordinates: { x: 435, y: 260 }
      },
      {
        name: "Moyen-Orient",
        role: "Marchés d'excellence à forte valeur ajoutée (Émirats Arabes Unis, Arabie Saoudite)",
        flows: "Fret aérien et maritime régulier pour produits gastronomiques",
        coordinates: { x: 645, y: 215 }
      }
    ]
  },
  services: [
    {
      id: "sourcing",
      title: "Sourcing & approvisionnement",
      icon: "layers",
      points: [
        "Identification et qualification de producteurs et fournisseurs locaux",
        "Création de centrales d'achat locales pour distributeurs étrangers",
        "Constitution de réseaux de producteurs par filière ou région",
        "Négociation des conditions d'achat et des contrats fournisseurs",
        "Consolidation de volumes entre plusieurs petits producteurs"
      ]
    },
    {
      id: "commercial",
      title: "Développement commercial & mise en relation",
      icon: "users",
      points: [
        "Mise en relation entre producteurs locaux et acheteurs internationaux",
        "Représentation commerciale de producteurs locaux à l'export",
        "Prospection et qualification de clients à l'étranger",
        "Participation et représentation sur des salons internationaux",
        "Mise en relation avec des importateurs, grossistes et distributeurs"
      ]
    },
    {
      id: "logistics",
      title: "Logistique & transport",
      icon: "truck",
      points: [
        "Mise en relation avec des sociétés de fret (maritime, aérien, routier)",
        "Coordination logistique de bout en bout (de la ferme au port)",
        "Gestion des transitaires et des opérations douanières",
        "Optimisation des coûts de transport et des routes logistiques",
        "Gestion des incoterms et des contrats de transport"
      ]
    },
    {
      id: "quality",
      title: "Qualité & conformité",
      icon: "shieldCheck",
      points: [
        "Mise en relation avec des sociétés de contrôle qualité et d'inspection",
        "Accompagnement à l'obtention de certifications (GlobalGAP, Bio, Halal, ISO)",
        "Vérification de la conformité aux normes des marchés cibles",
        "Gestion des analyses et tests laboratoire accrédités",
        "Accompagnement rigoureux aux audits fournisseurs"
      ]
    },
    {
      id: "storage",
      title: "Stockage, conditionnement & emballage",
      icon: "package",
      points: [
        "Mise en relation avec des entités de stockage et chambres froides",
        "Mise en relation avec des unités de conditionnement et d'emballage",
        "Conception et sourcing d'emballages adaptés aux marchés cibles",
        "Gestion du tri, calibrage et préparation des produits à l'export",
        "Optimisation des formats d'emballage selon les exigences acheteurs"
      ]
    },
    {
      id: "brand",
      title: "Marque blanche & packaging",
      icon: "award",
      points: [
        "Création de marques en white label sur des produits ciblés",
        "Développement de marques propres à destination de marchés spécifiques",
        "Conseil en positionnement produit et packaging selon le marché",
        "Développement de gammes sous marque de distributeur (MDD)",
        "Protection de marques et dépôts à l'international"
      ]
    },
    {
      id: "admin",
      title: "Administratif, juridique & financier",
      icon: "scale",
      points: [
        "Accompagnement à la constitution des dossiers complets d'export",
        "Gestion documentaire (certificats d'origine, phytosanitaires, douanes)",
        "Mise en relation avec des banques et organismes de financement",
        "Structuration de contrats commerciaux import/export sécurisés",
        "Accompagnement sur les mécanismes de paiement internationaux (LC, CAD)",
        "Couverture des risques de change"
      ]
    },
    {
      id: "consulting",
      title: "Conseil & stratégie export",
      icon: "trendingUp",
      points: [
        "Étude de marché et analyse de la demande sur les marchés cibles",
        "Conseil en stratégie d'entrée sur un nouveau marché",
        "Veille concurrentielle et analyse tarifaire approfondie",
        "Conseil en diversification de gamme selon les opportunités export",
        "Accompagnement à la mise en conformité réglementaire par pays"
      ]
    },
    {
      id: "digital",
      title: "Services digitaux & traçabilité",
      icon: "checkCircle2",
      points: [
        "Mise en place de plateformes de mise en relation B2B",
        "Création de catalogues produits digitaux interactifs pour acheteurs",
        "Référencement sur des marketplaces B2B internationales",
        "Outils de traçabilité temps réel et suivi précis de commandes"
      ]
    }
  ],
  stats: [
    { value: "+ 50", label: "Produits référencés" },
    { value: "100 %", label: "Traçabilité" },
    { value: "0", label: "Compromis sur la qualité" }
  ],
  contactCta: {
    tag: "TRAVAILLONS ENSEMBLE",
    title: "Vous avez un projet d'import-export ?",
    subtitle: "Notre équipe est à votre écoute pour identifier les meilleures opportunités.",
    buttonText: "Nous contacter"
  },
  footer: {
    copyright: "© 2026 SALI Commodities. Tous droits réservés.",
    slogan: "Conçu pour un commerce plus durable",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "Conçu pour un commerce plus durable", href: "#" }
    ]
  }
};


