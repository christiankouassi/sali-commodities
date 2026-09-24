import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { WORLD_MAP_WIDTH, WORLD_MAP_HEIGHT, COUNTRY_PATHS, HUB_NODE, NETWORK_NODES } from '../data/worldMapData';
import { useLanguage } from '../context/LanguageContext';

interface NetworkSectionProps {
  onOpenNetworkModal?: () => void;
  onOpenContactModal?: () => void;
}

export default function NetworkSection({ onOpenNetworkModal, onOpenContactModal }: NetworkSectionProps) {
  const { t } = useLanguage();
  const handleContactClick = onOpenContactModal || onOpenNetworkModal;
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  // IntersectionObserver triggers entrance animation on entry,
  // and resets it on exit so that scrolling back into view replays the animation cleanly.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.05
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="reseau" className="py-20 lg:py-28 bg-[#fcfcfd] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Title, Subtitle, CTA */}
          <div className="lg:col-span-4 flex flex-col justify-center ae ae-left" data-d="1">
            <span className="text-xs font-bold tracking-widest text-[#1d9878] uppercase mb-2 inline-block">
              {t.network.tag}
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#1c2c46] mb-4">
              {t.network.title}
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
              {t.network.desc}
            </p>

            {handleContactClick && (
              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 bg-[#1c2c46] hover:bg-[#121f33] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group self-start"
              >
                <span>{t.network.cta}</span>
                <ArrowRight className="w-4 h-4 text-[#3ecfa6] transition-transform group-hover:translate-x-1" />
              </button>
            )}
          </div>

          {/* Right Column: World Map with D3 NaturalEarth1 Projection & Sequential Entrance */}
          <div className="lg:col-span-8 ae ae-pop" data-d="1.5">
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-200/80 p-1 sm:p-5 select-none">
              
              {/* Stage Container: aspect-ratio 1750 / 900 scaled to fill card space on mobile */}
              <div className="relative w-full aspect-[1750/900] [container-type:inline-size] scale-[1.18] sm:scale-100 origin-center transition-transform">
                
                {/* SVG Map */}
                <svg
                  viewBox={`0 0 ${WORLD_MAP_WIDTH} ${WORLD_MAP_HEIGHT}`}
                  className="absolute inset-0 w-full h-full block pointer-events-none"
                >
                  <defs>
                    {/* Dynamic Masks for each route line to unmask outward from Morocco to destination */}
                    {NETWORK_NODES.map((node, i) => {
                      const badgeDelay = 0.25 + i * 0.50;
                      const lineDelay = badgeDelay + 0.20;
                      return (
                        <mask
                          key={`mask-${node.id}`}
                          id={`route-mask-${i}`}
                          maskUnits="userSpaceOnUse"
                          maskContentUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width={WORLD_MAP_WIDTH}
                          height={WORLD_MAP_HEIGHT}
                        >
                          <path
                            d={node.routeD}
                            fill="none"
                            stroke="white"
                            strokeWidth="30"
                            strokeLinecap="round"
                            pathLength="1000"
                            className={isInView ? "map-mask-path" : ""}
                            style={{
                              animationDelay: `${lineDelay}s`
                            }}
                          />
                        </mask>
                      );
                    })}
                  </defs>

                  {/* World Vector Contours: 100% exact geographic geometry */}
                  <g className="map-countries" fill="#DDE4EE" stroke="#ffffff" strokeWidth="0.8">
                    {COUNTRY_PATHS.map((pathStr, index) => (
                      <path key={index} d={pathStr} />
                    ))}
                  </g>

                  {/* Dynamic Export Flow Lines with FULL NETWORK EFFECT */}
                  <g className="routes-group">
                    {NETWORK_NODES.map((node, i) => (
                      <g key={`route-${node.id}`} mask={`url(#route-mask-${i})`}>
                        {/* Static Dashed Base Network Track */}
                        <path
                          d={node.routeD}
                          className="map-route-static"
                        />
                        {/* Glowing Flowing Network Packets Stream */}
                        <path
                          d={node.routeD}
                          className="map-route-flow"
                          style={{
                            animationDelay: node.delay
                          }}
                        />
                      </g>
                    ))}
                  </g>

                  {/* Central Hub (Morocco / SALI Commodities) Pulsing Target Anchor */}
                  <g
                    className="hub-group"
                    style={{
                      transformOrigin: `${HUB_NODE.x}px ${HUB_NODE.y}px`
                    }}
                  >
                    <circle
                      className="map-hub-ring"
                      cx={HUB_NODE.x}
                      cy={HUB_NODE.y}
                      r="7"
                      style={{
                        animationDelay: "0.2s"
                      }}
                    />
                    <circle
                      cx={HUB_NODE.x}
                      cy={HUB_NODE.y}
                      r="7"
                      fill="#1C2C46"
                      className={isInView ? "map-card-pop" : "opacity-0"}
                      style={{
                        animationDelay: "0.1s",
                        transformOrigin: `${HUB_NODE.x}px ${HUB_NODE.y}px`
                      }}
                    />
                    <circle
                      cx={HUB_NODE.x}
                      cy={HUB_NODE.y}
                      r="3"
                      fill="#3ECFA6"
                      className={isInView ? "map-card-pop" : "opacity-0"}
                      style={{
                        animationDelay: "0.1s",
                        transformOrigin: `${HUB_NODE.x}px ${HUB_NODE.y}px`
                      }}
                    />
                  </g>

                  {/* Destination Dots with Pulsing Green Rings */}
                  <g className="dots-group">
                    {NETWORK_NODES.map((node, i) => {
                      const badgeDelay = 0.25 + i * 0.50;
                      const lineDelay = badgeDelay + 0.20;
                      const arriveDelay = lineDelay + 0.60;
                      return (
                        <g
                          key={node.id}
                          style={{
                            transformOrigin: `${node.x}px ${node.y}px`
                          }}
                        >
                          {/* Pulsing ring activates once line connects */}
                          <circle
                            className="map-pulse"
                            cx={node.x}
                            cy={node.y}
                            r="7"
                            style={{
                              animationDelay: `${arriveDelay}s`
                            }}
                          />
                          {/* Destination Dot marker pops in with location card */}
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="7"
                            fill="#ffffff"
                            stroke="#1D9878"
                            strokeWidth="2.5"
                            className={isInView ? "map-card-pop" : "opacity-0"}
                            style={{
                              animationDelay: `${badgeDelay}s`,
                              transformOrigin: `${node.x}px ${node.y}px`
                            }}
                          />
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r="3.2"
                            fill="#1D9878"
                            className={isInView ? "map-card-pop" : "opacity-0"}
                            style={{
                              animationDelay: `${badgeDelay}s`,
                              transformOrigin: `${node.x}px ${node.y}px`
                            }}
                          />
                        </g>
                      );
                    })}
                  </g>
                </svg>

                {/* HTML Labels Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Destination Location Cards: Appear one by one before the line joins them */}
                  {NETWORK_NODES.map((node, i) => {
                    const badgeDelay = 0.25 + i * 0.50;
                    return (
                      <div
                        key={node.id}
                        className="absolute"
                        style={{
                          left: node.left,
                          top: node.top,
                          transform: node.transform
                        }}
                      >
                        <div
                          className={`bg-white/95 backdrop-blur-[2px] text-[#253D62] font-semibold text-[clamp(8.5px,1.0cqw,13px)] px-[0.7cqw] py-[0.22cqw] rounded-full shadow-[0_2px_8px_rgba(20,30,50,0.12)] whitespace-nowrap border border-slate-200/80 leading-normal ${
                            isInView ? "map-card-pop" : "opacity-0"
                          }`}
                          style={{
                            animationDelay: `${badgeDelay}s`
                          }}
                        >
                          {t.network.destinations[node.id] || node.name}
                        </div>
                      </div>
                    );
                  })}

                  {/* Morocco Central Hub Label: SALI Commodities */}
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: HUB_NODE.left,
                      top: HUB_NODE.top
                    }}
                  >
                    <div
                      className={`bg-[#1C2C46] text-white font-medium text-[clamp(7.5px,0.85cqw,11px)] px-[0.55cqw] py-[0.15cqw] rounded-full shadow-[0_2px_8px_rgba(20,30,50,0.18)] whitespace-nowrap leading-tight ${
                        isInView ? "map-card-pop" : "opacity-0"
                      }`}
                      style={{
                        animationDelay: "0.1s"
                      }}
                    >
                      {HUB_NODE.name}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
