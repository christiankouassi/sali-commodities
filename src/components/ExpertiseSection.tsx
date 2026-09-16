import React, { useState } from 'react';
import { 
  Layers, 
  Users, 
  Truck, 
  ShieldCheck, 
  Package, 
  Award, 
  Scale, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';
import { SITE_CONTENT, ServiceItem } from '../data/content';

export default function ExpertiseSection() {
  const { services } = SITE_CONTENT;
  const [activeService, setActiveService] = useState<string>(services[0].id);

  const getServiceIcon = (iconName: string) => {
    const className = "w-5 h-5";
    switch (iconName) {
      case 'layers': return <Layers className={className} />;
      case 'users': return <Users className={className} />;
      case 'truck': return <Truck className={className} />;
      case 'shieldCheck': return <ShieldCheck className={className} />;
      case 'package': return <Package className={className} />;
      case 'award': return <Award className={className} />;
      case 'scale': return <Scale className={className} />;
      case 'trendingUp': return <TrendingUp className={className} />;
      case 'checkCircle2': return <CheckCircle2 className={className} />;
      default: return <Layers className={className} />;
    }
  };

  const currentService = services.find(s => s.id === activeService) || services[0];

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-[#f8fafc] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-[#1d9878] uppercase mb-2 inline-block">
            NOS SERVICES DE BOUT EN BOUT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1c2c46] tracking-tight leading-tight mb-4">
            Une expertise intégrée pour vos opérations d'import-export
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Nous orchestrons l'approvisionnement, la certification de conformité et l'expédition de matières agro-alimentaires d'exception vers vos plateformes internationales, en marque blanche ou sous votre propre marque.
          </p>
        </div>

        {/* 9 Services Interactive Grid / Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {services.map((service) => {
              const isSelected = service.id === activeService;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3.5 ${
                    isSelected
                      ? 'bg-[#1c2c46] text-white border-[#1c2c46] shadow-md'
                      : 'bg-white text-[#1c2c46] border-slate-200/70 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'bg-white/15 text-[#3ecfa6]' : 'bg-emerald-50 text-[#1d9878]'
                  }`}>
                    {getServiceIcon(service.icon)}
                  </span>
                  <span className="text-xs sm:text-sm font-bold tracking-tight">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Points Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#1d9878]">
                {getServiceIcon(currentService.icon)}
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#1d9878] uppercase tracking-wider block">
                  Service SALI Commodities
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1c2c46]">
                  {currentService.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Engagements & prestations incluses :
            </p>

            <ul className="space-y-3.5">
              {currentService.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#1d9878] flex-shrink-0 mt-1" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Accompagnement personnalisé sur mesure
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1d9878] hover:text-[#146c55] transition-colors"
              >
                <span>Demander une cotation pour ce service →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
