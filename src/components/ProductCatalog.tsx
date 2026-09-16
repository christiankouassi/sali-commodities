import React, { useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SITE_CONTENT, ProductItem } from '../data/content';

interface ProductCatalogProps {
  onSelectProduct: (product: ProductItem) => void;
  onViewAll: () => void;
}

export default function ProductCatalog({ onSelectProduct, onViewAll }: ProductCatalogProps) {
  const { productsSection } = SITE_CONTENT;
  const [activeFilter, setActiveFilter] = useState<'all' | 'maroc' | 'afrique'>('all');
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredProducts = productsSection.items.filter(item => {
    if (activeFilter === 'all') return true;
    return item.origin === activeFilter;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="produits" className="py-20 lg:py-28 bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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
            <div className="flex items-center gap-2 mt-6">
              {productsSection.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id as any)}
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
          </div>
        </div>

        {/* Horizontal Carousel of Products */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group relative flex-shrink-0 w-[240px] sm:w-[260px] h-[340px] sm:h-[360px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 snap-start"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.95]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Product Info Overlaid at Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#3ecfa6] block mb-1">
                    {product.origin === 'maroc' ? 'Origine Maroc' : 'Afrique de l\'Ouest'}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {product.name}
                  </h3>
                </div>

                {/* Circular Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#1d9878] group-hover:border-[#1d9878]">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
