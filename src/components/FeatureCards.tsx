import React from 'react';
import { Sprout, Globe2, Award, Truck } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

export default function FeatureCards() {
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

  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-4 sm:p-6 lg:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {SITE_CONTENT.featureBoxes.map((box, index) => (
            <div 
              key={box.id} 
              className={`flex items-start gap-4 p-4 transition-all duration-300 hover:bg-slate-50/70 rounded-xl group ${
                index === 0 ? 'sm:pl-2' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                {getIcon(box.icon)}
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-[#1c2c46] tracking-tight group-hover:text-[#1d9878] transition-colors">
                  {box.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
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
