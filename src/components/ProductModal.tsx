import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Calendar, Package, Layers } from 'lucide-react';
import { ProductItem } from '../data/content';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onContactProduct: (productName: string) => void;
}

export default function ProductModal({ product, onClose, onContactProduct }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Product Image */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-100 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-bold text-[#3ecfa6] uppercase tracking-wider block mb-1">
              {product.category}
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Description & Origine
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {product.desc}
            </p>
          </div>

          {product.details && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {product.details.varieties && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1c2c46] mb-1">
                    <Layers className="w-3.5 h-3.5 text-[#1d9878]" />
                    <span>Variétés</span>
                  </div>
                  <p className="text-xs text-slate-600">{product.details.varieties}</p>
                </div>
              )}

              {product.details.packaging && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1c2c46] mb-1">
                    <Package className="w-3.5 h-3.5 text-[#1d9878]" />
                    <span>Conditionnement</span>
                  </div>
                  <p className="text-xs text-slate-600">{product.details.packaging}</p>
                </div>
              )}

              {product.details.certifications && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1c2c46] mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1d9878]" />
                    <span>Certifications</span>
                  </div>
                  <p className="text-xs text-slate-600">{product.details.certifications}</p>
                </div>
              )}

              {product.details.seasonality && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1c2c46] mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#1d9878]" />
                    <span>Saisonnalité</span>
                  </div>
                  <p className="text-xs text-slate-600">{product.details.seasonality}</p>
                </div>
              )}
            </div>
          )}

          {/* Action Button */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-medium text-slate-500 hover:text-slate-700"
            >
              Fermer la fiche
            </button>
            <button
              onClick={() => {
                onClose();
                onContactProduct(product.name);
              }}
              className="inline-flex items-center gap-2 bg-[#1d9878] hover:bg-[#167b61] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              <span>Demander une cotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
