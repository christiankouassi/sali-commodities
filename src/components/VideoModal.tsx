import React from 'react';
import { X, Play, Volume2, Maximize2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-4xl bg-[#0b121f] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center group">
          <img
            src="/images/hero.png"
            alt="Présentation SALI Commodities"
            className="w-full h-full object-cover filter brightness-[0.85]"
          />

          {/* Player Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-6">
            {/* Top Bar */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wider uppercase">
                SALI COMMODITIES • FILM DE PRÉSENTATION
              </span>
            </div>

            {/* Center Play Button & Notice */}
            <div className="text-center my-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#1d9878] hover:bg-[#167a60] text-white flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110 cursor-pointer mb-4">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-1" />
              </div>
              <p className="text-sm font-semibold text-white drop-shadow-md">
                Production audiovisuelle en cours de finalisation
              </p>
              <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                Découvrez prochainement nos filières agricoles d'exception et nos engagements de terrain en haute définition.
              </p>
            </div>

            {/* Bottom Controls Bar */}
            <div className="flex items-center justify-between text-white/80 text-xs pt-4 border-t border-white/15">
              <div className="flex items-center gap-3">
                <span>00:00 / 02:45</span>
                <span className="w-24 sm:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                  <span className="block w-1/3 h-full bg-[#1d9878]" />
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 cursor-pointer hover:text-white" />
                <Maximize2 className="w-4 h-4 cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
