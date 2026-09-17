import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SITE_CONTENT, ProductItem } from '../data/content';

interface ProductCatalogProps {
  onSelectProduct: (product: ProductItem) => void;
  onViewAll: () => void;
}

export default function ProductCatalog({ onSelectProduct, onViewAll }: ProductCatalogProps) {
  const { productsSection } = SITE_CONTENT;
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

            {/* Filter Tabs */}
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
                  aria-label="Précédent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 hover:text-[#1c2c46] transition-colors shadow-sm"
                  aria-label="Suivant"
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
          className={`flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-6 scrollbar-none ae ae-up ${
            !shouldAutoScroll ? 'justify-center' : ''
          }`}
          data-d="1.5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayItems.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              onClick={() => onSelectProduct(product)}
              className="group relative flex-shrink-0 w-[155px] sm:w-[210px] md:w-[225px] lg:w-[230px] xl:w-[235px] h-[260px] sm:h-[340px] lg:h-[360px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-100 select-none"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.96]"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

              {/* Product Info Overlaid at Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-5 flex flex-col justify-end">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#3ecfa6] block mb-1">
                  {product.origin === 'maroc' ? 'Origine Maroc' : product.origin === 'afrique' ? 'Afrique de l\'Ouest' : 'International'}
                </span>
                <h3 className="text-xs sm:text-sm lg:text-base font-bold text-white leading-snug mb-1 sm:mb-2 line-clamp-2 min-h-[30px] sm:min-h-[40px]">
                  {product.name}
                </h3>
                <p className="hidden sm:block text-[11px] text-slate-300 line-clamp-2 mb-3 leading-relaxed">
                  {product.desc}
                </p>

                {/* Direct Quotation CTA Button */}
                <div className="flex items-center justify-between pt-2 border-t border-white/20 text-[10px] sm:text-xs font-semibold text-white group-hover:text-[#3ecfa6] transition-colors">
                  <span className="truncate pr-1">Cotation directe</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#1d9878] transition-all flex-shrink-0">
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
