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
  points: string[];
}

export const SITE_CONTENT = {
  brand: {
    name: "SALI COMMODITIES",
    registered: true,
    baseline: "From good origins to greater opportunities",
    description: "Société d’import-export spécialisée dans l’agro-alimentaire et les matières premières d'exception.",
    holding: "SALI Capital",
    phone: "+212 6 61 37 39 57",
    email: "hd@sali-capital.com",
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
    tag: "IMPORT • EXPORT • AGRI-ALIMENTAIRE",
    titleLine1: "Des produits du terroir",
    titleLine2: "aux marchés",
    titleHighlight: "du monde",
    subtitle: "Nous connectons des producteurs d'exception aux opportunités internationales.",
    ctaPrimary: "Découvrir notre activité",
    ctaSecondary: "Voir la vidéo",
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
      subtitle: "Une présence sur 3 continents",
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
    subtitle: "Du Maroc à l'Afrique de l'Ouest, nous sélectionnons les meilleurs produits agricoles pour répondre aux attentes de nos partenaires internationaux.",
    viewAllBtn: "Voir tous les produits",
    categories: [
      { id: "all", label: "Tous les produits" },
      { id: "maroc", label: "Origine Maroc" },
      { id: "afrique", label: "Afrique de l'Ouest" }
    ],
    items: [
      {
        id: "agrumes",
        name: "Agrumes du Maroc",
        category: "Fruits frais - Maroc",
        desc: "Clémentines de Berkane, oranges Navel et Maroc Late parfumées, célèbres mondialement pour leur goût très sucré.",
        image: "/images/agrumes.png",
        origin: "maroc",
        details: {
          varieties: "Clémentines Berkane / Nadorcott, Oranges Navel, Maroc Late",
          packaging: "Plateaux carton alvéolés 10kg, 15kg, colis bois personnalisés",
          certifications: "GlobalG.A.P, BRC, IFS, SMETA",
          seasonality: "Octobre à Juin selon variétés"
        }
      },
      {
        id: "tomates",
        name: "Tomates rondes & cerises",
        category: "Maraîchage - Maroc",
        desc: "Tomates cultivées sous serres modernes, sélectionnées et calibrées selon les exigences européennes les plus strictes.",
        image: "/images/tomates.png",
        origin: "maroc",
        details: {
          varieties: "Tomates grappes, cerises allongées, rondes lisses",
          packaging: "Barquettes 250g/500g, plateaux 5kg/6kg",
          certifications: "GlobalG.A.P, Grasp, HACCP",
          seasonality: "Toute l'année (haute saison Novembre à Mai)"
        }
      },
      {
        id: "fruits-rouges",
        name: "Fruits rouges",
        category: "Fruits frais - Maroc",
        desc: "Sélection premium de framboises, myrtilles et fraises récoltées à la main avec passion dans les meilleures exploitations.",
        image: "/images/fruits-rouges.png",
        origin: "maroc",
        details: {
          varieties: "Framboises Adelita/Kwanza, Myrtilles Ventura, Fraises Fortuna",
          packaging: "Raviers 125g, 250g sous atmosphère protectrice",
          certifications: "GlobalG.A.P, Tesco Nurture, IFS Food",
          seasonality: "Décembre à Mai"
        }
      },
      {
        id: "huile-olive",
        name: "Huile d'olive extra-vierge",
        category: "Terroir - Maroc",
        desc: "Huile vierge extra d'oliviers picholine marocaine au goût intense, extraite à froid et récoltée traditionnellement.",
        image: "/images/huile-olive.png",
        origin: "maroc",
        details: {
          varieties: "Picholine marocaine 100% pure, première pression à froid",
          packaging: "Bouteilles verre foncé 250ml/500ml/750ml/1L, bidons métal 5L, vrac IBC 1000L",
          certifications: "Bio / Organic, Halal, ISO 22000, AOP",
          seasonality: "Récolte Novembre à Janvier, approvisionnement continu"
        }
      },
      {
        id: "cajou",
        name: "Noix de cajou Afrique de l'Ouest",
        category: "Produits d'Afrique",
        desc: "Noix de cajou brutes et décortiquées de haute qualité, sélectionnées minutieusement auprès de nos coopératives partenaires.",
        image: "/images/cajou.png",
        origin: "afrique",
        details: {
          varieties: "Noix brutes RCN (KOR 48-52), Amandes blanches W180, W240, W320",
          packaging: "Sacs polypropylène 80kg (brutes), cartons sous vide 2x25 lbs (amandes)",
          certifications: "Fair Trade / Commerce Équitable, ISO 9001, Phyto",
          seasonality: "Février à Juillet"
        }
      },
      {
        id: "avocat",
        name: "Avocats du Maroc",
        category: "Maraîchage - Maroc",
        desc: "Avocats Hass crémeux de premier choix récoltés avec professionnalisme et exportés sous contrôle thermique rigoureux.",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800",
        origin: "maroc",
        details: {
          varieties: "Hass, Fuerte, Zutano",
          packaging: "Cartons 4kg (calibres 12 à 24), caisses réutilisables",
          certifications: "GlobalG.A.P, Sedex",
          seasonality: "Novembre à Avril"
        }
      },
      {
        id: "mangue-fraiche",
        name: "Mangues fraîches",
        category: "Produits d'Afrique",
        desc: "Mangues d'exception récoltées gorgées de soleil pour garantir un arôme et un parfum hors du commun.",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
        origin: "afrique",
        details: {
          varieties: "Kent, Amélie, Keitt",
          packaging: "Cartons 4kg fret aérien, plateaux maritimes 5-6kg",
          certifications: "GlobalG.A.P, Bio",
          seasonality: "Mars à Juillet"
        }
      },
      {
        id: "mangue-sechee",
        name: "Mangues séchées",
        category: "Produits d'Afrique / snacking",
        desc: "Tranches moelleuses séchées sans sucres ajoutés ni sulfites pour un en-cas énergétique sain et premium.",
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800",
        origin: "afrique",
        details: {
          varieties: "Mangue Brooks & Kent sans conservateurs",
          packaging: "Sachets doypack 100g/250g/1kg, cartons vrac 5kg",
          certifications: "Bio, HACCP",
          seasonality: "Disponible toute l'année"
        }
      },
      {
        id: "puree-mangue",
        name: "Purée de mangue",
        category: "Produits d'Afrique / industrie",
        desc: "Purée fluide 100% naturelle extraite à maturité optimale pour conserver toute la rondeur aromatique du fruit.",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800",
        origin: "afrique",
        details: {
          varieties: "Mangue Kent purifiée, Brix 14-16",
          packaging: "Fûts aseptiques 200kg, poches bag-in-box 20kg",
          certifications: "FSSC 22000, Halal, Kasher",
          seasonality: "Disponible toute l'année"
        }
      },
      {
        id: "oignon-deshydrate",
        name: "Poudre d'oignon déshydraté",
        category: "Produits d'Afrique / ingrédients",
        desc: "Oignons séchés et finement broyés, extrêmement aromatiques pour l'assaisonnement et l'industrie agroalimentaire.",
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=800",
        origin: "afrique",
        details: {
          varieties: "Oignon blanc et rouge déshydraté en semoule ou poudre",
          packaging: "Sacs multicouches étanches 25kg",
          certifications: "ISO 22000, HACCP",
          seasonality: "Disponible toute l'année"
        }
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
        title: "Traçabilité à chaque étape",
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
    desc: "Grâce à notre réseau de producteurs et de partenaires, nous développons des solutions sur mesure pour approvisionner les marchés en Europe, en Afrique et en Asie.",
    cta: "Découvrir notre réseau",
    mapImage: "/images/carte-reseau.png",
    hubs: [
      {
        name: "Maroc (Hub Central)",
        role: "Production agricole d'exception & plateforme logistique pivot",
        flows: "Export vers l'Europe, l'Afrique et le Moyen-Orient"
      },
      {
        name: "Afrique de l'Ouest",
        role: "Bassin de production tropicale de haute qualité (cajou, mangues, épices)",
        flows: "Filières directes producteur-importateur"
      },
      {
        name: "Europe",
        role: "Marchés de consommation exigeants, centrales d'achat & grossistes",
        flows: "Liaisons régulières directes maritimes et routières"
      },
      {
        name: "Asie & Moyen-Orient",
        role: "Partenaires de négoce et marchés émergents en forte croissance",
        flows: "Contrats de fourniture sécurisés"
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
    { value: "+ 100", label: "Producteurs partenaires" },
    { value: "+ 15", label: "Pays desservis" },
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


