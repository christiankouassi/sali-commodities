import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  Users, 
  Truck, 
  ShieldCheck, 
  Package, 
  Award, 
  Scale, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { SITE_CONTENT, ServiceItem } from '../data/content';

interface ExpertiseSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ExpertiseSection({ onSelectService }: ExpertiseSectionProps) {
  const { services } = SITE_CONTENT;
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const getServiceIcon = (iconName: string, isWhite: boolean = false) => {
    const className = `w-5 h-5 ${isWhite ? 'text-[#3ecfa6]' : 'text-[#1d9878]'}`;
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

  // ScrollSpy to track active card
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-service-id');
            if (id) {
              setActiveServiceId(id);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.2
      }
    );

    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [services]);

  const activeService = services.find(s => s.id === activeServiceId) || services[0];

  const handleContactClick = (serviceTitle?: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle || activeService.title);
    }
  };

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-[#f8fafc] border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Layout: Left Sticky Header & Action / Right 9 Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Title "Nos services", exact requested text, and "Nous contacter pour ce service" button */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start ae ae-left" data-d="1">
            <span className="text-xs font-bold tracking-widest text-[#1d9878] uppercase mb-2 inline-block">
              NOS SERVICES
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#1c2c46] mb-5">
              Nos services
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
              Nous orchestrons de bout en bout l'approvisionnement, la certification de conformité et l'expédition de matières agro-alimentaires d'exception vers vos plateformes. Le tout reposant sur un réseau d'origine agile et une logistique internationale éprouvée. L’ensemble de nos services internalisés ou externalisés avec des partenaires de confiance.
            </p>

            {/* Pre-filled contact button */}
            <button
              onClick={() => handleContactClick(activeService.title)}
              className="inline-flex items-center justify-center gap-2.5 bg-[#1c2c46] hover:bg-[#121f33] text-white text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>Nous contacter pour ce service</span>
              <ArrowRight className="w-4 h-4 text-[#3ecfa6] transition-transform group-hover:translate-x-1" />
            </button>

            {/* Current Active Service Indicator */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-500">Service sélectionné :</span>
              <span className="text-xs font-bold text-[#1d9878] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                {activeService.title}
              </span>
            </div>
          </div>

          {/* Right Column: The 9 Service Cards */}
          <div className="lg:col-span-7 space-y-5 ae ae-up" data-d="1.5">
            {services.map((service, index) => {
              const isActive = service.id === activeServiceId;

              return (
                <div
                  key={service.id}
                  data-service-id={service.id}
                  ref={(el) => { cardRefs.current[service.id] = el; }}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`rounded-3xl p-6 sm:p-7 border transition-all duration-500 cursor-pointer transform ${
                    isActive
                      ? 'bg-[#1c2c46] text-white border-[#1c2c46] shadow-2xl scale-[1.01] ring-2 ring-[#1d9878]/40'
                      : 'bg-white text-slate-700 border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-white/15">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? 'bg-white/10 border border-white/20 text-[#3ecfa6]'
                          : 'bg-emerald-50 border border-emerald-100 text-[#1d9878]'
                      }`}>
                        {getServiceIcon(service.icon, isActive)}
                      </div>
                      <div>
                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase block ${
                          isActive ? 'text-[#3ecfa6]' : 'text-slate-400'
                        }`}>
                          {String(index + 1).padStart(2, '0')} • EXPERTISE
                        </span>
                        <h3 className={`text-base sm:text-lg font-bold tracking-tight ${
                          isActive ? 'text-white' : 'text-[#1c2c46]'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full transition-colors ${
                      isActive ? 'bg-[#3ecfa6] text-[#0f1f18]' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {isActive ? 'Actif' : `Étape ${index + 1}`}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-4">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isActive ? 'text-[#3ecfa6]' : 'text-[#1d9878]'
                        }`} />
                        <span className={isActive ? 'text-slate-200 font-normal' : 'text-slate-600'}>
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Direct Card Action Button */}
                  <div className="pt-3 border-t border-white/15 flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleContactClick(service.title);
                      }}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors ${
                        isActive ? 'text-[#3ecfa6] hover:text-white' : 'text-[#1d9878] hover:text-[#1c2c46]'
                      }`}
                    >
                      <span>Demander une cotation pour ce service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
