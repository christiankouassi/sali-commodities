import React, { useState, useEffect } from 'react';
import { X, Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillProduct?: string;
}

export default function ContactModal({ isOpen, onClose, prefillProduct }: ContactModalProps) {
  const { lang, t } = useLanguage();
  const { brand, contactModal } = t;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getPrefillMessage = (prod?: string) => {
    if (!prod) return '';
    if (lang === 'EN') return `Hello, I would like to request information and a quote for: ${prod}.`;
    if (lang === 'ES') return `Hola, deseo solicitar información y cotización para: ${prod}.`;
    return `Bonjour, je souhaite obtenir des informations et une cotation pour : ${prod}.`;
  };

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: 'Distributeur',
    message: getPrefillMessage(prefillProduct)
  });

  useEffect(() => {
    if (prefillProduct) {
      setFormData(prev => ({
        ...prev,
        message: getPrefillMessage(prefillProduct)
      }));
    }
  }, [prefillProduct, isOpen, lang]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      role: 'Distributeur',
      message: ''
    });
    onClose();
  };

  const roleOptions = [
    { value: "Distributor", label: lang === 'EN' ? "Distributor / Wholesaler" : lang === 'ES' ? "Distribuidor / Mayorista" : "Distributeur / Grossiste" },
    { value: "Importer", label: lang === 'EN' ? "Importer" : lang === 'ES' ? "Importador" : "Importateur" },
    { value: "FoodIndustry", label: lang === 'EN' ? "Food Processing / Industry" : lang === 'ES' ? "Industria alimentaria" : "Industriel / Transformateur" },
    { value: "Producer", label: lang === 'EN' ? "Producer / Cooperative" : lang === 'ES' ? "Productor / Cooperativa" : "Producteur / Coopérative" },
    { value: "Broker", label: lang === 'EN' ? "Commodity Broker" : lang === 'ES' ? "Broker / Corredor" : "Courtier / Broker" },
    { value: "Other", label: lang === 'EN' ? "Other" : lang === 'ES' ? "Otro" : "Autre" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1c2c46] text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#3ecfa6] uppercase tracking-wider block mb-1">
              SALI Commodities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              {contactModal.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label={contactModal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#1d9878] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-[#1c2c46]">
                {contactModal.successTitle}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {contactModal.successDesc}
              </p>
              <button
                onClick={handleReset}
                className="mt-4 bg-[#1c2c46] text-white text-xs font-bold px-6 py-2.5 rounded-full"
              >
                {contactModal.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {contactModal.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Hicham Alami"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1d9878] focus:ring-2 focus:ring-emerald-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {contactModal.company} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ex: Agro International Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1d9878] focus:ring-2 focus:ring-emerald-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {contactModal.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1d9878] focus:ring-2 focus:ring-emerald-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {contactModal.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+212 6..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1d9878] focus:ring-2 focus:ring-emerald-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {contactModal.inquiryType}
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1d9878] focus:ring-2 focus:ring-emerald-50 bg-white"
                >
                  {roleOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {contactModal.message} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={lang === 'EN' ? "Describe your requirements: volumes, destination port, certifications needed..." : lang === 'ES' ? "Describa sus necesidades: volúmenes deseados, puerto de destino, certificaciones..." : "Décrivez vos besoins : volumes souhaités, période de livraison, certifications requises..."}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#1d9878] focus:ring-2 focus:ring-emerald-50"
                />
              </div>

              {/* Coordinates strip */}
              <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#1d9878]" />
                  {brand.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#1d9878]" />
                  {brand.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1d9878]" />
                  {brand.address}
                </span>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1d9878] hover:bg-[#167d63] text-white text-sm font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>{contactModal.submit}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
