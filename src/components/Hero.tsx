import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenVideo?: () => void;
  onDiscover: () => void;
}

export default function Hero({ onDiscover }: HeroProps) {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <section id="accueil" className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 lg:pt-32 pb-10 overflow-hidden">
      {/* Background Hero Image with Optimized Mobile Focal Point */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="SALI Commodities agricultural partner"
          className="w-full h-[calc(100%+160px)] sm:h-full object-cover object-[75%_0%] sm:object-center lg:object-right-top filter brightness-[1.03] -translate-y-[160px] sm:translate-y-0 transition-transform duration-300"
        />
        {/* Subtle Dark Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e18]/70 via-[#0c1828]/35 to-transparent sm:from-[#070e18]/90 sm:via-[#0c1828]/65 lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e18]/95 via-[#070e18]/45 via-45% to-transparent sm:from-[#070e18]/90 sm:via-[#070e18]/30 sm:to-black/20" />
      </div>

      {/* Main Content Area - Anchored at bottom on mobile to leave vest logo completely clear */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto mb-4 sm:my-auto pt-0 sm:pt-12 lg:py-16">
        <div className="max-w-xs sm:max-w-xl lg:max-w-2xl">
          {/* Category Tag */}
          <div className="ae ae-up inline-flex items-center gap-2 mb-3 sm:mb-4" data-d="1">
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#3ecfa6] uppercase">
              {hero.tag}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="ae ae-up text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-4 sm:mb-5" data-d="1.5">
            {hero.titleLine1} <br />
            {hero.titleLine2}{' '}
            <span className="text-[#3ecfa6] drop-shadow-sm">
              {hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="ae ae-up text-xs sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 sm:mb-8 max-w-lg" data-d="2">
            {hero.subtitle}
          </p>

          {/* Call to Actions */}
          <div className="ae ae-up flex flex-wrap items-center gap-4 sm:gap-5" data-d="2.5">
            <button
              onClick={onDiscover}
              className="inline-flex items-center gap-2.5 bg-[#1d9878] hover:bg-[#188065] text-white text-xs sm:text-sm font-semibold px-6 py-3 sm:px-7 sm:py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-emerald-900/30 hover:shadow-xl hover:translate-x-0.5 group"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Indicators */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-center pt-5 border-t border-white/15 text-xs text-white/80 font-medium">
          {/* Corridors Flow */}
          <div className="flex items-center gap-2 tracking-wide">
            <span className="text-slate-300">{hero.corridors[0]}</span>
            <span className="text-[#3ecfa6]">→</span>
            <span className="text-slate-300">{hero.corridors[1]}</span>
            <span className="text-[#3ecfa6]">→</span>
            <span className="font-bold text-white">{hero.corridors[2]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
