import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

interface ContactCtaProps {
  onOpenContact: () => void;
}

export default function ContactCta({ onOpenContact }: ContactCtaProps) {
  const { contactCta } = SITE_CONTENT;

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background Image with 09_fond_contact_tomates.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/fond-contact.png"
          alt="Production maraîchère SALI"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#450a0a]/85 via-[#1a0505]/75 to-[#0b101b]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#fca5a5] uppercase mb-2 inline-block">
              {contactCta.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              {contactCta.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
              {contactCta.subtitle}
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#1c2c46] text-sm font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:translate-x-0.5 group"
            >
              <span>{contactCta.buttonText}</span>
              <ArrowRight className="w-4 h-4 text-[#1d9878] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
