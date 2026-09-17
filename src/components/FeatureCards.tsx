import React, { useState, useRef, useEffect } from 'react';
import { Sprout, Globe2, Award, Truck } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

export default function FeatureCards() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'leaf':
        return <Sprout className="w-5 h-5 text-[#1d9878]" />;
      case 'globe':
        return <Globe2 className="w-5 h-5 text-[#1d9878]" />;
      case 'award':
        return <Award className="w-5 h-5 text-[#1d9878]" />;
      case 'truck':
        return <Truck className="w-5 h-5 text-[#1d9878]" />;
      default:
        return <Sprout className="w-5 h-5 text-[#1d9878]" />;
    }
  };

  // Continuous auto-scroll on mobile with smooth continuous loop
  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    const container = scrollContainerRef.current;
    if (!container) return;

    const step = () => {
      if (window.innerWidth < 640 && container) {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 0.85;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Duplicate items for continuous feel on mobile
  const displayItems = [...SITE_CONTENT.featureBoxes, ...SITE_CONTENT.featureBoxes];

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 ae ae-up" data-d="1">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-3 sm:p-6 lg:p-7">
        
        {/* Mobile: Smooth Infinite Auto-scroll with Touch / Hover Pause & Swipe */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
          className="flex sm:hidden overflow-x-auto gap-3 pb-2 scrollbar-none select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayItems.map((box, index) => (
            <div
              key={`${box.id}-${index}`}
              className="flex items-start gap-3.5 p-3.5 rounded-xl flex-shrink-0 w-[230px] bg-slate-50/70 border border-slate-100"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50/90 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                {getIcon(box.icon)}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-bold text-[#1c2c46] tracking-tight">
                  {box.title}
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                  {box.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Stationary 4-Column Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:divide-x divide-slate-100">
          {SITE_CONTENT.featureBoxes.map((box, index) => (
            <div
              key={box.id}
              className={`flex items-start gap-4 p-4 transition-all duration-300 hover:bg-slate-50/70 rounded-xl group ${
                index === 0 ? 'sm:pl-2' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50/90 border border-emerald-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                {getIcon(box.icon)}
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-[#1c2c46] tracking-tight group-hover:text-[#1d9878] transition-colors">
                  {box.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5 leading-snug">
                  {box.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
