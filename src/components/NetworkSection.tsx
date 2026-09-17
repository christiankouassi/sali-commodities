import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { WORLD_MAP_WIDTH, WORLD_MAP_HEIGHT, COUNTRY_PATHS, HUB_NODE, NETWORK_NODES } from '../data/worldMapData';

interface NetworkSectionProps {
  onOpenNetworkModal?: () => void;
  onOpenContactModal?: () => void;
}

// Ordered destinations: Dubai (Moyen-Orient & Asie) appears first right after Morocco Hub,
// followed by Europe, Afrique de l'Ouest, Égypte, Afrique du Sud, and États-Unis.
const ORDERED_DESTINATIONS = [
  NETWORK_NODES.find(n => n.name.includes("Moyen-Orient"))!,
  NETWORK_NODES.find(n => n.name === "Europe")!,
  NETWORK_NODES.find(n => n.name.includes("Afrique de l'Ouest"))!,
  NETWORK_NODES.find(n => n.name === "Égypte")!,
  NETWORK_NODES.find(n => n.name === "Afrique du Sud")!,
  NETWORK_NODES.find(n => n.name.includes("États-Unis"))!,
].filter(Boolean);

export default function NetworkSection({ onOpenNetworkModal, onOpenContactModal }: NetworkSectionProps) {
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
              NOS MARCHÉS INTERNATIONAUX
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#1c2c46] mb-4">
              Nos marchés
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
              En constante évolution, notre réseau actuel comprend des importateurs et exportateurs situés en Europe, en Afrique ainsi qu'en Asie.
            </p>

            {handleContactClick && (
              <button
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 bg-[#1c2c46] hover:bg-[#121f33] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group self-start"
              >
                <span>Rejoindre notre réseau</span>
                <ArrowRight className="w-4 h-4 text-[#3ecfa6] transition-transform group-hover:translate-x-1" />
              </button>
            )}
          </div>

          {/* Right Column: World Map with D3 NaturalEarth1 Projection & Sequential Entrance */}
          <div className="lg:col-span-8 ae ae-pop" data-d="1.5">
            <div className="relative w-full rounded-3xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 border border-slate-200/80 p-3 sm:p-5 select-none">
              
              {/* Stage Container: aspect-ratio 1750 / 900 matching user's exact specification */}
              <div className="relative w-full aspect-[1750/900] [container-type:inline-size]">
                
                {/* SVG Map */}
                <svg
                  viewBox={`0 0 ${WORLD_MAP_WIDTH} ${WORLD_MAP_HEIGHT}`}
                  className="absolute inset-0 w-full h-full block pointer-events-none"
                >
                  <defs>
                    {/* Dynamic Masks for each route line to animate outward drawing from Morocco to destination */}
                    {ORDERED_DESTINATIONS.map((node, i) => (
                      <mask key={`mask-${node.name}`} id={`route-mask-${i}`}>
                        <path
                          d={node.routeD}
                          fill="none"
                          stroke="white"
                          strokeWidth="20"
                          strokeLinecap="round"
                          pathLength="100"
                          style={{
                            strokeDasharray: "100 100",
                            strokeDashoffset: isInView ? "0" : "100",
                            transition: isInView
                              ? `stroke-dashoffset 0.65s cubic-bezier(0.25, 1, 0.5, 1) ${0.75 + i * 0.75}s`
                              : "none"
                          }}
                        />
                      </mask>
                    ))}
                  </defs>

                  {/* Landmass Paths from NaturalEarth1 Projection */}
                  <g className="land-group">
                    {COUNTRY_PATHS.map((d, index) => (
                      <path key={index} className="map-land" d={d} />
                    ))}
                  </g>

                  {/* Route curves flowing outwards from Morocco Hub, masked for entrance animation */}
                  <g className="routes-group">
                    {ORDERED_DESTINATIONS.map((node, i) => (
                      <path
                        key={node.name}
                        className="map-route"
                        d={node.routeD}
                        mask={`url(#route-mask-${i})`}
                      />
                    ))}
                  </g>

                  {/* Morocco Central Hub Markers (Appears first at 0.1s) */}
                  <g
                    className="hub-group"
                    style={{
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? "scale(1)" : "scale(0.2)",
                      transformOrigin: `${HUB_NODE.x}px ${HUB_NODE.y}px`,
                      transition: isInView
                        ? "opacity 0.4s ease-out 0.1s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s"
                        : "none"
                    }}
                  >
                    <circle className="map-hub-ring" cx={HUB_NODE.x} cy={HUB_NODE.y} r="7" />
                    <circle cx={HUB_NODE.x} cy={HUB_NODE.y} r="7" fill="#1C2C46" />
                  </g>

                  {/* Destination Dots with Pulsing Green Rings (Sequenced one by one) */}
                  <g className="dots-group">
                    {ORDERED_DESTINATIONS.map((node, i) => (
                      <g
                        key={node.name}
                        style={{
                          opacity: isInView ? 1 : 0,
                          transform: isInView ? "scale(1)" : "scale(0.2)",
                          transformOrigin: `${node.x}px ${node.y}px`,
                          transition: isInView
                            ? `opacity 0.4s ease-out ${0.5 + i * 0.75}s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.5 + i * 0.75}s`
                            : "none"
                        }}
                      >
                        <circle
                          className="map-pulse"
                          cx={node.x}
                          cy={node.y}
                          r="7"
                          style={{ animationDelay: node.delay }}
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="7"
                          fill="#ffffff"
                          stroke="#1D9878"
                          strokeWidth="2.5"
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="3.2"
                          fill="#1D9878"
                        />
                      </g>
                    ))}
                  </g>
                </svg>

                {/* HTML Labels Overlay: matching exact proportions of user reference image */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Destination Node Labels: Delicate, compact rounded pill capsules */}
                  {ORDERED_DESTINATIONS.map((node, i) => (
                    <div
                      key={node.name}
                      className="absolute bg-white/95 backdrop-blur-[2px] text-[#253D62] font-semibold text-[clamp(6.5px,0.92cqw,9px)] px-[0.6cqw] py-[0.18cqw] rounded-full shadow-[0_2px_6px_rgba(20,30,50,0.12)] whitespace-nowrap border border-slate-200/80 leading-normal"
                      style={{
                        left: node.left,
                        top: node.top,
                        transform: node.transform,
                        opacity: isInView ? 1 : 0,
                        transition: isInView
                          ? `opacity 0.4s ease-out ${0.5 + i * 0.75}s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.5 + i * 0.75}s`
                          : "none"
                      }}
                    >
                      {node.name}
                    </div>
                  ))}

                  {/* Morocco Central Hub Label: EXACT SAME font-size and padding as destination labels */}
                  <div
                    className="absolute bg-[#1C2C46] text-white font-bold text-[clamp(6.5px,0.92cqw,9px)] px-[0.6cqw] py-[0.18cqw] rounded-full shadow-[0_2px_6px_rgba(20,30,50,0.15)] whitespace-nowrap leading-normal -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: HUB_NODE.left,
                      top: HUB_NODE.top,
                      opacity: isInView ? 1 : 0,
                      transition: isInView
                        ? "opacity 0.4s ease-out 0.15s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s"
                        : "none"
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
    </section>
  );
}
