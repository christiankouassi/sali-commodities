import React from 'react';
import { SITE_CONTENT } from '../data/content';

export default function StatsSection() {
  const { stats } = SITE_CONTENT;

  return (
    <section id="chiffres" className="relative py-20 lg:py-28 overflow-hidden ae ae-up" data-d="1">
      {/* Background with luminous 08_fond_chiffres_verger.png without heavy black mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/fond-chiffres.png"
          alt="Vergers agricoles SALI Commodities"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
        />
        {/* Subtle luminous gradient preserving orchard vibrancy while keeping text crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071320]/80 via-[#071320]/45 to-[#071320]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {stats.slice(0, 3).map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center p-4 ${index > 0 ? 'pt-8 sm:pt-4 sm:pl-8' : ''}`}>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-2.5 drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-emerald-300/90 tracking-wide uppercase max-w-[200px] drop-shadow-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
