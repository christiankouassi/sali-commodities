import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, Globe, Lock, FileText, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';
import { useLanguage, Language } from '../context/LanguageContext';
import { PRIVACY_CONTENT } from '../data/privacyContent';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  const { lang, setLang } = useLanguage();
  const content = PRIVACY_CONTENT[lang] || PRIVACY_CONTENT.EN;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-[#1c2c46] flex flex-col font-sans">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#1c2c46] bg-slate-100 hover:bg-slate-200/80 px-3.5 py-2 rounded-xl transition-all duration-200 group cursor-pointer"
              aria-label={content.backToHome}
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 text-[#1d9878]" />
              <span className="hidden sm:inline">{content.backToHome}</span>
            </button>
            <div className="h-6 w-px bg-slate-200 hidden sm:block" />
            <div onClick={onBack} className="cursor-pointer">
              <Logo size="sm" light={false} />
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-xl border border-slate-200/60">
            {(['EN', 'FR', 'ES'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  lang === l
                    ? 'bg-[#1c2c46] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#1c2c46] hover:bg-white/60'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-[#1d9878] text-[11px] font-bold tracking-wider uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{content.badge}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1c2c46] tracking-tight leading-tight mb-4">
              {content.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-4">
              {content.subtitle}
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <Lock className="w-3.5 h-3.5 text-[#1d9878]" />
              <span>{content.lastUpdated}</span>
            </div>
          </div>

          {/* Introduction Card */}
          <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white to-emerald-50/30 border border-emerald-100/80 shadow-sm relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100/80 text-[#1d9878] flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {content.intro}
              </p>
            </div>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-6">
            {content.sections.map((section, idx) => (
              <section
                key={idx}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors"
              >
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#1c2c46] mb-4 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1d9878]" />
                  <span>{section.title}</span>
                </h2>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className={paragraph.startsWith('•') ? 'pl-2 text-slate-700' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Box */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#1c2c46] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-[#1d9878]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[11px] font-bold tracking-widest text-[#3ecfa6] uppercase block mb-2">
                SALI Commodities Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                {content.contactBox.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mb-6">
                {content.contactBox.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#3ecfa6] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">
                      {content.contactBox.emailLabel}
                    </span>
                    <a
                      href="mailto:contact@sali-commodities.com"
                      className="text-xs font-medium text-white hover:text-[#3ecfa6] transition-colors truncate block"
                    >
                      contact@sali-commodities.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#3ecfa6] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">
                      {content.contactBox.phoneLabel}
                    </span>
                    <a
                      href="tel:+212661373937"
                      className="text-xs font-medium text-white hover:text-[#3ecfa6] transition-colors block"
                    >
                      +212 6 61 37 39 37
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#3ecfa6] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">
                      {content.contactBox.addressLabel}
                    </span>
                    <span className="text-xs font-medium text-white block">
                      Casablanca, Morocco
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Back Button */}
          <div className="mt-10 text-center">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#1c2c46] bg-white border border-slate-200 hover:border-slate-300 px-6 py-3 rounded-xl transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#1d9878]" />
              <span>{content.backToHome}</span>
            </button>
          </div>

        </div>
      </main>

      {/* Footer Minimal */}
      <footer className="bg-[#070e1a] text-slate-400 text-xs py-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>© 2026 SALI Commodities. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span>SALI Capital Group</span>
            <span>•</span>
            <span>Casablanca, Morocco</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
