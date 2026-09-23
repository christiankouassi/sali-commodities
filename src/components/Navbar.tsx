import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { useLanguage, Language } from '../context/LanguageContext';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactBtnText = lang === 'EN' ? 'Contact Us' : lang === 'ES' ? 'Contactar' : 'Nous contacter';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-100' 
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#accueil" className="flex items-center group">
          <Logo size="sm" light={false} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {t.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13.5px] font-medium text-[#1c2c46] hover:text-[#1d9878] transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1d9878] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions: Contact CTA & Lang Switcher */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 bg-[#1c2c46] hover:bg-[#152338] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow group hover:gap-2.5"
          >
            <span>{contactBtnText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#3ecfa6] transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#1c2c46] hover:text-[#1d9878] py-1.5 px-2.5 rounded-md hover:bg-slate-50 transition-colors border border-slate-200/60"
              aria-label="Language selector"
            >
              <Globe className="w-3.5 h-3.5 text-[#1d9878]" />
              <span className="font-bold">{lang}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-1.5 w-28 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50">
                {(['EN', 'FR', 'ES'] as const).map((l: Language) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-emerald-50 hover:text-[#1d9878] transition-colors flex items-center justify-between ${
                      lang === l ? 'text-[#1d9878] font-bold bg-slate-50' : 'text-slate-600'
                    }`}
                  >
                    <span>{l === 'EN' ? 'English' : l === 'FR' ? 'Français' : 'Español'}</span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">{l}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu & Language Quick Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Quick Mobile Lang Switcher */}
          <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50 text-[11px] font-bold text-slate-600">
            {(['EN', 'FR', 'ES'] as const).map((l: Language) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-1.5 py-0.5 rounded transition-all ${
                  lang === l ? 'bg-[#1c2c46] text-white shadow-xs' : 'hover:text-[#1d9878]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#1c2c46] hover:text-[#1d9878] focus:outline-none"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {t.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#1c2c46] hover:bg-emerald-50 hover:text-[#1d9878] rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="pt-3 border-t border-slate-100 space-y-3">
            <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
              <span>Language / Langue :</span>
              <div className="flex items-center gap-1">
                {(['EN', 'FR', 'ES'] as const).map((l: Language) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                      lang === l ? 'bg-[#1c2c46] text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1c2c46] text-white text-xs font-semibold py-2.5 rounded-full"
            >
              <span>{contactBtnText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3ecfa6]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
