import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay fallback if blocked by browser policy
        });
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-5xl bg-[#0b121f] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0f192b] border-b border-white/10">
          <span className="text-xs sm:text-sm font-semibold text-white tracking-wide truncate">
            SALI COMMODITIES • Video
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors flex-shrink-0 ml-2"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display - Responsive Aspect-Video */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src="/videos/video-sali-commodities.mp4"
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support playing this video.
          </video>
        </div>
      </div>
    </div>
  );
}
