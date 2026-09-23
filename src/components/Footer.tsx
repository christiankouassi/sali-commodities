import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();
  const { brand, nav, footer } = t;

  const productLinks = [
    { label: lang === 'EN' ? 'Morocco Origin' : lang === 'ES' ? 'Origen Marruecos' : 'Maroc', href: '#produits' },
    { label: lang === 'EN' ? 'West Africa' : lang === 'ES' ? 'África Occidental' : 'Afrique de l\'Ouest', href: '#produits' },
    { label: lang === 'EN' ? 'International' : lang === 'ES' ? 'Internacional' : 'International', href: '#produits' }
  ];

  return (
    <footer id="contact" className="bg-[#070e1a] text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          {/* Column 1: Brand & Slogan with White Icon Logo as requested */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" light={true} whiteIcon={true} />
            <p className="font-['Brush_Script_MT',cursive] italic text-base text-slate-300 tracking-wide pt-1">
              "{brand.baseline}"
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm pt-2">
              {brand.description}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              {footer.navTitle}
            </h4>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              {footer.productsTitle}
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              {footer.contactTitle}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#3ecfa6]" />
                <a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#3ecfa6]" />
                <a href={`mailto:${brand.email}`} className="hover:text-white transition-colors">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#3ecfa6]" />
                <span>{brand.address}</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Socials */}
          <div className="lg:col-span-1 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              {footer.socialTitle}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#1d9878] text-white flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            {footer.copyright}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">
              {footer.legalLink}
            </a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              {footer.privacyLink}
            </a>
          </div>

          <div>
            {footer.slogan}
          </div>
        </div>
      </div>
    </footer>
  );
}
