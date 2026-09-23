import React from 'react';
import { X, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NetworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

export default function NetworkModal({ isOpen, onClose, onContact }: NetworkModalProps) {
  const { lang, t } = useLanguage();
  const { networkModal } = t;

  if (!isOpen) return null;

  const hubs = [
    {
      name: lang === 'EN' ? "Morocco (Central Hub - SALI Commodities)" : lang === 'ES' ? "Marruecos (Hub Central - SALI Commodities)" : "Maroc (Hub Central - SALI Commodities)",
      role: lang === 'EN' ? "Pivot export platform & prime agricultural sourcing (Casablanca / Agadir)" : lang === 'ES' ? "Plataforma pivotante de exportación y aprovisionamiento agrícola (Casablanca / Agadir)" : "Plateforme pivot & sourcing agricole d'exception (Casablanca / Agadir)",
      flows: lang === 'EN' ? "Direct export routes to Europe, Russia, Asia, and the Americas" : lang === 'ES' ? "Rutas de exportación directa a Europa, Rusia, Asia y las Américas" : "Hub export vers l'Europe, la Russie, l'Asie et les Amériques"
    },
    {
      name: lang === 'EN' ? "Europe" : lang === 'ES' ? "Europa" : "Europe",
      role: lang === 'EN' ? "Demanding consumer and supermarket wholesale platforms" : lang === 'ES' ? "Mercados exigentes de consumo y centrales de compra mayoristas" : "Marchés de consommation exigeants et centrales d'achat",
      flows: lang === 'EN' ? "Short-sea shipping and road freight with guaranteed cold chain" : lang === 'ES' ? "Transporte marítimo de corta distancia y por carretera con cadena de frío" : "Liaisons maritimes et routières directes en flux tendu"
    },
    {
      name: lang === 'EN' ? "Russia" : lang === 'ES' ? "Rusia" : "Russie",
      role: lang === 'EN' ? "Strategic large-scale wholesale produce distribution hub" : lang === 'ES' ? "Hub estratégico de distribución mayorista de frutas y hortalizas" : "Plateforme d'importation et de distribution de produits frais",
      flows: lang === 'EN' ? "Citrus, tomatoes, and canned commodities via direct maritime corridors" : lang === 'ES' ? "Cítricos, tomates y conservas a través de corredores marítimos" : "Agrumes, maraîchage et conserves par corridors maritimes directs"
    },
    {
      name: lang === 'EN' ? "Hong Kong & Asia" : lang === 'ES' ? "Hong Kong y Asia" : "Hong-Kong & Asie",
      role: lang === 'EN' ? "Dynamic gateway to high-value consumer Asian trading networks" : lang === 'ES' ? "Puerta de entrada estratégica a los mercados asiáticos de alto valor" : "Carrefour stratégique vers les marchés d'Asie",
      flows: lang === 'EN' ? "Air and reefer ocean container shipments for specialty berries and cocoa" : lang === 'ES' ? "Envíos aéreos y contenedores reefer de frutos rojos y derivados de cacao" : "Expéditions maritimes et aériennes pour baies fraîches et dérivés de cacao"
    },
    {
      name: lang === 'EN' ? "West Africa" : lang === 'ES' ? "África Occidental" : "Afrique de l'Ouest",
      role: lang === 'EN' ? "Prime tropical production basin (Côte d'Ivoire, Senegal)" : lang === 'ES' ? "Cuenca de producción tropical de alta calidad (Costa de Marfil, Senegal)" : "Bassin de production tropicale de haute qualité (Côte d'Ivoire, Sénégal)",
      flows: lang === 'EN' ? "Ethical cocoa derivatives, avocados, cashews, and tropical fruits" : lang === 'ES' ? "Derivados de cacao ético, aguacates, anacardos y frutos secos" : "Cacao éthique, avocats, anacarde et denrées vivrières"
    },
    {
      name: lang === 'EN' ? "United States" : lang === 'ES' ? "Estados Unidos" : "États-Unis",
      role: lang === 'EN' ? "Major North American retail and gourmet foodservice accounts" : lang === 'ES' ? "Grandes cuentas de distribución gourmet y supermercados en Norteamérica" : "Centrales d'achat et distributeurs spécialisés nord-américains",
      flows: lang === 'EN' ? "Extra virgin olive oil, IQF fruits, and packaged specialties" : lang === 'ES' ? "Aceite de oliva virgen extra, frutas IQF y conservas premium" : "Huile d'olive extra-vierge, fruits IQF et spécialités terroir"
    }
  ];

  const guaranteesTitle = lang === 'EN' ? "Our Global Trade & Logistics Guarantees" : lang === 'ES' ? "Nuestras Garantías en el Comercio Internacional" : "Nos garanties sur les flux internationaux";
  const guarantees = [
    lang === 'EN' ? "On-site quality supervision during harvest, sorting, packing, and container loading" : lang === 'ES' ? "Supervisión técnica presencial durante cosecha, calibrado y consolidación en contenedor" : "Supervision sur site lors de la récolte, du tri et de l'empotage",
    lang === 'EN' ? "Full phytosanitary inspection, origin certifications, and compliant customs clearance documentation" : lang === 'ES' ? "Certificados fitosanitarios y documentación de aduanas homologada para cada país de destino" : "Certificats phytosanitaires et de conformité aux douanes des pays de destination",
    lang === 'EN' ? "Strict unbroken cold chain tracking for highly perishable fresh commodities" : lang === 'ES' ? "Control estricto e ininterrumpido de la cadena de frío para productos perecederos" : "Chaîne du froid ininterrompue pour les denrées hautement périssables"
  ];

  const ctaText = lang === 'EN' ? "Join Our Trade Network" : lang === 'ES' ? "Unirse a Nuestra Red" : "Rejoindre notre réseau";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1c2c46] text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#3ecfa6] uppercase tracking-wider block mb-1">
              SALI Commodities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              {networkModal.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label={networkModal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            {networkModal.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hubs.map((hub, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#1d9878]" />
                  <h4 className="text-sm font-bold text-[#1c2c46]">{hub.name}</h4>
                </div>
                <p className="text-xs text-slate-600 font-medium mb-1">{hub.role}</p>
                <p className="text-xs text-slate-500">{hub.flows}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100">
            <h5 className="text-xs font-bold text-[#1d9878] uppercase tracking-wider mb-2">
              {guaranteesTitle}
            </h5>
            <ul className="text-xs text-slate-700 space-y-2">
              {guarantees.map((item, gIdx) => (
                <li key={gIdx} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#1d9878] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-medium text-slate-500 hover:text-slate-700"
            >
              {networkModal.close}
            </button>
            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="inline-flex items-center gap-2 bg-[#1c2c46] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#121f33] transition-colors"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3ecfa6]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
