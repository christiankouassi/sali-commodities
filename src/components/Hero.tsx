import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenVideo: () => void;
  onDiscover: () => void;
}

export default function Hero({ onOpenVideo, onDiscover }: HeroProps) {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <section id="accueil" className="relative min-h-[100dvh] sm:min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-20 sm:pt-36 lg:pt-32 pb-4 sm:pb-8 overflow-hidden bg-[#070e18]">
      {/* Background Hero Image - Static 100% natural image with zero zoom */}
      <div className="absolute inset-0 z-0 bg-[#070e18]">
        <img
          src="/images/hero.png"
          alt="SALI Commodities agricultural partner"
          className="w-full h-full object-cover object-[72%_top] sm:object-[72%_center] lg:object-right-top filter brightness-[1.05]"
        />
        {/* Targeted Gradient Overlay - Dark behind text at bottom-left, 0% wash on top-right farmer & logo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#070e18]/90 via-[#070e18]/30 via-35% to-transparent sm:from-[#070e18]/90 sm:via-[#0c1828]/65 lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e18] via-[#070e18]/70 via-35% to-transparent sm:from-[#070e18]/90 sm:via-[#070e18]/30 sm:to-black/20" />
      </div>

      {/* Main Content Area - Anchored cleanly at bottom of screen below vest logo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto mb-2 sm:my-auto pt-0 sm:pt-12 lg:py-16">
        <div className="max-w-xs sm:max-w-xl lg:max-w-2xl">
          {/* Category Tag */}
          <div className="ae ae-up inline-flex items-center gap-2 mb-2 sm:mb-4" data-d="1">
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#3ecfa6] uppercase">
              {hero.tag}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="ae ae-up text-xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.18] tracking-tight mb-3 sm:mb-5" data-d="1.5">
            {hero.titleLine1} <br />
            {hero.titleLine2}{' '}
            <span className="text-[#3ecfa6] drop-shadow-sm">
              {hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="ae ae-up text-xs sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-5 sm:mb-8 max-w-lg" data-d="2">
            {hero.subtitle}
          </p>

          {/* Call to Actions */}
          <div className="ae ae-up flex flex-wrap items-center gap-2.5 sm:gap-4" data-d="2.5">
            <button
              onClick={onDiscover}
              className="inline-flex items-center gap-2 bg-[#1d9878] hover:bg-[#188065] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-emerald-900/30 hover:shadow-xl hover:translate-x-0.5 group"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Watch Video Button */}
            {hero.ctaSecondary && (
              <button
                onClick={onOpenVideo}
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full backdrop-blur-md border border-white/25 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white text-[#1c2c46] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-2 h-2 sm:w-3 sm:h-3 fill-[#1c2c46] translate-x-0.5" />
                </div>
                <span>{hero.ctaSecondary}</span>
              </button>
            )}
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
