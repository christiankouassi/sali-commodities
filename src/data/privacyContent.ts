export interface PrivacySection {
  title: string;
  content: string[];
}

export interface PrivacyPolicyData {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  backToHome: string;
  intro: string;
  sections: PrivacySection[];
  contactBox: {
    title: string;
    description: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
  };
}

export const PRIVACY_CONTENT: Record<'EN' | 'FR' | 'ES', PrivacyPolicyData> = {
  // ==========================================
  // ENGLISH (DEFAULT)
  // ==========================================
  EN: {
    badge: "LEGAL & COMPLIANCE",
    title: "Privacy Policy & Personal Data Protection",
    subtitle: "Terms and conditions regarding the processing of personal data collected through the SALI Commodities website and LinkedIn Lead Generation forms.",
    lastUpdated: "Last updated: October 2026",
    backToHome: "Back to Home",
    intro: "SALI COMMODITIES, a specialized subsidiary of SALI Capital Group, attaches the highest importance to respecting your privacy and protecting the personal data of its clients, prospective partners, and visitors. This Privacy Policy details the conditions under which we collect, process, store, and safeguard your information, in accordance with applicable data protection laws, including EU Regulation 2016/679 (GDPR), Moroccan Law No. 09-08, and LinkedIn Campaign Manager compliance requirements.",
    sections: [
      {
        title: "1. Data Controller Identification",
        content: [
          "The controller responsible for processing your personal data is SALI COMMODITIES, an import-export corporation specializing in international agri-food trade and agricultural commodities, affiliated with SALI Capital Group.",
          "Headquarters: Casablanca, Kingdom of Morocco.",
          "Official Contact Email: contact@sali-commodities.com",
          "Telephone: +212 6 61 37 39 37",
          "Website: https://sali-commodities.com"
        ]
      },
      {
        title: "2. Personal Data We Collect",
        content: [
          "We collect and process only the data strictly necessary for our international B2B trade activities and commercial communications:",
          "• Data provided via LinkedIn Lead Generation Forms & Website Contact Forms: Full name, business email address, professional telephone number, company or trading entity name, job title or professional role (Distributor, Importer, Processor, Broker), country/market of destination, product of interest, requested volumes, and message content.",
          "• Technical & Interaction Data: IP address, browser type, operating system, pages visited, time spent, and referral source collected through standard server logs and analytical tracking tools (specifically the LinkedIn Insight Tag)."
        ]
      },
      {
        title: "3. Purposes of Data Processing",
        content: [
          "Your data is collected and processed exclusively for the following legitimate business purposes:",
          "• Processing and responding to your commercial requests, quotation demands, and commodity inquiries.",
          "• Establishing and managing B2B commercial relationships, international supply contracts, and freight logistics.",
          "• Following up on business leads acquired through professional marketing campaigns and official LinkedIn sponsored lead generation forms.",
          "• Ensuring compliance with international trade customs, food safety standards, and phytosanitary export-import regulations.",
          "• Analyzing traffic to optimize user experience and evaluate the efficacy of our institutional communications."
        ]
      },
      {
        title: "4. Legal Grounds for Processing",
        content: [
          "The processing of your personal data rests on one or more of the following legal grounds:",
          "• Your Express Consent: Given when submitting an inquiry form on our website or submitting a LinkedIn Lead Gen Form (e.g., clicking 'Submit' after reviewing the privacy policy link).",
          "• Contractual & Pre-contractual Measures: Necessary to prepare commercial quotations, negotiate supply contracts, and organize shipments.",
          "• Legitimate Interest: Pursuing professional B2B business development, preventing fraud, and ensuring communication channel security."
        ]
      },
      {
        title: "5. Data Retention Period",
        content: [
          "SALI COMMODITIES retains personal data only for as long as necessary to fulfill the purposes for which it was gathered:",
          "• Commercial Inquiry & Prospect Data: Retained for a maximum period of 3 years following the date of the last active contact or interaction.",
          "• Active Client & Contractual Data: Retained for the duration of the commercial relationship, plus applicable statutory retention periods under commercial and customs law (typically 5 to 10 years for invoices and trade contracts).",
          "Upon expiration of these retention periods, personal data is either securely erased or irreversibly anonymized."
        ]
      },
      {
        title: "6. Data Sharing, Confidentiality & International Transfers",
        content: [
          "SALI COMMODITIES applies strict confidentiality protocols to your information:",
          "• Zero Sale of Data: Under no circumstances do we sell, lease, monetize, or trade your personal data to any third party.",
          "• Authorized Recipients: Data is accessible only by authorized commercial, logistical, and technical personnel of SALI COMMODITIES and SALI Capital Group.",
          "• Vetted Technical & Logistics Service Providers: Data may be shared with trusted third-party providers (such as hosting platforms, freight forwarding agents, and accredited inspection bodies like SGS or Bureau Veritas) strictly to the extent required to execute your trade orders, under confidentiality agreements compliant with international data protection standards."
        ]
      },
      {
        title: "7. Your Rights Regarding Your Data",
        content: [
          "In accordance with GDPR and Moroccan Law 09-08, you hold comprehensive rights over your personal data:",
          "• Right of Access: You may request confirmation of whether we process your data and receive a copy thereof.",
          "• Right to Rectification: You may request the update or correction of inaccurate, incomplete, or obsolete data.",
          "• Right to Erasure ('Right to be Forgotten'): You may request the deletion of your personal data, subject to statutory retention obligations.",
          "• Right to Restriction of Processing: You may request the temporary suspension of certain processing activities.",
          "• Right to Object: You may object at any time to the use of your data for B2B prospecting purposes.",
          "• Right to Withdraw Consent: Where processing relies on consent, you may withdraw it at any time without retroactive effect.",
          "To exercise any of these rights, please send your written request along with proof of identity to: contact@sali-commodities.com."
        ]
      },
      {
        title: "8. Cookies & LinkedIn Insight Tag Tracking",
        content: [
          "Our website uses cookies and similar tracking technologies to ensure optimal performance, analyze traffic, and power professional B2B retargeting:",
          "• LinkedIn Insight Tag: We have deployed the official LinkedIn Insight Tag (Partner ID: 9944714) provided by LinkedIn Corporation. This tag generates a lightweight tracking pixel and script allowing LinkedIn to collect metadata (URL, referrer, device IP, browser characteristics) to measure the conversion rate of our LinkedIn advertisements and build aggregated professional audiences.",
          "• LinkedIn Data Protection: LinkedIn does not share raw personal data with SALI COMMODITIES, but provides aggregated reports. The data collected by LinkedIn is encrypted and governed by LinkedIn's Privacy Policy (https://www.linkedin.com/legal/privacy-policy).",
          "• Opt-Out: LinkedIn members can manage or opt out of advertising tracking directly through their LinkedIn account settings under 'Advertising Preferences'."
        ]
      },
      {
        title: "9. Technical Security & Policy Updates",
        content: [
          "SALI COMMODITIES implements advanced physical, electronic, and managerial security procedures (HTTPS / TLS 1.3 encryption, secure hosting infrastructure, strict access controls) to shield your data from accidental loss, destruction, alteration, or unauthorized disclosure.",
          "We reserve the right to revise this Privacy Policy at any time to reflect legislative, regulatory, or operational advancements. Any changes will be published on this page with an updated revision date."
        ]
      }
    ],
    contactBox: {
      title: "Questions Regarding Data Protection?",
      description: "Our compliance and data protection desk is at your disposal for any inquiry regarding your personal data.",
      emailLabel: "Email Desk",
      phoneLabel: "Phone",
      addressLabel: "Corporate Address"
    }
  },

  // ==========================================
  // FRANÇAIS
  // ==========================================
  FR: {
    badge: "JURIDIQUE & CONFORMITÉ",
    title: "Politique de Confidentialité & Protection des Données",
    subtitle: "Conditions générales régissant le traitement des données personnelles collectées via le site internet SALI Commodities et les formulaires LinkedIn Lead Generation.",
    lastUpdated: "Dernière mise à jour : Octobre 2026",
    backToHome: "Retour à l'accueil",
    intro: "SALI COMMODITIES, filiale spécialisée de SALI Capital Group, accorde une importance primordiale au respect de votre vie privée et à la protection des données personnelles de ses clients, prospects et partenaires commerciaux. La présente Politique de Confidentialité détaille les modalités de collecte, d'utilisation, de conservation et de sécurisation de vos données, conformément aux réglementations applicables, notamment le Règlement Général sur la Protection des Données (RGPD - UE 2016/679), la Loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, et les normes d'intégrité de LinkedIn Campaign Manager.",
    sections: [
      {
        title: "1. Identification du Responsable du Traitement",
        content: [
          "Le responsable du traitement de vos données personnelles est la société SALI COMMODITIES, société d'import-export spécialisée dans le négoce international agroalimentaire et les matières premières agricoles d'exception, filiale de SALI Capital Group.",
          "Siège social : Casablanca, Royaume du Maroc.",
          "Courriel officiel : contact@sali-commodities.com",
          "Téléphone : +212 6 61 37 39 37",
          "Site web : https://sali-commodities.com"
        ]
      },
      {
        title: "2. Données Personnelles Collectées",
        content: [
          "Nous collectons et traitons uniquement les informations strictement nécessaires à la conduite de nos activités commerciales B2B internationales :",
          "• Données transmises via les formulaires de génération de leads LinkedIn & formulaires du site : Nom et prénom, adresse électronique professionnelle, numéro de téléphone, dénomination de l'entreprise ou entité acheteuse, fonction ou profil professionnel (Distributeur, Importateur, Industriel, Courtier), pays ou marché de destination, produit d'intérêt, volumes sollicités et détails de la demande.",
          "• Données techniques et de navigation : Adresse IP, type de navigateur, système d'exploitation, pages consultées et données de session collectées via des témoins de connexion (cookies) et traceurs autorisés (notamment le LinkedIn Insight Tag)."
        ]
      },
      {
        title: "3. Finalités du Traitement",
        content: [
          "Vos données sont collectées et exploitées exclusivement pour répondre aux finalités suivantes :",
          "• Traitement et réponse à vos demandes de cotation, d'informations tarifaires et d'approvisionnement en matières premières agricoles.",
          "• Gestion de la relation commerciale B2B, établissement de contrats de vente et coordination des opérations d'exportation.",
          "• Suivi commercial des prospects ayant manifesté leur intérêt via nos campagnes institutionnelles et formulaires sponsorisés LinkedIn Lead Gen.",
          "• Respect des obligations légales, réglementaires, douanières et phytosanitaires inhérentes au commerce international.",
          "• Analyse statistique de fréquentation pour perfectionner nos services et la pertinence de nos échanges professionnels."
        ]
      },
      {
        title: "4. Bases Légales du Traitement",
        content: [
          "Le traitement de vos données personnelles repose sur les bases juridiques suivantes :",
          "• Votre Consentement Explicite : Exprimé lors de la soumission volontaire d'un formulaire de contact sur notre site ou d'un formulaire LinkedIn Lead Gen comportant le lien vers la présente politique.",
          "• L'Exécution de Mesures Précontractuelles ou Contractuelles : Nécessaire pour établir des offres commerciales, négocier et exécuter nos accords de fourniture.",
          "• L'Intérêt Légitime de SALI COMMODITIES : Dans le cadre du développement commercial B2B, de la prospection ciblée et de la sécurisation de nos échanges."
        ]
      },
      {
        title: "5. Durée de Conservation des Données",
        content: [
          "SALI COMMODITIES applique une politique stricte de conservation proportionnée :",
          "• Données de prospects et demandes commerciales : Conservées pendant une durée maximale de 3 ans à compter du dernier contact émanant du prospect.",
          "• Données clients et documents contractuels : Conservées pendant toute la durée de la relation d'affaires, puis archivées conformément aux délais légaux de prescription commerciale, comptable et douanière (5 à 10 ans selon la réglementation marocaine et internationale applicable).",
          "À l'issue de ces délais, les données sont définitivement supprimées ou anonymisées de manière irréversible."
        ]
      },
      {
        title: "6. Destinataires, Confidentialité et Transferts",
        content: [
          "La confidentialité de vos informations est rigoureusement préservée :",
          "• Aucune Commercialisation : Vos données personnelles ne sont en aucun cas vendues, louées, cédées ou échangées à des tiers.",
          "• Destinataires Internes : L'accès à vos données est strictement réservé aux équipes commerciales, logistiques et administratives habilitées de SALI COMMODITIES et de SALI Capital Group.",
          "• Sous-traitants et Partenaires Techniques : Les données peuvent être transmises à des prestataires de confiance (hébergeurs sécurisés, transitaires maritimes, sociétés d'inspection et de contrôle qualité telles que SGS ou Bureau Veritas) uniquement dans la mesure indispensable à l'exécution de vos commandes, sous couvert d'engagements de confidentialité conformes aux normes internationales."
        ]
      },
      {
        title: "7. Vos Droits et Modalités d'Exercice",
        content: [
          "Conformément au RGPD et à la loi 09-08, vous disposez des droits suivants à l'égard de vos données personnelles :",
          "• Droit d'Accès : Obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie lisible.",
          "• Droit de Rectification : Demander la correction ou mise à jour de données inexactes ou incomplètes.",
          "• Droit à l'Effacement (« Droit à l'Oubli ») : Obtenir la suppression de vos données, sous réserve des obligations légales de conservation.",
          "• Droit à la Limitation du Traitement : Demander le gel temporaire du traitement de vos données dans les cas prévus par la loi.",
          "• Droit d'Opposition : Vous opposer à tout moment à l'utilisation de vos coordonnées à des fins de prospection commerciale B2B.",
          "• Droit au Retrait du Consentement : Retirer votre consentement à tout moment, sans affecter la licéité des traitements antérieurs.",
          "Pour exercer l'un de ces droits, adressez votre demande écrite accompagnée d'un justificatif d'identité à : contact@sali-commodities.com."
        ]
      },
      {
        title: "8. Cookies & Balise LinkedIn Insight Tag",
        content: [
          "Notre site emploie des cookies techniques essentiels et des traceurs d'analyse pour mesurer son audience et optimiser ses campagnes professionnelles :",
          "• LinkedIn Insight Tag : Nous avons intégré la balise officielle LinkedIn Insight Tag (Partner ID : 9944714) éditée par LinkedIn Corporation. Ce traceur génère un pixel de suivi permettant à LinkedIn de collecter des métadonnées (URL, référent, adresse IP abrégée, caractéristiques du terminal) pour évaluer les performances de nos annonces et concevoir des audiences professionnelles qualifiées.",
          "• Données agrégées : LinkedIn ne transmet aucune donnée personnelle brute à SALI COMMODITIES mais uniquement des rapports statistiques consolidés. Les informations collectées par LinkedIn sont chiffrées et protégées selon la politique de confidentialité de LinkedIn (https://www.linkedin.com/legal/privacy-policy).",
          "• Désactivation : Tout membre de LinkedIn peut à tout moment paramétrer ou refuser le reciblage publicitaire directement depuis son compte LinkedIn dans la rubrique « Préférences relatives aux publicités »."
        ]
      },
      {
        title: "9. Sécurité des Données & Modifications",
        content: [
          "SALI COMMODITIES met en œuvre des mesures techniques et organisationnelles renforcées (chiffrement SSL/TLS 1.3, bases de données protégées, gestion stricte des habilitations internes) pour préserver l'intégrité, la disponibilité et la confidentialité de vos données contre toute intrusion ou altération.",
          "Nous nous réservons le droit de modifier la présente Politique de Confidentialité afin de refléter toute évolution réglementaire ou technique. Toute mise à jour sera immédiatement publiée sur cette page avec mention de sa date de révision."
        ]
      }
    ],
    contactBox: {
      title: "Une Question sur vos Données ?",
      description: "Notre bureau de conformité et de protection des données est à votre écoute pour toute demande d'exercice de droits ou clarification.",
      emailLabel: "Courriel",
      phoneLabel: "Téléphone",
      addressLabel: "Adresse du Siège"
    }
  },

  // ==========================================
  // ESPAÑOL
  // ==========================================
  ES: {
    badge: "LEGAL Y CUMPLIMIENTO",
    title: "Política de Privacidad y Protección de Datos",
    subtitle: "Términos generales sobre el tratamiento de datos personales recopilados a través del sitio web de SALI Commodities y los formularios de LinkedIn Lead Generation.",
    lastUpdated: "Última actualización: Octubre de 2026",
    backToHome: "Volver al inicio",
    intro: "SALI COMMODITIES, filial especializada de SALI Capital Group, otorga la máxima prioridad al respeto de su privacidad y a la protección de los datos personales de sus clientes, prospectos y socios comerciales. Esta Política de Privacidad detalla las condiciones bajo las cuales recopilamos, procesamos, almacenamos y aseguramos sus datos, en conformidad con el Reglamento General de Protección de Datos (RGPD - UE 2016/679), la Ley marroquí n.º 09-08 sobre la protección de las personas físicas respecto al tratamiento de datos personales, y los estándares de cumplimiento de LinkedIn Campaign Manager.",
    sections: [
      {
        title: "1. Identificación del Responsable del Tratamiento",
        content: [
          "El responsable del tratamiento de sus datos personales es SALI COMMODITIES, empresa de comercio exterior especializada en el aprovisionamiento y exportación de materias primas agroalimentarias premium, perteneciente a SALI Capital Group.",
          "Sede social: Casablanca, Reino de Marruecos.",
          "Correo electrónico oficial: contact@sali-commodities.com",
          "Teléfono: +212 6 61 37 39 37",
          "Sitio web: https://sali-commodities.com"
        ]
      },
      {
        title: "2. Datos Personales que Recopilamos",
        content: [
          "Recopilamos y tratamos únicamente la información estrictamente necesaria para nuestras operaciones comerciales internacionales B2B:",
          "• Datos facilitados a través de formularios LinkedIn Lead Gen y formularios web: Nombre y apellidos, correo electrónico corporativo, teléfono profesional, nombre de la empresa compradora, cargo o perfil profesional (Distribuidor, Importador, Procesador, Broker), país o mercado de destino, producto agroalimentario de interés, volúmenes requeridos y notas comerciales.",
          "• Datos técnicos y de navegación: Dirección IP, tipo de navegador, sistema operativo, páginas consultadas y datos de interacción recopilados mediante cookies y herramientas analíticas autorizadas (en particular, la etiqueta LinkedIn Insight Tag)."
        ]
      },
      {
        title: "3. Finalidades del Tratamiento",
        content: [
          "Sus datos son tratados exclusivamente para las siguientes finalidades legítimas de comercio exterior:",
          "• Responder a sus solicitudes de cotización comercial, especificaciones técnicas y suministro de productos agrícolas.",
          "• Gestionar la relación comercial B2B, negociación de acuerdos de compraventa y coordinación logística de exportación.",
          "• Dar seguimiento comercial a los contactos profesionales originados mediante nuestras campañas institucionales y formularios patrocinados de LinkedIn Lead Gen.",
          "• Cumplir con las normativas internacionales de aduanas, sanidad vegetal y requisitos fitosanitarios de exportación e importación.",
          "• Medir de forma agregada el tráfico y optimizar la experiencia de navegación en nuestra plataforma."
        ]
      },
      {
        title: "4. Base Legal del Tratamiento",
        content: [
          "El tratamiento de sus datos personales se sustenta en:",
          "• Su Consentimiento Expreso: Otorgado al enviar un formulario en nuestro sitio web o al remitir un formulario LinkedIn Lead Gen vinculado a esta política.",
          "• Medidas Precontractuales y Contractuales: Necesarias para elaborar ofertas de exportación, redactar contratos de compraventa y fletamento.",
          "• Interés Legítimo Empresarial: Dirigido a la prospección comercial B2B, prevención del fraude y aseguramiento de las comunicaciones corporativas."
        ]
      },
      {
        title: "5. Plazo de Conservación de Datos",
        content: [
          "SALI COMMODITIES conserva sus datos durante plazos justificados y estrictos:",
          "• Datos de prospectos y cotizaciones: Conservados durante un máximo de 3 años desde el último contacto activo registrado.",
          "• Datos de clientes y contratos mercantiles: Conservados durante la vigencia de la relación comercial y posteriormente durante los plazos legales de prescripción mercantil, contable y aduanera aplicables (entre 5 y 10 años).",
          "Transcurridos estos plazos, los datos se eliminan de manera segura o se anonimizan de forma irreversible."
        ]
      },
      {
        title: "6. Destinatarios, Confidencialidad y Transferencias",
        content: [
          "Garantizamos la estricta confidencialidad de su información corporativa:",
          "• Sin Venta de Datos: Bajo ninguna circunstancia vendemos, alquilamos ni comercializamos sus datos personales con terceros.",
          "• Acceso Restringido: Únicamente accede el personal comercial, logístico y administrativo autorizado de SALI COMMODITIES y SALI Capital Group.",
          "• Proveedores Técnicos y Logísticos Verificados: Sus datos pueden comunicarse a empresas colaboradoras indispensables (servidores seguros, agentes de aduanas, navieras y entidades de inspección de calidad como SGS o Bureau Veritas) exclusivamente para ejecutar sus pedidos, bajo acuerdos de estricta confidencialidad conformes a los estándares internacionales."
        ]
      },
      {
        title: "7. Sus Derechos y Cómo Ejercerlos",
        content: [
          "Conforme al RGPD y a la legislación de protección de datos, usted ostenta los siguientes derechos:",
          "• Derecho de Acceso: Conocer si estamos tratando sus datos y obtener una copia de los mismos.",
          "• Derecho de Rectificación: Solicitar la corrección o actualización de datos incompletos o inexactos.",
          "• Derecho de Supresión ('Derecho al Olvido'): Solicitar la eliminación de sus datos cuando ya no sean requeridos.",
          "• Derecho de Oposición: Oponerse en cualquier momento a comunicaciones de prospección comercial B2B.",
          "• Derecho a la Limitación del Tratamiento: Solicitar la restricción temporal del uso de sus datos en supuestos legales.",
          "• Derecho a Revocar el Consentimiento: Retirar su consentimiento en cualquier momento sin efectos retroactivos.",
          "Para ejercer cualquiera de estos derechos, remita una solicitud escrita acompañada de un documento identificativo a: contact@sali-commodities.com."
        ]
      },
      {
        title: "8. Cookies y Etiqueta LinkedIn Insight Tag",
        content: [
          "Nuestro sitio web utiliza cookies técnicas y herramientas analíticas profesionales:",
          "• LinkedIn Insight Tag: Hemos incorporado la etiqueta oficial LinkedIn Insight Tag (Partner ID: 9944714) de LinkedIn Corporation. Este código genera un píxel que permite a LinkedIn registrar metadatos de navegación (URL, referente, dirección IP abreviada y parámetros técnicos) para evaluar el impacto de nuestras campañas y configurar audiencias comerciales B2B agregadas.",
          "• Datos agregados: LinkedIn no entrega datos personales en bruto a SALI COMMODITIES, sino métricas estadísticas anónimas. El tratamiento de LinkedIn está regulado por su propia política de privacidad (https://www.linkedin.com/legal/privacy-policy).",
          "• Desactivación: Los miembros de LinkedIn pueden gestionar o desactivar el seguimiento publicitario en cualquier momento desde su perfil de LinkedIn en 'Preferencias de publicidad'."
        ]
      },
      {
        title: "9. Seguridad Técnica y Modificaciones",
        content: [
          "SALI COMMODITIES aplica rigurosos protocolos de seguridad tecnológica (cifrado SSL/TLS 1.3, bases de datos protegidas y control de accesos) para salvaguardar sus datos frente a accesos no autorizados, pérdidas o alteraciones.",
          "Nos reservamos el derecho de actualizar esta Política de Privacidad para adecuarla a futuras exigencias legislativas o comerciales. Cualquier modificación será publicada de forma inmediata en esta página con indicación de su fecha de revisión."
        ]
      }
    ],
    contactBox: {
      title: "¿Preguntas sobre sus Datos Personales?",
      description: "Nuestro departamento de cumplimiento y protección de datos está a su disposición para resolver cualquier duda o gestionar sus solicitudes.",
      emailLabel: "Correo Electrónico",
      phoneLabel: "Teléfono",
      addressLabel: "Dirección de la Sede"
    }
  }
};
