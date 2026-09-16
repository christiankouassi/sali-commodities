import React from 'react';
import { X, Globe, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

interface NetworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

export default function NetworkModal({ isOpen, onClose, onContact }: NetworkModalProps) {
  if (!isOpen) return null;
  const { network } = SITE_CONTENT;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1c2c46] text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#3ecfa6] uppercase tracking-wider block mb-1">
              Réseau Global & Logistique
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Des flux commerciaux sécurisés à l'international
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            SALI Commodities opère comme un facilitateur stratégique entre les bassins agricoles d'exception (Maroc, Côte d'Ivoire, Sénégal, Mali, Burkina Faso) et les marchés d'importation finaux en Europe et en Asie.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {network.hubs.map((hub, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#1d9878]" />
                  <h4 className="text-sm font-bold text-[#1c2c46]">{hub.name}</h4>
                </div>
                <p className="text-xs text-slate-600 font-medium mb-1">{hub.role}</p>
                <p className="text-xs text-slate-500">{hub.flows}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100">
            <h5 className="text-xs font-bold text-[#1d9878] uppercase tracking-wider mb-2">
              Nos garanties sur les flux internationaux
            </h5>
            <ul className="text-xs text-slate-700 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#1d9878]" />
                <span>Supervision sur site lors de la récolte, du tri et de l'empotage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#1d9878]" />
                <span>Certificats phytosanitaires et de conformité aux douanes des pays de destination</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#1d9878]" />
                <span>Chaîne du froid ininterrompue pour les denrées hautement périssables</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-medium text-slate-500 hover:text-slate-700"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="inline-flex items-center gap-2 bg-[#1c2c46] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full"
            >
              <span>Rejoindre notre réseau</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3ecfa6]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
