import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  withText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', light = false, withText = true, size = 'md' }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Sali Spiral Mark */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} transition-transform duration-300 hover:scale-105`}>
        <img 
          src="/sali-icon.png" 
          alt="SALI Symbol" 
          className="w-full h-full object-contain"
        />
      </div>

      {withText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-start">
            <span className={`font-bold tracking-wider uppercase font-['Montserrat'] ${textSizes[size]} ${light ? 'text-white' : 'text-[#1c2c46]'}`}>
              SALI <span className="font-semibold tracking-wide">COMMODITIES</span>
            </span>
            <span className={`text-[10px] font-bold ml-0.5 mt-0.5 leading-none ${light ? 'text-[#3ecfa6]' : 'text-[#1d9878]'}`}>
              ®
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
