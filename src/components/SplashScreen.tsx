import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 3 seconds on screen
    const timer = setTimeout(() => {
      setIsFading(true);
      if (onComplete) onComplete();
    }, 3000);

    // Fade-out transition of 700ms then unmount
    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3700);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#fcfcfd] transition-opacity duration-700 ease-in-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Centered Large Official Logo with very subtle gentle animation */}
      <div className="flex items-center justify-center p-6 max-w-sm sm:max-w-md md:max-w-lg w-full">
        <img
          src="/images/logo-commodities-official.png"
          alt="SALI COMMODITIES"
          className="w-72 sm:w-96 md:w-[440px] max-w-full h-auto object-contain transition-transform duration-1000 ease-in-out hover:scale-105"
          style={{
            animation: 'gentleBreath 3s ease-in-out infinite'
          }}
        />
      </div>

      <style>{`
        @keyframes gentleBreath {
          0%, 100% { transform: scale(0.98); opacity: 0.95; }
          50% { transform: scale(1.02); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
