import React, { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

interface NetworkSectionProps {
  onOpenNetworkModal?: () => void;
}

export default function NetworkSection({ onOpenNetworkModal }: NetworkSectionProps) {
  const { network } = SITE_CONTENT;
  const [selectedHub, setSelectedHub] = useState<number | null>(null);

  return (
    <section id="reseau" className="py-20 lg:py-28 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Description & CTAs */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-[#1d9878] uppercase mb-2 inline-block">
              {network.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1c2c46] tracking-tight leading-tight mb-5">
              {network.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              {network.desc}
            </p>

            {/* Trade Hub Cards */}
            <div className="space-y-3 mb-8">
              {network.hubs.map((hub, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedHub(selectedHub === index ? null : index)}
                  className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    selectedHub === index
                      ? 'bg-emerald-50/70 border-[#1d9878] shadow-sm'
                      : 'bg-white border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <MapPin className={`w-4 h-4 ${index === 0 ? 'text-[#1d9878]' : 'text-slate-400'}`} />
                      <span className="text-xs sm:text-sm font-bold text-[#1c2c46]">
                        {hub.name}
                      </span>
                    </div>
                    {index === 0 && (
                      <span className="text-[10px] font-bold text-[#1d9878] bg-emerald-100/60 px-2 py-0.5 rounded-full">
                        Plateforme Pivot
                      </span>
                    )}
                  </div>
                  {selectedHub === index && (
                    <div className="mt-2.5 pt-2.5 border-t border-emerald-100/60 text-xs text-slate-600 space-y-1">
                      <p className="font-medium text-slate-700">{hub.role}</p>
                      <p className="text-slate-500">{hub.flows}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={onOpenNetworkModal}
              className="inline-flex items-center gap-2.5 bg-[#1c2c46] hover:bg-[#121f33] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>{network.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#3ecfa6] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Column: World Map Visual with 100% Fidelity */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-lg p-2 sm:p-4">
              <img
                src={network.mapImage}
                alt="Carte du réseau SALI Commodities"
                className="w-full h-auto object-contain rounded-2xl"
              />

              {/* Pulsing indicator over Morocco Hub */}
              <div className="absolute top-[38%] left-[45%] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden sm:block">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1d9878] opacity-75" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-[#1d9878]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
