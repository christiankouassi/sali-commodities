import React from 'react';
import { SITE_CONTENT } from '../data/content';

export default function StatsSection() {
  const { stats } = SITE_CONTENT;

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background with 08_fond_chiffres_verger.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/fond-chiffres.png"
          alt="Vergers agricoles SALI"
          className="w-full h-full object-cover object-center filter brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-[#071320]/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center divide-y sm:divide-y-0 divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center p-4 ${index > 0 ? 'pt-6 sm:pt-4' : ''}`}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300 leading-snug max-w-[140px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
