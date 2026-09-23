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
import { useLanguage } from '../context/LanguageContext';

interface ExpertiseSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ExpertiseSection({ onSelectService }: ExpertiseSectionProps) {
  const { lang, t } = useLanguage();
  const { services, servicesHeading } = t;
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0]?.id || 'sourcing');
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const getServiceIcon = (serviceIdOrIcon: string, isWhite: boolean = false) => {
    const className = `w-5 h-5 ${isWhite ? 'text-[#3ecfa6]' : 'text-[#1d9878]'}`;
    switch (serviceIdOrIcon) {
      case 'sourcing':
      case 'layers': return <Layers className={className} />;
      case 'commercial':
      case 'users': return <Users className={className} />;
      case 'logistics':
      case 'truck': return <Truck className={className} />;
      case 'quality':
      case 'shieldCheck': return <ShieldCheck className={className} />;
      case 'storage':
      case 'package': return <Package className={className} />;
      case 'brand':
      case 'award': return <Award className={className} />;
      case 'admin':
      case 'scale': return <Scale className={className} />;
      case 'consulting':
      case 'trendingUp': return <TrendingUp className={className} />;
      case 'digital':
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

  const contactButtonText = lang === 'EN' ? 'Inquire About This Service' : lang === 'ES' ? 'Consultar sobre este servicio' : 'Nous contacter pour ce service';
  const selectedServiceLabel = lang === 'EN' ? 'Selected Service:' : lang === 'ES' ? 'Servicio seleccionado:' : 'Service sélectionné :';
  const requestServiceText = lang === 'EN' ? 'Request this service' : lang === 'ES' ? 'Solicitar este servicio' : 'Demander ce service';

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-[#f8fafc] border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Layout: Left Sticky Header & Action / Right 9 Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start ae ae-left" data-d="1">
            <span className="text-xs font-bold tracking-widest text-[#1d9878] uppercase mb-2 inline-block">
              {servicesHeading.tag}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#1c2c46] mb-5">
              {servicesHeading.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
              {servicesHeading.subtitle}
            </p>

            {/* Pre-filled contact button */}
            <button
              onClick={() => handleContactClick(activeService.title)}
              className="inline-flex items-center justify-center gap-2.5 bg-[#1c2c46] hover:bg-[#121f33] text-white text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>{contactButtonText}</span>
              <ArrowRight className="w-4 h-4 text-[#3ecfa6] transition-transform group-hover:translate-x-1" />
            </button>

            {/* Current Active Service Indicator */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-500">{selectedServiceLabel}</span>
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
                        {getServiceIcon(service.icon || service.id, isActive)}
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                          isActive ? 'text-[#3ecfa6]' : 'text-[#1d9878]'
                        }`}>
                          0{index + 1}
                        </span>
                        <h3 className={`text-base sm:text-lg font-bold ${
                          isActive ? 'text-white' : 'text-[#1c2c46]'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleContactClick(service.title);
                      }}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 flex-shrink-0 ${
                        isActive
                          ? 'bg-[#1d9878] text-white hover:bg-[#158064]'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <span>{requestServiceText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isActive ? 'text-[#3ecfa6]' : 'text-[#1d9878]'
                        }`} />
                        <span className={isActive ? 'text-slate-200' : 'text-slate-600'}>
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
