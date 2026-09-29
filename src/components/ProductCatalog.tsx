import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductItem } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

interface ProductCatalogProps {
  onSelectProduct: (product: ProductItem) => void;
  onViewAll: () => void;
}

export default function ProductCatalog({ onSelectProduct, onViewAll }: ProductCatalogProps) {
  const { lang, t } = useLanguage();
  const { productsSection } = t;
  const [activeFilter, setActiveFilter] = useState<'all' | 'maroc' | 'afrique' | 'monde'>('all');
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredProducts = productsSection.items.filter(item => {
    if (activeFilter === 'all') return true;
    return item.origin === activeFilter;
  });

  // Only auto-scroll when there are 3 or more products
  const shouldAutoScroll = filteredProducts.length >= 3;

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Continuous gentle auto-scroll (paused on hover / touch)
  useEffect(() => {
    if (!shouldAutoScroll || isPaused) return;

    let animationFrameId: number;
    const container = sliderRef.current;
    if (!container) return;

    const step = () => {
      if (container) {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 0.8;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [shouldAutoScroll, isPaused, activeFilter]);

  // Duplicate items for continuous feel if auto-scrolling
  const displayItems = shouldAutoScroll
    ? [...filteredProducts, ...filteredProducts]
    : filteredProducts;

  const quoteText = lang === 'EN' ? 'Direct Quote' : lang === 'ES' ? 'Cotización directa' : 'Cotation directe';

  const getOriginLabel = (origin: string) => {
    if (origin === 'maroc') {
      return lang === 'EN' ? 'Morocco Origin' : lang === 'ES' ? 'Origen Marruecos' : 'Origine Maroc';
    }
    if (origin === 'afrique') {
      return lang === 'EN' ? 'West Africa' : lang === 'ES' ? 'África Occidental' : 'Afrique de l\'Ouest';
    }
    return lang === 'EN' ? 'International' : lang === 'ES' ? 'Internacional' : 'International';
  };

  return (
    <section id="produits" className="py-20 lg:py-28 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 ae ae-left" data-d="1">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#1d9878] uppercase mb-2 inline-block">
              {productsSection.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1c2c46] tracking-tight leading-tight mb-4">
              {productsSection.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {productsSection.subtitle}
            </p>

            {/* Filter Tabs - 4 Official Tabs */}
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {productsSection.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveFilter(cat.id as any);
                    if (sliderRef.current) sliderRef.current.scrollLeft = 0;
                  }}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    activeFilter === cat.id
                      ? 'bg-[#1c2c46] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Actions: View All & Carousel Nav */}
          <div className="flex items-center gap-4 self-start md:self-end">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1c2c46] hover:text-[#1d9878] transition-colors group"
            >
              <span>{productsSection.viewAllBtn}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {shouldAutoScroll && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 hover:text-[#1c2c46] transition-colors shadow-sm"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 hover:text-[#1c2c46] transition-colors shadow-sm"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Carousel / Centered Display */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
          className={`flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-6 scrollbar-none ${
            !shouldAutoScroll ? 'justify-center' : ''
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayItems.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="group relative flex-shrink-0 w-[155px] sm:w-[210px] md:w-[225px] lg:w-[230px] xl:w-[235px] h-[210px] sm:h-[270px] lg:h-[290px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-100 select-none"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.96]"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Product Info Overlaid at Bottom: Origin Tag + Product Name Only */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 lg:p-5 flex flex-col justify-end">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#3ecfa6] block mb-1">
                  {getOriginLabel(product.origin)}
                </span>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-white leading-snug">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
