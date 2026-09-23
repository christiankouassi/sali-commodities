import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  withText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  whiteIcon?: boolean;
}

export default function Logo({ className = '', light = false, withText = true, size = 'md', whiteIcon = false }: LogoProps) {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizes = {
    sm: 'text-[13px] sm:text-sm',
    md: 'text-sm sm:text-base',
    lg: 'text-lg sm:text-xl'
  };

  const isWhiteIcon = whiteIcon || light;

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Official Sali Spiral Mark */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} transition-transform duration-300 hover:scale-105`}>
        <img 
          src="/sali-icon.png" 
          alt="SALI Symbol" 
          className={`w-full h-full object-contain ${isWhiteIcon ? 'brightness-0 invert' : ''}`}
        />
      </div>

      {withText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-bold tracking-wider uppercase font-['Montserrat'] ${textSizes[size]} ${light ? 'text-white' : 'text-[#1c2c46]'}`}>
            SALI <span className="font-semibold tracking-wide">COMMODITIES</span>
          </span>
        </div>
      )}
    </div>
  );
}
