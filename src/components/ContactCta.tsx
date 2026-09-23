import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactCtaProps {
  onOpenModal: () => void;
}

export default function ContactCta({ onOpenModal }: ContactCtaProps) {
  const { t } = useLanguage();
  const { contactCta } = t;

  return (
    <section id="contact-cta" className="relative py-20 lg:py-28 overflow-hidden ae ae-up" data-d="1">
      {/* Background with fond-contact.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/fond-contact.png"
          alt="Fresh agricultural produce SALI Commodities"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
        />
        {/* Clean elegant gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071320]/85 via-[#071320]/55 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-extrabold tracking-widest text-[#3ecfa6] uppercase mb-3 inline-block">
            {contactCta.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md">
            {contactCta.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 font-medium max-w-xl drop-shadow-sm">
            {contactCta.subtitle}
          </p>

          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-3 bg-white text-[#1c2c46] hover:bg-[#3ecfa6] hover:text-[#0b1727] text-sm sm:text-base font-bold px-7 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl group"
          >
            <span>{contactCta.buttonText}</span>
            <ArrowRight className="w-5 h-5 text-[#1d9878] group-hover:text-[#0b1727] transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
