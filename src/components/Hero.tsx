import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

interface HeroProps {
  onOpenVideo: () => void;
  onDiscover: () => void;
}

export default function Hero({ onOpenVideo, onDiscover }: HeroProps) {
  const { hero } = SITE_CONTENT;

  return (
    <section id="accueil" className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 lg:pt-28 pb-12 overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Producteur agricole SALI Commodities"
          className="w-full h-full object-cover object-center lg:object-right-top filter brightness-[0.92]"
        />
        {/* Subtle Dark Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070e18]/85 via-[#0c1828]/60 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e18]/80 via-transparent to-black/20" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 lg:py-20">
        <div className="max-w-2xl">
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold tracking-widest text-[#3ecfa6] uppercase">
              {hero.tag}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-5">
            {hero.titleLine1} <br />
            {hero.titleLine2}{' '}
            <span className="text-[#3ecfa6] drop-shadow-sm">
              {hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-xl">
            {hero.subtitle}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <button
              onClick={onDiscover}
              className="inline-flex items-center gap-3 bg-[#1d9878] hover:bg-[#188065] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-emerald-900/30 hover:shadow-xl hover:translate-x-0.5 group"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenVideo}
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 text-sm font-medium px-5 py-3.5 rounded-full transition-all duration-300 group"
            >
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-3 h-3 fill-white text-white translate-x-0.5" />
              </span>
              <span>{hero.ctaSecondary}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Indicators */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between pt-6 border-t border-white/15 text-xs text-white/80 font-medium">
          {/* Step Indicator */}
          <div className="flex items-center gap-3 tracking-wider">
            <span className="font-bold text-white">01</span>
            <span className="w-6 h-[1px] bg-white/40" />
            <span className="text-white/50">02</span>
            <span className="w-6 h-[1px] bg-white/40" />
            <span className="text-white/50">03</span>
          </div>

          {/* Corridors Flow */}
          <div className="flex items-center gap-2 tracking-wide">
            <span className="text-slate-300">Maroc</span>
            <span className="text-[#3ecfa6]">→</span>
            <span className="text-slate-300">Afrique</span>
            <span className="text-[#3ecfa6]">→</span>
            <span className="font-bold text-white">Monde</span>
          </div>
        </div>
      </div>
    </section>
  );
}
