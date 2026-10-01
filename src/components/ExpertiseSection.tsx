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
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ExpertiseSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ExpertiseSection({ onSelectService }: ExpertiseSectionProps) {
  const { lang, t } = useLanguage();
  const { services, servicesHeading } = t;
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0]?.id || 'sourcing');

  const sectionRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

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

  // Scroll-driven section pinning: track progress inside sectionRef
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      // rect.top is 0 when top of section reaches top of viewport
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      const index = Math.min(
        services.length - 1,
        Math.floor(progress * services.length)
      );

      const targetService = services[index];
      if (targetService && targetService.id !== activeServiceId) {
        setActiveServiceId(targetService.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services, activeServiceId]);

  // Center active tab automatically on horizontal scrollbar (mobile)
  useEffect(() => {
    if (!tabsRef.current) return;
    const activeIdx = services.findIndex(s => s.id === activeServiceId);
    if (activeIdx !== -1 && tabsRef.current.children[activeIdx]) {
      const activeTab = tabsRef.current.children[activeIdx] as HTMLElement;
      activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeServiceId, services]);

  const activeIndex = Math.max(0, services.findIndex(s => s.id === activeServiceId));
  const activeService = services[activeIndex] || services[0];

  // Function to programmatically scroll page to the exact step offset of target card index
  const scrollToCardIndex = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;
    const totalScrollable = rect.height - window.innerHeight;

    const targetProgress = (index + 0.5) / services.length;
    const targetScroll = sectionTop + targetProgress * totalScrollable;

    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    setActiveServiceId(services[index].id);
  };

  const handleContactClick = (serviceTitle?: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle || activeService.title);
    }
  };

  const goToPrev = () => {
    const prevIdx = activeIndex === 0 ? services.length - 1 : activeIndex - 1;
    scrollToCardIndex(prevIdx);
  };

  const goToNext = () => {
    const nextIdx = activeIndex === services.length - 1 ? 0 : activeIndex + 1;
    scrollToCardIndex(nextIdx);
  };

  const contactButtonText = lang === 'EN' ? 'Inquire About This Service' : lang === 'ES' ? 'Consultar sobre este servicio' : 'Nous contacter pour ce service';
  const selectedServiceLabel = lang === 'EN' ? 'Selected Service:' : lang === 'ES' ? 'Servicio seleccionado:' : 'Service sélectionné :';
  const requestServiceText = lang === 'EN' ? 'Quote' : lang === 'ES' ? 'Cotizar' : 'Devis';

  return (
    <section 
      id="expertise" 
      ref={sectionRef} 
      className="relative h-[450vh] sm:h-[500vh] lg:h-[450vh] bg-[#f8fafc] border-t border-slate-100"
    >
      {/* Sticky viewport frame that locks on screen while user scrolls through the 9 cards */}
      <div className="sticky top-16 sm:top-20 h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] flex items-center overflow-hidden py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* ========================================================
              MOBILE DEDICATED LAYOUT (lg:hidden)
              Pinned view: Header + Tabs + Active Card (1/9 to 9/9)
              ======================================================== */}
          <div className="lg:hidden flex flex-col justify-center max-h-full">
            {/* Section Header */}
            <div className="mb-4 ae ae-left">
              <span className="text-[11px] font-bold tracking-widest text-[#1d9878] uppercase mb-1 inline-block">
                {servicesHeading.tag}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-tight text-[#1c2c46] mb-1.5">
                {servicesHeading.title}
              </h2>
              <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-2">
                {servicesHeading.subtitle}
              </p>
            </div>

            {/* Horizontal Tabs Bar */}
            <div className="mb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div 
                ref={tabsRef}
                className="flex items-center gap-2 overflow-x-auto pb-1.5 no-scrollbar scroll-smooth"
              >
                {services.map((service, index) => {
                  const isSelected = service.id === activeServiceId;
                  return (
                    <button
                      key={service.id}
                      onClick={() => scrollToCardIndex(index)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all ${
                        isSelected
                          ? 'bg-[#1d9878] text-white shadow-md shadow-emerald-900/20 scale-[1.02]'
                          : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-white/90' : 'text-[#1d9878]'}`}>
                        0{index + 1}
                      </span>
                      <span className="max-w-[120px] truncate">{service.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Progress Bar Line */}
            <div className="w-full bg-slate-200 h-1 rounded-full mb-3 overflow-hidden">
              <div 
                className="bg-[#1d9878] h-full transition-all duration-300 ease-out"
                style={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}
              />
            </div>

            {/* Single Dynamic Active Service Card */}
            <div 
              key={activeService.id}
              className="bg-[#1c2c46] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-white/10 ring-1 ring-[#1d9878]/30 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-white/15">
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 text-[#3ecfa6] flex items-center justify-center flex-shrink-0">
                    {getServiceIcon(activeService.icon || activeService.id, true)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono font-bold text-[#3ecfa6] uppercase tracking-wider block">
                      0{activeIndex + 1} • {servicesHeading.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold leading-snug text-white truncate">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => handleContactClick(activeService.title)}
                  className="text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1d9878] text-white hover:bg-[#158064] transition-all flex items-center gap-1 flex-shrink-0 shadow-sm"
                >
                  <span>{requestServiceText}</span>
                  <ArrowRight className="w-3 h-3 flex-shrink-0" />
                </button>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2 mb-4 max-h-[220px] overflow-y-auto pr-1">
                {activeService.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3ecfa6] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Footer: Contact CTA & Stepper Navigation */}
              <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleContactClick(activeService.title)}
                  className="text-[11px] font-semibold text-[#3ecfa6] hover:text-white transition-colors flex items-center gap-1"
                >
                  <span className="truncate max-w-[150px]">{contactButtonText}</span>
                  <ArrowRight className="w-3 h-3 flex-shrink-0" />
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={goToPrev}
                    aria-label="Previous service"
                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono font-bold text-slate-300 px-1">
                    {activeIndex + 1}/{services.length}
                  </span>
                  <button
                    onClick={goToNext}
                    aria-label="Next service"
                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              DESKTOP DEDICATED LAYOUT (hidden lg:grid)
              Fixed left column + Animated active card right column
              ======================================================== */}
          <div className="hidden lg:grid grid-cols-12 gap-12 items-center w-full">
            
            {/* Left Column: Fixed Header & Section Info */}
            <div className="lg:col-span-5 ae ae-left">
              <span className="text-xs font-bold tracking-widest text-[#1d9878] uppercase mb-2 inline-block">
                {servicesHeading.tag}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#1c2c46] mb-4">
                {servicesHeading.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                {servicesHeading.subtitle}
              </p>

              {/* Progress Indicator */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex-1 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-[#1d9878] h-full transition-all duration-300 ease-out"
                    style={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-mono font-bold text-[#1d9878] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  {activeIndex + 1} / {services.length}
                </span>
              </div>

              {/* Contact button */}
              <button
                onClick={() => handleContactClick(activeService.title)}
                className="inline-flex items-center justify-center gap-2.5 bg-[#1c2c46] hover:bg-[#121f33] text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group mb-4"
              >
                <span>{contactButtonText}</span>
                <ArrowRight className="w-4 h-4 text-[#3ecfa6] transition-transform group-hover:translate-x-1" />
              </button>

              {/* Selected Service Label */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500">{selectedServiceLabel}</span>
                <span className="text-xs font-bold text-[#1d9878] bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                  {activeService.title}
                </span>
              </div>
            </div>

            {/* Right Column: Active Card + Navigation List */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Highlighted Active Service Card */}
              <div 
                key={activeService.id}
                className="bg-[#1c2c46] text-white rounded-3xl p-7 shadow-2xl border border-white/10 ring-2 ring-[#1d9878]/40 transition-all duration-500 transform scale-[1.01]"
              >
                <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-white/15">
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 text-[#3ecfa6] flex items-center justify-center flex-shrink-0">
                      {getServiceIcon(activeService.icon || activeService.id, true)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-mono font-bold text-[#3ecfa6] uppercase tracking-wider block">
                        0{activeIndex + 1} • {servicesHeading.tag}
                      </span>
                      <h3 className="text-xl font-bold leading-snug text-white">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => handleContactClick(activeService.title)}
                    className="text-xs font-semibold px-4 py-2 rounded-full bg-[#1d9878] text-white hover:bg-[#158064] transition-all flex items-center gap-1.5 flex-shrink-0 shadow-sm"
                  >
                    <span>{requestServiceText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3 mb-6">
                  {activeService.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#3ecfa6] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Bottom Navigation Stepper */}
                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-slate-300">
                    Card {activeIndex + 1} of {services.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={goToPrev}
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Service Tabs Grid for quick jumps */}
              <div className="grid grid-cols-3 gap-2 mt-1">
                {services.map((service, index) => {
                  const isSelected = service.id === activeServiceId;
                  return (
                    <button
                      key={service.id}
                      onClick={() => scrollToCardIndex(index)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all text-left truncate ${
                        isSelected
                          ? 'bg-[#1d9878] text-white shadow-md shadow-emerald-900/10'
                          : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`text-[10px] font-mono font-bold flex-shrink-0 ${isSelected ? 'text-white/90' : 'text-[#1d9878]'}`}>
                        0{index + 1}
                      </span>
                      <span className="truncate">{service.title}</span>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
