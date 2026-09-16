import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { SITE_CONTENT } from '../data/content';

interface NavbarProps {
  onOpenContact: () => void;
  activeLang: 'FR' | 'EN' | 'AR';
  onChangeLang: (lang: 'FR' | 'EN' | 'AR') => void;
}

export default function Navbar({ onOpenContact, activeLang, onChangeLang }: NavbarProps) {
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
          <Logo size="md" light={false} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {SITE_CONTENT.nav.map((item) => (
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
            <span>Nous contacter</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#3ecfa6] transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#1c2c46] hover:text-[#1d9878] py-1.5 px-2.5 rounded-md hover:bg-slate-50 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{activeLang}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-1.5 w-24 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50">
                {(['FR', 'EN', 'AR'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      onChangeLang(l);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-emerald-50 hover:text-[#1d9878] transition-colors ${
                      activeLang === l ? 'text-[#1d9878] font-bold bg-slate-50' : 'text-slate-600'
                    }`}
                  >
                    {l === 'FR' ? 'Français' : l === 'EN' ? 'English' : 'العربية'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
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
            {SITE_CONTENT.nav.map((item) => (
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
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1c2c46] text-white text-xs font-semibold py-2.5 rounded-full"
            >
              <span>Nous contacter</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3ecfa6]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
