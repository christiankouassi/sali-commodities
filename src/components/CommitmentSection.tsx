import React from 'react';
import { ArrowRight, Sprout, ShieldCheck, Users, Globe } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

interface CommitmentSectionProps {
  onLearnMore?: () => void;
}

export default function CommitmentSection({ onLearnMore }: CommitmentSectionProps) {
  const { commitment } = SITE_CONTENT;

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'leaf':
        return <Sprout className="w-5 h-5 text-[#1d9878]" />;
      case 'shieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#1d9878]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#1d9878]" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-[#1d9878]" />;
      default:
        return <Sprout className="w-5 h-5 text-[#1d9878]" />;
    }
  };

  return (
    <section id="engagement" className="py-20 lg:py-28 bg-[#f8fafc] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Highlight Card with 07_agriculture_durable_maroc.png */}
          <div className="lg:col-span-6">
            <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl group">
              <img
                src={commitment.featureCard.image}
                alt="Agriculture durable au Maroc"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1625]/90 via-[#0b1625]/30 to-transparent" />

              {/* Card Floating Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  {commitment.featureCard.title}
                </h3>

                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                    <Sprout className="w-4 h-4 text-[#3ecfa6] flex-shrink-0" />
                    <span>{commitment.featureCard.subtitle}</span>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#1d9878] group-hover:border-[#1d9878] flex-shrink-0">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commitment Text & 4 Key Pillars */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-widest text-[#1d9878] uppercase mb-2 inline-block">
              {commitment.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1c2c46] tracking-tight leading-tight mb-5">
              {commitment.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              {commitment.desc}
            </p>

            {/* List of 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {commitment.pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1c2c46] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
