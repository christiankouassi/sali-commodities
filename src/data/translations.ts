import { ProductItem, ServiceItem } from './content';

export interface SiteContent {
  brand: {
    name: string;
    registered: boolean;
    baseline: string;
    description: string;
    holding: string;
    phone: string;
    email: string;
    address: string;
    linkedin: string;
  };
  nav: Array<{ label: string; href: string }>;
  hero: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    corridors: string[];
  };
  featureBoxes: Array<{
    id: string;
    title: string;
    subtitle: string;
    icon: string;
  }>;
  productsSection: {
    tag: string;
    title: string;
    subtitle: string;
    viewAllBtn: string;
    categories: Array<{ id: string; label: string }>;
    items: ProductItem[];
  };
  commitment: {
    tag: string;
    title: string;
    desc: string;
    featureCard: {
      image: string;
      title: string;
      subtitle: string;
    };
    pillars: Array<{
      icon: string;
      title: string;
      desc: string;
    }>;
  };
  network: {
    tag: string;
    title: string;
    desc: string;
    cta: string;
    hubLabel: string;
    destinations: Record<string, string>;
  };
  servicesHeading: {
    tag: string;
    title: string;
    subtitle: string;
  };
  services: ServiceItem[];
  stats: Array<{ value: string; label: string }>;
  contactCta: {
    tag: string;
    title: string;
    subtitle: string;
    buttonText: string;
  };
  footer: {
    copyright: string;
    slogan: string;
    navTitle: string;
    productsTitle: string;
    contactTitle: string;
    socialTitle: string;
    legalLink: string;
    privacyLink: string;
  };
  contactModal: {
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    phone: string;
    company: string;
    inquiryType: string;
    productOfInterest: string;
    message: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    close: string;
  };
  productModal: {
    originLabel: string;
    categoryLabel: string;
    specsTitle: string;
    varieties: string;
    packaging: string;
    certifications: string;
    seasonality: string;
    ctaQuote: string;
    close: string;
  };
  networkModal: {
    title: string;
    subtitle: string;
    close: string;
  };
}

export const TRANSLATIONS: Record<'EN' | 'FR' | 'ES', SiteContent> = {
  // ==========================================
  // ENGLISH (PRIMARY DEFAULT LANGUAGE)
  // ==========================================
  EN: {
    brand: {
      name: "SALI COMMODITIES",
      registered: true,
      baseline: "From good origins to greater opportunities",
      description: "Import-export company specializing in agri-food and premium agricultural commodities.",
      holding: "SALI Capital",
      phone: "+212 6 61 37 39 37",
      email: "contact@sali-commodities.com",
      address: "Casablanca, Morocco",
      linkedin: "https://www.linkedin.com"
    },
    nav: [
      { label: "Home", href: "#accueil" },
      { label: "Our Expertise", href: "#expertise" },
      { label: "Products", href: "#produits" },
      { label: "Our Network", href: "#reseau" },
      { label: "About Us", href: "#engagement" },
      { label: "Contact", href: "#contact" }
    ],
    hero: {
      tag: "IMPORT • EXPORT • AGRI-FOOD",
      titleLine1: "From finest origins",
      titleLine2: "to global",
      titleHighlight: "markets",
      subtitle: "Connecting exceptional agricultural producers with international market opportunities.",
      ctaPrimary: "Explore our activity",
      ctaSecondary: "",
      corridors: ["Morocco", "Africa", "Global"]
    },
    featureBoxes: [
      {
        id: "sourcing",
        title: "Responsible Sourcing",
        subtitle: "Trusted vetted growers",
        icon: "leaf"
      },
      {
        id: "reseau",
        title: "Global Reach",
        subtitle: "Active across 4 continents",
        icon: "globe"
      },
      {
        id: "qualite",
        title: "Quality & Compliance",
        subtitle: "International standards",
        icon: "award"
      },
      {
        id: "logistique",
        title: "Seamless Logistics",
        subtitle: "From farm to destination",
        icon: "truck"
      }
    ],
    productsSection: {
      tag: "OUR PRODUCTS",
      title: "Premium Commodities, Shipped Worldwide",
      subtitle: "From Morocco and West Africa to international hubs, we select the highest-grade agri-food commodities to meet demanding global market standards.",
      viewAllBtn: "View all products",
      categories: [
        { id: "all", label: "All Products" },
        { id: "maroc", label: "Morocco Origin" },
        { id: "afrique", label: "West Africa" },
        { id: "monde", label: "International" }
      ],
      items: [
        {
          id: "agrumes",
          name: "Citrus Fruits",
          category: "Fresh Fruits - Morocco",
          desc: "Berkane clementines, Navel oranges and fragrant Maroc Late, world-renowned for their rich sweet flavor and incomparable freshness.",
          image: "/images/agrumes.png",
          origin: "maroc",
          details: {
            varieties: "Nadorcott, Berkane Clementines, Navel, Maroc Late",
            packaging: "Cardboard boxes (10kg, 15kg), IFCO reusable crates, custom retail packaging",
            certifications: "GlobalGAP, BRC, SMETA, ISO 22000",
            seasonality: "October to June"
          }
        },
        {
          id: "tomates",
          name: "Round & Cherry Tomatoes",
          category: "Market Gardening - Morocco",
          desc: "Tomatoes cultivated in advanced modern greenhouses, rigorously selected and sized according to strict international specifications.",
          image: "/images/tomates.png",
          origin: "maroc",
          details: {
            varieties: "Round, Cherry, Plum, Beefsteak",
            packaging: "Cardboard boxes (5kg, 6kg), punnets (250g, 500g)",
            certifications: "GlobalGAP, GRASP, IFS Food",
            seasonality: "Year-round availability"
          }
        },
        {
          id: "huile-olive",
          name: "Extra Virgin Olive Oil",
          category: "Gourmet Terroir - Morocco",
          desc: "Extra virgin olive oil cold-extracted from Moroccan Picholine olives, offering minimal acidity and superior culinary richness.",
          image: "/images/huile-olive.png",
          origin: "maroc",
          details: {
            varieties: "Moroccan Picholine, Menara, Haouzia",
            packaging: "Glass bottles (250ml, 500ml, 750ml, 1L), Tins (3L, 5L), Bulk flexitanks",
            certifications: "Organic, Halal, ISO 9001, COI Standard",
            seasonality: "Harvest November - January, available year-round"
          }
        },
        {
          id: "myrtilles",
          name: "Fresh Blueberries",
          category: "Berries - Morocco",
          desc: "Crunchy premium blueberries hand-picked with care, packed immediately to preserve their natural bloom and optimal firmness.",
          image: "/images/01_myrtilles.jpg",
          origin: "maroc",
          details: {
            varieties: "Ventura, Kirra, Sekoya",
            packaging: "Clamshells (125g, 250g, 300g, 500g)",
            certifications: "GlobalGAP, BRC, Tesco Nurture",
            seasonality: "December to May"
          }
        },
        {
          id: "framboises",
          name: "Raspberries",
          category: "Berries - Morocco",
          desc: "First-grade raspberries featuring intense natural aroma and outstanding shelf-life, tailored for retail purchasing groups and fine dining.",
          image: "/images/02_framboises.jpg",
          origin: "maroc",
          details: {
            varieties: "Adelita, Enrosadira, Kwanza",
            packaging: "Punnets (125g, 170g), master cartons",
            certifications: "GlobalGAP, BRC, IFS",
            seasonality: "October to June"
          }
        },
        {
          id: "poivrons",
          name: "Peppers (Red, Yellow, Green)",
          category: "Market Gardening - Morocco",
          desc: "Vibrant, thick-fleshed peppers from certified partner farms ensuring total traceability and uniform sizing for export.",
          image: "/images/03_poivrons_trio.jpg",
          origin: "maroc",
          details: {
            varieties: "Blocky Red, Yellow, Green, Sweet Palermo",
            packaging: "Cardboard boxes (5kg), flow-pack trio packs",
            certifications: "GlobalGAP, GRASP",
            seasonality: "October to May"
          }
        },
        {
          id: "fruits-legumes-iqf",
          name: "IQF Fruits & Vegetables",
          category: "Individually Quick Frozen",
          desc: "Full range of IQF frozen produce preserving complete cellular integrity, natural flavor, and maximum nutritional content.",
          image: "/images/04_fruits_legumes_IQF.jpg",
          origin: "maroc",
          details: {
            varieties: "IQF Strawberries, Raspberries, Pepper strips, Artichokes, Broccoli",
            packaging: "Bulk polybags (10kg, 20kg), retail packs (450g, 1kg)",
            certifications: "BRCGS, IFS Food, FDA Registered",
            seasonality: "Year-round availability"
          }
        },
        {
          id: "haricots-verts",
          name: "Green Beans",
          category: "Market Gardening - Morocco",
          desc: "Delicate green beans hand-picked at peak maturity, meticulously sorted for tender crunch and uniform caliber.",
          image: "/images/05_haricots_verts.jpg",
          origin: "maroc",
          details: {
            varieties: "Extra-fine, Fine, Boby",
            packaging: "Wooden and cardboard crates (4kg, 5kg), modified atmosphere bags",
            certifications: "GlobalGAP, SMETA",
            seasonality: "November to May"
          }
        },
        {
          id: "avocats",
          name: "Avocados",
          category: "Subtropical Fruits - West Africa",
          desc: "Premium Hass and Fuerte avocados harvested at ideal dry-matter content for creamy flesh and superior shipping endurance.",
          image: "/images/09_avocats.jpg",
          origin: "afrique",
          details: {
            varieties: "Hass, Fuerte, Pinkerton",
            packaging: "Cardboard boxes (4kg, 10kg), palletized controlled atmosphere",
            certifications: "GlobalGAP, GRASP, Fair Trade Certified",
            seasonality: "September to April"
          }
        },
        {
          id: "fruits-secs",
          name: "Dried Fruits & Nuts",
          category: "Nuts & Healthy Snacking - West Africa",
          desc: "Selected high-grade raw and roasted cashew kernels, almonds, and dried tropical fruits meeting stringent import-export specifications.",
          image: "/images/06_fruits_secs.jpg",
          origin: "afrique",
          details: {
            varieties: "Cashew W180/W240/W320, Organic dried mangoes, Almonds",
            packaging: "Vacuum pouches (25lbs, 50lbs), nitrogen-flushed boxes",
            certifications: "HACCP, ISO 22000, Organic Ecocert",
            seasonality: "Year-round supply"
          }
        },
        {
          id: "cacao",
          name: "Cocoa Derivatives",
          category: "Raw Commodities - International",
          desc: "Premium well-fermented dried cocoa beans, natural butter, liquor, and powder sourced from ethical partner cooperatives.",
          image: "/images/07_cacao.jpg",
          origin: "monde",
          details: {
            varieties: "Grade 1 Fermented Beans, Cocoa Butter, Natural Powder 10-12%",
            packaging: "Jute bags (65kg), cartons (25kg), food-grade drums",
            certifications: "Rainforest Alliance, Fairtrade, UTZ",
            seasonality: "Main crop (Oct-Mar), Mid crop (May-Aug)"
          }
        },
        {
          id: "sardines",
          name: "Canned Sardines",
          category: "Seafood & Canning - Morocco",
          desc: "Fresh wild Atlantic sardines traditionally prepared in pure olive oil and aromatics, celebrated globally for exquisite flavor.",
          image: "/images/08_sardines_en_conserve.jpg",
          origin: "maroc",
          details: {
            varieties: "In extra virgin olive oil, spiced, tomato sauce, sunflower oil",
            packaging: "Club 125g easy-open cans, master cartons of 50/100 cans",
            certifications: "Friend of the Sea, IFS Food, FDA Registered",
            seasonality: "Year-round availability"
          }
        }
      ]
    },
    commitment: {
      tag: "OUR COMMITMENT",
      title: "Quality, Traceability & Positive Impact",
      desc: "We work hand in hand with dedicated agricultural producers, respecting growers, natural ecosystems, and rigorous international quality standards.",
      featureCard: {
        image: "/images/agriculture-durable.png",
        title: "Sustainable Agriculture for a Resilient Future",
        subtitle: "Responsible value chains, from harvest to global consumers"
      },
      pillars: [
        {
          icon: "leaf",
          title: "Good Agricultural Practices",
          desc: "Championing sustainable farming techniques, reducing ecological footprint, and safeguarding soil biodiversity."
        },
        {
          icon: "shieldCheck",
          title: "End-to-End Traceability",
          desc: "Full visibility from certified plot coordinates to temperature-controlled international delivery."
        },
        {
          icon: "users",
          title: "Grower Empowerment",
          desc: "Long-term fair trade partnerships ensuring fair economic return for agricultural communities."
        },
        {
          icon: "globe",
          title: "Sustainable Trade Development",
          desc: "Fostering shared value between original fertile terroirs and international distribution corridors."
        }
      ]
    },
    network: {
      tag: "OUR INTERNATIONAL MARKETS",
      title: "Our Markets",
      desc: "Constantly expanding, our active trade network connects leading agricultural suppliers and buyers across Europe, Africa, Russia, Asia, and North America.",
      cta: "Join our trade network",
      hubLabel: "SALI Commodities",
      destinations: {
        russia: "Russia",
        hongKong: "Hong Kong",
        europe: "Europe",
        westAfrica: "West Africa",
        egypt: "Egypt",
        southAfrica: "South Africa",
        usa: "United States"
      }
    },
    servicesHeading: {
      tag: "OUR EXPERTISE",
      title: "End-to-End International Trade Solutions",
      subtitle: "From origin qualification to destination delivery, we secure and streamline each stage of agricultural export."
    },
    services: [
      {
        id: "sourcing",
        title: "Sourcing & Procurement",
        points: [
          "Identification and qualification of local producers and agricultural suppliers",
          "Establishment of dedicated local procurement hubs for foreign retail distributors",
          "Building vetted producer networks segmented by commodity and harvest calendar",
          "Negotiation of commercial terms, quality grades, and forward supply contracts",
          "Volume consolidation across regional growers for high-tonnage shipments"
        ]
      },
      {
        id: "commercial",
        title: "Business Development & Matchmaking",
        points: [
          "Direct matchmaking between origin producers and tier-1 international buyers",
          "Commercial export representation for regional cooperatives and processing units",
          "Targeted market prospecting and customer qualification across key import hubs",
          "Official representation and stand presence at premier international trade fairs",
          "Direct channel connections with major wholesalers, importers, and retail chains"
        ]
      },
      {
        id: "logistics",
        title: "Logistics & Multimodal Freight",
        points: [
          "Strategic partnerships with maritime reefer lines, air freight, and road hauliers",
          "End-to-end logistics coordination from field packaging to maritime port loading",
          "Customs clearance, transit management, and bonded warehouse logistics",
          "Logistical route optimization, transit-time minimization, and cost reduction",
          "Incoterm advisory and international carriage contract execution (FOB, CIF, DAP)"
        ]
      },
      {
        id: "quality",
        title: "Quality Control & Compliance",
        points: [
          "Accredited third-party quality inspection and pre-shipment sampling (SGS, Bureau Veritas)",
          "Assistance in securing international certifications (GlobalGAP, Organic, Halal, IFS, BRC)",
          "Strict verification of import sanitary requirements for EU, US, and Asian borders",
          "Laboratory multi-residue pesticide screening and microbiological analysis",
          "Rigorous preparation and audit readiness for grower certification reviews"
        ]
      },
      {
        id: "storage",
        title: "Cold Storage, Packing & Sorting",
        points: [
          "Cold chain continuity through modern atmospheric cold storage facilities",
          "Coordination with high-speed automated sorting and optical grading packinghouses",
          "Design and sourcing of durable, ventilated packaging adapted to destination transit",
          "Strict calibration, defect culling, and palletization to export specifications",
          "Packaging format optimization tailored to supermarket private label requirements"
        ]
      },
      {
        id: "brand",
        title: "Private Label & Brand Packaging",
        points: [
          "Custom white-label product creation for major grocery chains and food service",
          "Development of proprietary brands engineered for specific target consumer demographics",
          "Market positioning, multilingual labelling, and barcode compliance advisory",
          "Store-brand (MDD) range development and packaging adaptation",
          "International trademark registration and brand protection strategy"
        ]
      },
      {
        id: "admin",
        title: "Regulatory, Legal & Trade Finance",
        points: [
          "Preparation of complete export documentation folders for zero customs hold-up",
          "Management of phytosanitary certificates, EUR.1, health certificates, and bills of lading",
          "Introductions to trade finance institutions, factoring, and export credit insurers",
          "Drafting and review of secure international cross-border sales agreements",
          "Structured international trade settlement mechanisms (Letters of Credit, CAD)",
          "Foreign exchange hedging and currency fluctuation risk mitigation"
        ]
      },
      {
        id: "consulting",
        title: "Export Strategy & Market Intelligence",
        points: [
          "Comprehensive market research and price trend forecasting on key target markets",
          "Market entry roadmap design tailored to seasonal supply and competitive landscape",
          "In-depth competitor intelligence and benchmark pricing analysis",
          "Product portfolio diversification recommendations based on emerging global demand",
          "Country-by-country regulatory compliance and tariff schedule guidance"
        ]
      },
      {
        id: "digital",
        title: "Digital Trade Tools & Smart Traceability",
        points: [
          "Implementation of dedicated B2B sourcing and digital transaction platforms",
          "Interactive digital produce catalogs tailored for international buyers",
          "Listing on leading global B2B agricultural commodity trade portals",
          "Real-time shipment GPS tracking, temperature logging, and digital documentation"
        ]
      }
    ],
    stats: [
      { value: "+ 50", label: "Referenced Commodities" },
      { value: "100 %", label: "Traceability Standard" },
      { value: "0", label: "Quality Compromise" }
    ],
    contactCta: {
      tag: "LET'S WORK TOGETHER",
      title: "Planning an import or export venture?",
      subtitle: "Our commodity trading team is ready to identify the best market opportunities for your business.",
      buttonText: "Contact Our Desk"
    },
    footer: {
      copyright: "© 2026 SALI Commodities. All rights reserved.",
      slogan: "Engineered for sustainable international trade",
      navTitle: "Navigation",
      productsTitle: "Products",
      contactTitle: "Contact",
      socialTitle: "Follow Us",
      legalLink: "Legal Notice",
      privacyLink: "Privacy Policy"
    },
    contactModal: {
      title: "Contact Us",
      subtitle: "Our commercial desk will respond within 24 hours.",
      fullName: "Full Name",
      email: "Business Email",
      phone: "Phone Number",
      company: "Company Name",
      inquiryType: "Inquiry Type",
      productOfInterest: "Product of Interest",
      message: "Your Message / Volumes & Destination",
      submit: "Send Message",
      submitting: "Sending...",
      successTitle: "Message Sent!",
      successDesc: "Thank you for reaching out. Our trade desk will contact you promptly.",
      close: "Close"
    },
    productModal: {
      originLabel: "Origin",
      categoryLabel: "Category",
      specsTitle: "Technical Specifications",
      varieties: "Varieties",
      packaging: "Packaging",
      certifications: "Certifications",
      seasonality: "Seasonality",
      ctaQuote: "Request a Quote",
      close: "Close"
    },
    networkModal: {
      title: "Our Global Distribution Corridors",
      subtitle: "Active export hubs and verified delivery routes connecting continents.",
      close: "Close"
    }
  },

  // ==========================================
  // FRANÇAIS
  // ==========================================
  FR: {
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
          origin: "maroc",
          details: {
            varieties: "Nadorcott, Clémentines de Berkane, Navel, Maroc Late",
            packaging: "Cartons (10kg, 15kg), plateaux IFCO, emballages filet",
            certifications: "GlobalGAP, BRC, SMETA, ISO 22000",
            seasonality: "Octobre à Juin"
          }
        },
        {
          id: "tomates",
          name: "Tomates rondes & cerises",
          category: "Maraîchage - Maroc",
          desc: "Tomates cultivées sous serres modernes, rigoureusement sélectionnées et calibrées selon les exigences européennes les plus strictes.",
          image: "/images/tomates.png",
          origin: "maroc",
          details: {
            varieties: "Ronde, Cerise, Grappe, Coeur de boeuf",
            packaging: "Cartons (5kg, 6kg), barquettes (250g, 500g)",
            certifications: "GlobalGAP, GRASP, IFS Food",
            seasonality: "Toute l'année"
          }
        },
        {
          id: "huile-olive",
          name: "Huile d'olive extra-vierge",
          category: "Terroir & Épicerie - Maroc",
          desc: "Huile vierge extra issue d'oliviers picholine marocaine, extraite à froid avec une acidité minimale pour une qualité gastronomique supérieure.",
          image: "/images/huile-olive.png",
          origin: "maroc",
          details: {
            varieties: "Picholine marocaine, Menara, Haouzia",
            packaging: "Bouteilles verre (250ml, 500ml, 750ml, 1L), Bidons (3L, 5L), Vrac flexitank",
            certifications: "Bio, Halal, ISO 9001, Norme COI",
            seasonality: "Récolte Novembre - Janvier, disponible toute l'année"
          }
        },
        {
          id: "myrtilles",
          name: "Myrtilles fraîches",
          category: "Fruits rouges - Maroc",
          desc: "Myrtilles croquantes récoltées à la main avec passion, conditionnées immédiatement pour préserver leur pruine naturelle et leur fermeté.",
          image: "/images/01_myrtilles.jpg",
          origin: "maroc",
          details: {
            varieties: "Ventura, Kirra, Sekoya",
            packaging: "Ravier plastique (125g, 250g, 300g, 500g)",
            certifications: "GlobalGAP, BRC, Tesco Nurture",
            seasonality: "Décembre à Mai"
          }
        },
        {
          id: "framboises",
          name: "Framboises",
          category: "Fruits rouges - Maroc",
          desc: "Framboises de première qualité aux arômes intenses et à la tenue irréprochable, destinées aux centrales d'achat et à la haute gastronomie.",
          image: "/images/02_framboises.jpg",
          origin: "maroc",
          details: {
            varieties: "Adelita, Enrosadira, Kwanza",
            packaging: "Barquettes (125g, 170g), cartons master",
            certifications: "GlobalGAP, BRC, IFS",
            seasonality: "Octobre à Juin"
          }
        },
        {
          id: "poivrons",
          name: "Poivrons (Rouge, Jaune, Vert)",
          category: "Maraîchage - Maroc",
          desc: "Poivrons charnus et colorés, issus d'exploitations certifiées garantissant une traçabilité totale et une régularité de calibre parfaite.",
          image: "/images/03_poivrons_trio.jpg",
          origin: "maroc",
          details: {
            varieties: "Carré rouge, jaune, vert, Sweet Palermo",
            packaging: "Cartons (5kg), sachets flow-pack trio",
            certifications: "GlobalGAP, GRASP",
            seasonality: "Octobre à Mai"
          }
        },
        {
          id: "fruits-legumes-iqf",
          name: "Fruits & Légumes IQF",
          category: "Surgélation Individuelle Rapide",
          desc: "Gamme complète de fruits et légumes surgelés IQF conservant l'intégrité cellulaire, les saveurs originelles et toutes les qualités nutritionnelles.",
          image: "/images/04_fruits_legumes_IQF.jpg",
          origin: "maroc",
          details: {
            varieties: "Fraises IQF, Framboises, Poivrons lamelles, Artichauts, Brocolis",
            packaging: "Sacs vrac (10kg, 20kg), sachets consommateurs (450g, 1kg)",
            certifications: "BRCGS, IFS Food, FDA Registered",
            seasonality: "Toute l'année"
          }
        },
        {
          id: "haricots-verts",
          name: "Haricots verts",
          category: "Maraîchage - Maroc",
          desc: "Haricots verts cueillis à la main à maturité parfaite, triés méticuleusement pour une tendreté et une finesse optimales.",
          image: "/images/05_haricots_verts.jpg",
          origin: "maroc",
          details: {
            varieties: "Extra-fin, Fin, Boby",
            packaging: "Colis bois et carton (4kg, 5kg), sachets sous atmosphère",
            certifications: "GlobalGAP, SMETA",
            seasonality: "Novembre à Mai"
          }
        },
        {
          id: "avocats",
          name: "Avocats",
          category: "Fruits tropicaux - Afrique de l'Ouest",
          desc: "Avocats Hass et Fuerte de qualité supérieure, récoltés à maturité optimale pour une chair crémeuse et une excellente tenue au transport international.",
          image: "/images/09_avocats.jpg",
          origin: "afrique",
          details: {
            varieties: "Hass, Fuerte, Pinkerton",
            packaging: "Cartons 4kg, 10kg, atmosphère contrôlée",
            certifications: "GlobalGAP, GRASP, Fair Trade",
            seasonality: "Septembre à Avril"
          }
        },
        {
          id: "fruits-secs",
          name: "Fruits secs et Noix",
          category: "Épicerie fine & Snacking sain - Afrique de l'Ouest",
          desc: "Sélection premium d'amandes, noix de cajou et fruits à coque grillés ou bruts, répondant aux standards internationaux d'import-export.",
          image: "/images/06_fruits_secs.jpg",
          origin: "afrique",
          details: {
            varieties: "Cajou W180/W240/W320, Mangues séchées bio, Amandes",
            packaging: "Poches sous vide (25lbs, 50lbs), cartons renforcés",
            certifications: "HACCP, ISO 22000, Bio Ecocert",
            seasonality: "Toute l'année"
          }
        },
        {
          id: "cacao",
          name: "Dérivés de Cacao",
          category: "Matières premières - International",
          desc: "Fèves de cacao fermentées de premier choix, beurre, masse et poudre de cacao, approvisionnés auprès de coopératives équitables partenaires.",
          image: "/images/07_cacao.jpg",
          origin: "monde",
          details: {
            varieties: "Fèves fermentées Grade 1, Beurre pur, Poudre 10-12%",
            packaging: "Sacs de jute (65kg), cartons (25kg), fûts alimentaires",
            certifications: "Rainforest Alliance, Fairtrade, UTZ",
            seasonality: "Récolte principale (Oct-Mar), intermédiaire (Mai-Août)"
          }
        },
        {
          id: "sardines",
          name: "Sardines en conserve",
          category: "Produits de la mer - Maroc",
          desc: "Sardines fraîches de l'Atlantique marocain préparées artisanalement à l'huile d'olive et aux aromates, réputées pour leur finesse gustative.",
          image: "/images/08_sardines_en_conserve.jpg",
          origin: "maroc",
          details: {
            varieties: "Huile d'olive extra vierge, pimentée, sauce tomate, huile végétale",
            packaging: "Boîtes club 125g ouverture facile, cartons de 50/100 boîtes",
            certifications: "Friend of the Sea, IFS Food, FDA Registered",
            seasonality: "Toute l'année"
          }
        }
      ]
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
      tag: "NOS MARCHÉS INTERNATIONAUX",
      title: "Nos marchés",
      desc: "En constante évolution, notre réseau actuel comprend des importateurs et exportateurs situés en Europe, en Afrique, en Russie ainsi qu'en Asie.",
      cta: "Rejoindre notre réseau",
      hubLabel: "SALI Commodities",
      destinations: {
        russia: "Russie",
        hongKong: "Hong-Kong",
        europe: "Europe",
        westAfrica: "Afrique de l'Ouest",
        egypt: "Égypte",
        southAfrica: "Afrique du Sud",
        usa: "États-Unis"
      }
    },
    servicesHeading: {
      tag: "NOTRE EXPERTISE",
      title: "Des services intégrés de bout en bout",
      subtitle: "De la qualification des filières à la livraison finale, nous sécurisons chaque maillon du commerce international."
    },
    services: [
      {
        id: "sourcing",
        title: "Sourcing & approvisionnement",
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
      navTitle: "Navigation",
      productsTitle: "Produits",
      contactTitle: "Contact",
      socialTitle: "Suivez-nous",
      legalLink: "Mentions légales",
      privacyLink: "Politique de confidentialité"
    },
    contactModal: {
      title: "Contactez-nous",
      subtitle: "Notre équipe commerciale vous répond sous 24h ouvrées.",
      fullName: "Nom complet",
      email: "Adresse email professionnelle",
      phone: "Numéro de téléphone",
      company: "Entreprise",
      inquiryType: "Type de demande",
      productOfInterest: "Produit concerné",
      message: "Votre message / Volumes et destination",
      submit: "Envoyer ma demande",
      submitting: "Envoi en cours...",
      successTitle: "Demande envoyée !",
      successDesc: "Merci. Notre équipe commerciale vous recontactera dans les meilleurs délais.",
      close: "Fermer"
    },
    productModal: {
      originLabel: "Origine",
      categoryLabel: "Catégorie",
      specsTitle: "Fiche Technique",
      varieties: "Variétés",
      packaging: "Conditionnement",
      certifications: "Certifications",
      seasonality: "Saisonnalité",
      ctaQuote: "Demander une cotation",
      close: "Fermer"
    },
    networkModal: {
      title: "Nos Réseaux et Flux d'Exportation",
      subtitle: "Plateformes logistiques et corridors certifiés reliant nos terroirs au monde entier.",
      close: "Fermer"
    }
  },

  // ==========================================
  // ESPAÑOL
  // ==========================================
  ES: {
    brand: {
      name: "SALI COMMODITIES",
      registered: true,
      baseline: "From good origins to greater opportunities",
      description: "Empresa de importación y exportación especializada en productos agroalimentarios y materias primas de excelencia.",
      holding: "SALI Capital",
      phone: "+212 6 61 37 39 37",
      email: "contact@sali-commodities.com",
      address: "Casablanca, Marruecos",
      linkedin: "https://www.linkedin.com"
    },
    nav: [
      { label: "Inicio", href: "#accueil" },
      { label: "Nuestra Experiencia", href: "#expertise" },
      { label: "Productos", href: "#produits" },
      { label: "Nuestra Red", href: "#reseau" },
      { label: "Sobre Nosotros", href: "#engagement" },
      { label: "Contacto", href: "#contact" }
    ],
    hero: {
      tag: "IMPORTACIÓN • EXPORTACIÓN • AGROALIMENTARIA",
      titleLine1: "De los mejores terruños",
      titleLine2: "a los mercados",
      titleHighlight: "del mundo",
      subtitle: "Conectamos a productores excepcionales con las oportunidades comerciales internacionales.",
      ctaPrimary: "Descubrir nuestra actividad",
      ctaSecondary: "",
      corridors: ["Marruecos", "África", "Mundo"]
    },
    featureBoxes: [
      {
        id: "sourcing",
        title: "Aprovisionamiento Responsable",
        subtitle: "Productores de confianza",
        icon: "leaf"
      },
      {
        id: "reseau",
        title: "Red Internacional",
        subtitle: "Presencia en 4 continentes",
        icon: "globe"
      },
      {
        id: "qualite",
        title: "Calidad y Conformidad",
        subtitle: "Estándares internacionales",
        icon: "award"
      },
      {
        id: "logistique",
        title: "Logística Integral",
        subtitle: "Del campo al destino",
        icon: "truck"
      }
    ],
    productsSection: {
      tag: "NUESTROS PRODUCTOS",
      title: "Productos de Excelencia para el Mercado Global",
      subtitle: "Desde Marruecos y África Occidental hasta los mercados internacionales, seleccionamos los mejores productos agroalimentarios cumpliendo las normativas más rigurosas.",
      viewAllBtn: "Ver todos los productos",
      categories: [
        { id: "all", label: "Todos los productos" },
        { id: "maroc", label: "Origen Marruecos" },
        { id: "afrique", label: "África Occidental" },
        { id: "monde", label: "Internacional" }
      ],
      items: [
        {
          id: "agrumes",
          name: "Cítricos",
          category: "Frutas frescas - Marruecos",
          desc: "Clementinas de Berkane, naranjas Navel y Maroc Late aromáticas, célebres en el mundo entero por su sabor dulce y frescura inigualable.",
          image: "/images/agrumes.png",
          origin: "maroc",
          details: {
            varieties: "Nadorcott, Clementinas de Berkane, Navel, Maroc Late",
            packaging: "Cajas de cartón (10kg, 15kg), bandejas IFCO, mallas",
            certifications: "GlobalGAP, BRC, SMETA, ISO 22000",
            seasonality: "Octubre a Junio"
          }
        },
        {
          id: "tomates",
          name: "Tomates redondos y cherry",
          category: "Hortalizas - Marruecos",
          desc: "Tomates cultivados en invernaderos modernos, seleccionados y calibrados según las especificaciones más exigentes de la distribución internacional.",
          image: "/images/tomates.png",
          origin: "maroc",
          details: {
            varieties: "Redondo, Cherry, Pera, Corazón de buey",
            packaging: "Cajas de cartón (5kg, 6kg), tarrinas (250g, 500g)",
            certifications: "GlobalGAP, GRASP, IFS Food",
            seasonality: "Todo el año"
          }
        },
        {
          id: "huile-olive",
          name: "Aceite de oliva virgen extra",
          category: "Gourmet y Terruño - Marruecos",
          desc: "Aceite de oliva virgen extra de olivos Picholine marroquíes, extraído en frío con acidez mínima para una calidad gastronómica superior.",
          image: "/images/huile-olive.png",
          origin: "maroc",
          details: {
            varieties: "Picholine marroquí, Menara, Haouzia",
            packaging: "Botellas de vidrio (250ml, 500ml, 750ml, 1L), Bidones (3L, 5L), Flexitank granel",
            certifications: "Ecológico, Halal, ISO 9001, Norma COI",
            seasonality: "Cosecha Noviembre - Enero, disponible todo el año"
          }
        },
        {
          id: "myrtilles",
          name: "Arándanos frescos",
          category: "Frutos rojos - Marruecos",
          desc: "Arándanos crujientes recolectados a mano con esmero, envasados de inmediato para preservar su pruina natural y firmeza óptima.",
          image: "/images/01_myrtilles.jpg",
          origin: "maroc",
          details: {
            varieties: "Ventura, Kirra, Sekoya",
            packaging: "Tarrinas plásticas (125g, 250g, 300g, 500g)",
            certifications: "GlobalGAP, BRC, Tesco Nurture",
            seasonality: "Diciembre a Mayo"
          }
        },
        {
          id: "framboises",
          name: "Frambuesas",
          category: "Frutos rojos - Marruecos",
          desc: "Frambuesas de primera categoría con aroma intenso y excelente conservación, diseñadas para centrales de compra y alta gastronomía.",
          image: "/images/02_framboises.jpg",
          origin: "maroc",
          details: {
            varieties: "Adelita, Enrosadira, Kwanza",
            packaging: "Tarrinas (125g, 170g), cajas master",
            certifications: "GlobalGAP, BRC, IFS",
            seasonality: "Octubre a Junio"
          }
        },
        {
          id: "poivrons",
          name: "Pimientos (Rojo, Amarillo, Verde)",
          category: "Hortalizas - Marruecos",
          desc: "Pimientos carnosos y coloridos de explotaciones agrícolas certificadas, garantizando trazabilidad total y uniformidad de calibre.",
          image: "/images/03_poivrons_trio.jpg",
          origin: "maroc",
          details: {
            varieties: "Cuadrado rojo, amarillo, verde, Sweet Palermo",
            packaging: "Cajas de cartón (5kg), flow-pack tricolor",
            certifications: "GlobalGAP, GRASP",
            seasonality: "Octubre a Mayo"
          }
        },
        {
          id: "fruits-legumes-iqf",
          name: "Frutas y Verduras IQF",
          category: "Congelación Rápida Individual",
          desc: "Línea completa de frutas y verduras ultracongeladas IQF que preservan la textura celular, sabor fresco y todas sus propiedades nutritivas.",
          image: "/images/04_fruits_legumes_IQF.jpg",
          origin: "maroc",
          details: {
            varieties: "Fresas IQF, Frambuesas, Tiras de pimiento, Alcachofas, Brócoli",
            packaging: "Bolsas a granel (10kg, 20kg), bolsas de retail (450g, 1kg)",
            certifications: "BRCGS, IFS Food, FDA Registered",
            seasonality: "Todo el año"
          }
        },
        {
          id: "haricots-verts",
          name: "Judías verdes",
          category: "Hortalizas - Marruecos",
          desc: "Judías verdes recolectadas a mano en su punto exacto de madurez, meticulosamente seleccionadas por su ternura y calibre fino.",
          image: "/images/05_haricots_verts.jpg",
          origin: "maroc",
          details: {
            varieties: "Extra-fina, Fina, Boby",
            packaging: "Cajas de madera y cartón (4kg, 5kg), bolsas de atmósfera protectora",
            certifications: "GlobalGAP, SMETA",
            seasonality: "Noviembre a Mayo"
          }
        },
        {
          id: "avocats",
          name: "Aguacates",
          category: "Frutas tropicales - África Occidental",
          desc: "Aguacates Hass y Fuerte de primera categoría, cosechados con materia seca óptima para una pulpa cremosa y excelente conservación en tránsito.",
          image: "/images/09_avocats.jpg",
          origin: "afrique",
          details: {
            varieties: "Hass, Fuerte, Pinkerton",
            packaging: "Cajas de cartón de 4kg y 10kg, atmósfera controlada",
            certifications: "GlobalGAP, GRASP, Comercio Justo",
            seasonality: "Septiembre a Abril"
          }
        },
        {
          id: "fruits-secs",
          name: "Frutos secos y Nueces",
          category: "Snacking saludable - África Occidental",
          desc: "Selección selecta de anacardos crudos y tostados, almendras y frutos secos tropicales, cumpliendo rigurosos requisitos de import-export.",
          image: "/images/06_fruits_secs.jpg",
          origin: "afrique",
          details: {
            varieties: "Anacardo W180/W240/W320, Mango deshidratado bio, Almendras",
            packaging: "Bolsas al vacío (25lbs, 50lbs), cajas reforzadas",
            certifications: "HACCP, ISO 22000, Orgánico Ecocert",
            seasonality: "Todo el año"
          }
        },
        {
          id: "cacao",
          name: "Derivados del Cacao",
          category: "Materias primas - Internacional",
          desc: "Granos de cacao fermentados de primer grado, manteca pura, pasta y cacao en polvo procedentes de cooperativas asociadas sostenibles.",
          image: "/images/07_cacao.jpg",
          origin: "monde",
          details: {
            varieties: "Granos fermentados Grado 1, Manteca pura, Polvo 10-12%",
            packaging: "Sacos de yute (65kg), cajas (25kg), bidones alimentarios",
            certifications: "Rainforest Alliance, Fairtrade, UTZ",
            seasonality: "Cosecha principal (Oct-Mar), intermedia (May-Ago)"
          }
        },
        {
          id: "sardines",
          name: "Sardinas en conserva",
          category: "Conservas marinas - Marruecos",
          desc: "Sardinas frescas del Atlántico marroquí elaboradas artesanalmente con aceite de oliva virgen y especias, célebres por su delicado sabor.",
          image: "/images/08_sardines_en_conserve.jpg",
          origin: "maroc",
          details: {
            varieties: "En aceite de oliva virgen extra, picante, salsa de tomate, aceite vegetal",
            packaging: "Latas club 125g abre-fácil, cajas master de 50/100 latas",
            certifications: "Friend of the Sea, IFS Food, FDA Registered",
            seasonality: "Todo el año"
          }
        }
      ]
    },
    commitment: {
      tag: "NUESTRO COMPROMISO",
      title: "Calidad, Trazabilidad e Impacto Positivo",
      desc: "Trabajamos estrechamente con productores agrícolas comprometidos, respetando a las personas, los recursos naturales y los más exigentes estándares internacionales.",
      featureCard: {
        image: "/images/agriculture-durable.png",
        title: "Agricultura Sostenible para un Futuro Resiliente",
        subtitle: "Cadenas de valor responsables, desde el campo hasta los consumidores globales"
      },
      pillars: [
        {
          icon: "leaf",
          title: "Buenas Prácticas Agrícolas",
          desc: "Fomento de métodos de cultivo sostenible, reducción de huella ambiental y protección de la biodiversidad del suelo."
        },
        {
          icon: "shieldCheck",
          title: "Trazabilidad Total",
          desc: "Identificación precisa de cada parcela, productor y condiciones logísticas hasta el cliente de destino."
        },
        {
          icon: "users",
          title: "Apoyo a los Productores Locales",
          desc: "Alianzas comerciales equitativas a largo plazo que garantizan una retribución justa y el desarrollo de las comunidades rurales."
        },
        {
          icon: "globe",
          title: "Desarrollo Económico Sostenible",
          desc: "Generación de valor compartido entre los terruños agrícolas de origen y los mercados mundiales de distribución."
        }
      ]
    },
    network: {
      tag: "NUESTROS MERCADOS INTERNACIONALES",
      title: "Nuestros mercados",
      desc: "En constante expansión, nuestra red comercial activa conecta proveedores y compradores de alimentos en Europa, África, Rusia, Asia y Norteamérica.",
      cta: "Unirse a nuestra red",
      hubLabel: "SALI Commodities",
      destinations: {
        russia: "Rusia",
        hongKong: "Hong Kong",
        europe: "Europa",
        westAfrica: "África Occidental",
        egypt: "Egipto",
        southAfrica: "Sudáfrica",
        usa: "Estados Unidos"
      }
    },
    servicesHeading: {
      tag: "NUESTRA EXPERIENCIA",
      title: "Servicios Integrales de Comercio Exterior",
      subtitle: "Desde la selección y auditoría en origen hasta la entrega final, aseguramos cada eslabón de la exportación agroalimentaria."
    },
    services: [
      {
        id: "sourcing",
        title: "Sourcing y Aprovisionamiento",
        points: [
          "Identificación y homologación rigurosa de productores y proveedores locales",
          "Creación de centrales de compras locales dedicadas a distribuidores internacionales",
          "Constitución de redes de productores por categoría de producto y calendario de cosecha",
          "Negociación de contratos marco, estándares de calidad y condiciones de suministro",
          "Consolidación de volúmenes de múltiples agricultores para grandes despachos marítimos"
        ]
      },
      {
        id: "commercial",
        title: "Desarrollo Comercial y Vinculación B2B",
        points: [
          "Conexión directa entre productores en origen y grandes compradores internacionales",
          "Representación comercial para exportación de cooperativas y plantas agroindustriales",
          "Prospección comercial y calificación de clientes en mercados estratégicos de destino",
          "Presencia y representación oficial en ferias agroalimentarias de referencia mundial",
          "Acceso preferente a importadores, centrales de distribución y mayoristas"
        ]
      },
      {
        id: "logistics",
        title: "Logística y Transporte Multimodal",
        points: [
          "Alianzas con navieras refrigeradas, operadores aéreos y transporte terrestre internacional",
          "Coordinación logística integral puerta a puerto (desde la recolección hasta el buque)",
          "Gestión de agentes de aduanas, despacho aduanero y depósitos fiscales",
          "Optimización de rutas de transporte marítimo, tiempos de tránsito y costes de flete",
          "Asesoramiento y gestión de contratos de transporte bajo términos Incoterms (FOB, CIF, DAP)"
        ]
      },
      {
        id: "quality",
        title: "Calidad y Conformidad Normativa",
        points: [
          "Inspecciones pre-embarque con certificadoras acreditadas (SGS, Bureau Veritas)",
          "Acompañamiento integral para certificaciones internacionales (GlobalGAP, Bio, Halal, IFS, BRC)",
          "Verificación rigurosa de requisitos fitosanitarios y arancelarios para UE, EE. UU. y Asia",
          "Gestión de análisis multirresiduos y pruebas microbiológicas en laboratorios certificados",
          "Preparación y soporte técnico en auditorías a productores y plantas de procesado"
        ]
      },
      {
        id: "storage",
        title: "Almacenamiento, Calibrado y Embalaje",
        points: [
          "Mantenimiento estricto de la cadena de frío en cámaras frigoríficas de atmósfera controlada",
          "Coordinación con centrales de envasado equipadas con calibración óptica de última generación",
          "Diseño y adquisición de envases resistentes y ventilados para tránsitos prolongados",
          "Clasificación, destrío de calibres y paletización conforme a normas de exportación",
          "Optimización de formatos de caja y embalaje según especificaciones de la gran distribución"
        ]
      },
      {
        id: "brand",
        title: "Marca Blanca y Packaging Personalizado",
        points: [
          "Desarrollo de productos en marca de distribuidor (MDD / private label) a medida",
          "Creación de marcas propias adaptadas al perfil del consumidor en mercados específicos",
          "Asesoría en diseño de empaques, etiquetado multilingüe y códigos de barras internacionales",
          "Desarrollo de líneas exclusivas para supermercados y canal HORECA",
          "Estrategia de registro y protección de marcas comerciales a escala internacional"
        ]
      },
      {
        id: "admin",
        title: "Gestión Administrativa, Legal y Financiera",
        points: [
          "Elaboración de expedientes documentales completos para evitar demoras aduaneras",
          "Emisión y control de certificados fitosanitarios, certificados de origen (EUR.1) y B/L",
          "Vinculación con entidades bancarias especializadas en crédito documentario y factoring",
          "Redacción de contratos de compraventa internacional seguros y blindados",
          "Estructuración de medios de pago internacionales garantizados (Cartas de Crédito, CAD)",
          "Coberturas y gestión de riesgo de tipo de cambio"
        ]
      },
      {
        id: "consulting",
        title: "Consultoría y Estrategia de Exportación",
        points: [
          "Estudios de mercado y análisis de demanda y precios en destinos prioritarios",
          "Diseño de planes estratégicos de entrada a nuevos mercados según estacionalidad",
          "Vigilancia competitiva y análisis comparativo de precios en destino",
          "Asesoramiento para diversificación de gama según tendencias de consumo globales",
          "Adecuación regulatoria y requisitos de homologación por país importador"
        ]
      },
      {
        id: "digital",
        title: "Herramientas Digitales y Trazabilidad Inteligente",
        points: [
          "Implementación de plataformas digitales B2B para conexión ágil con compradores",
          "Creación de catálogos digitales interactivos actualizados en tiempo real",
          "Posicionamiento en los principales marketplaces agroalimentarios mundiales",
          "Monitoreo GPS en tiempo real y registro de temperatura para control de envíos"
        ]
      }
    ],
    stats: [
      { value: "+ 50", label: "Productos Referenciados" },
      { value: "100 %", label: "Estándar de Trazabilidad" },
      { value: "0", label: "Compromiso en Calidad" }
    ],
    contactCta: {
      tag: "TRABAJEMOS JUNTOS",
      title: "¿Tiene un proyecto de importación o exportación?",
      subtitle: "Nuestro equipo comercial está a su disposición para identificar las mejores oportunidades para su empresa.",
      buttonText: "Contactar a Nuestro Equipo"
    },
    footer: {
      copyright: "© 2026 SALI Commodities. Todos los derechos reservados.",
      slogan: "Diseñado para un comercio internacional más sostenible",
      navTitle: "Navegación",
      productsTitle: "Productos",
      contactTitle: "Contacto",
      socialTitle: "Síganos",
      legalLink: "Aviso Legal",
      privacyLink: "Política de Privacidad"
    },
    contactModal: {
      title: "Contáctenos",
      subtitle: "Nuestro departamento comercial le responderá en un plazo máximo de 24 horas laborables.",
      fullName: "Nombre completo",
      email: "Correo electrónico corporativo",
      phone: "Número de teléfono",
      company: "Empresa",
      inquiryType: "Tipo de consulta",
      productOfInterest: "Producto de interés",
      message: "Su mensaje / Volúmenes y puerto de destino",
      submit: "Enviar Consulta",
      submitting: "Enviando...",
      successTitle: "¡Mensaje Enviado!",
      successDesc: "Muchas gracias por contactarnos. Nuestro equipo comercial se comunicará a la brevedad.",
      close: "Cerrar"
    },
    productModal: {
      originLabel: "Origen",
      categoryLabel: "Categoría",
      specsTitle: "Ficha Técnica",
      varieties: "Variedades",
      packaging: "Envasado",
      certifications: "Certificaciones",
      seasonality: "Estacionalidad",
      ctaQuote: "Solicitar Cotización",
      close: "Cerrar"
    },
    networkModal: {
      title: "Nuestros Corredores y Rutas de Exportación",
      subtitle: "Plataformas logísticas certificadas que conectan nuestros orígenes con los principales mercados mundiales.",
      close: "Cerrar"
    }
  }
};

export function getTranslations(lang: 'EN' | 'FR' | 'ES'): SiteContent {
  return TRANSLATIONS[lang] || TRANSLATIONS.EN;
}
