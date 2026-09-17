import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import ProductCatalog from './components/ProductCatalog';
import CommitmentSection from './components/CommitmentSection';
import NetworkSection from './components/NetworkSection';
import ExpertiseSection from './components/ExpertiseSection';
import StatsSection from './components/StatsSection';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import ProductModal from './components/ProductModal';
import ContactModal from './components/ContactModal';
import NetworkModal from './components/NetworkModal';
import { ProductItem } from './data/content';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [prefillProduct, setPrefillProduct] = useState<string>('');
  const [activeLang, setActiveLang] = useState<'FR' | 'EN' | 'ES'>('FR');

  const handleOpenContact = (productName?: string) => {
    if (productName) {
      setPrefillProduct(productName);
    } else {
      setPrefillProduct('');
    }
    setIsContactModalOpen(true);
  };

  const handleDiscover = () => {
    const el = document.getElementById('produits');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reversible IntersectionObserver for .ae scroll entrance animations (Style Selma / Fonciere Dassouli)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis');
          } else {
            entry.target.classList.remove('vis');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const animatedElements = document.querySelectorAll('.ae');
    animatedElements.forEach((el) => observer.observe(el));

    const timer = setTimeout(() => {
      animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('vis');
        }
      });
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-[#1c2c46]">
      {/* 3-Second Official Splash Screen */}
      <SplashScreen />

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        activeLang={activeLang}
        onChangeLang={(l) => setActiveLang(l)}
      />

      {/* Main Content Following Mockup Structure */}
      <main className="flex-grow">
        {/* 1. Hero Section with 4-Line Slogan */}
        <Hero
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onDiscover={handleDiscover}
        />

        {/* 2. Feature Cards with Auto-Scroll & Swipe on Mobile */}
        <FeatureCards />

        {/* 3. Section "NOS PRODUITS" with Continuous Auto-Scroll */}
        <ProductCatalog
          onSelectProduct={(product) => handleOpenContact(product.name)}
          onViewAll={() => {
            const el = document.getElementById('produits');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Section "NOTRE ENGAGEMENT" */}
        <CommitmentSection
          onLearnMore={() => handleOpenContact()}
        />

        {/* 5. Section "NOS MARCHÉS" (Faithful title & exact map coordinates) */}
        <NetworkSection
          onOpenNetworkModal={() => handleOpenContact()}
          onOpenContactModal={() => handleOpenContact()}
        />

        {/* 6. Section "NOS SERVICES" (Mobile Tabs & Desktop Sticky Scroll-Spy) */}
        <ExpertiseSection onSelectService={(serviceName) => handleOpenContact(serviceName)} />

        {/* 7. Key Figures Banner (3 Stats) */}
        <StatsSection />

        {/* 8. Contact CTA Banner */}
        <ContactCta
          onOpenModal={() => handleOpenContact()}
        />
      </main>

      {/* Official Institutional Footer */}
      <Footer />

      {/* Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onContactProduct={(name) => handleOpenContact(name)}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        prefillProduct={prefillProduct}
      />

      <NetworkModal
        isOpen={isNetworkModalOpen}
        onClose={() => setIsNetworkModalOpen(false)}
        onContact={() => handleOpenContact()}
      />
    </div>
  );
}
