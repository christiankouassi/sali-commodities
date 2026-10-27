import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
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
import PrivacyPolicy from './components/PrivacyPolicy';
import { ProductItem } from './data/content';

function MainApp() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'privacy'>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      if (p.includes('privacy') || p.includes('confidentialite')) {
        return 'privacy';
      }
    }
    return 'home';
  });

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [prefillProduct, setPrefillProduct] = useState<string>('');

  // Handle URL history navigation (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname.toLowerCase();
      if (p.includes('privacy') || p.includes('confidentialite')) {
        setCurrentRoute('privacy');
      } else {
        setCurrentRoute('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPrivacy = () => {
    setCurrentRoute('privacy');
    const search = window.location.search;
    window.history.pushState({}, '', `/privacy${search}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentRoute('home');
    const search = window.location.search;
    window.history.pushState({}, '', `/${search}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Reversible IntersectionObserver for .ae scroll entrance animations
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

  if (currentRoute === 'privacy') {
    return <PrivacyPolicy onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-[#1c2c46]">
      {/* 3-Second Official Splash Screen */}
      <SplashScreen />

      {/* Sticky Navigation Bar with Language Switcher */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero Section with responsive downward offset */}
        <Hero
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onDiscover={handleDiscover}
        />

        {/* 2. Feature Cards */}
        <FeatureCards />

        {/* 3. Section "PRODUCTS" with 4 Tabs & Continuous Auto-Scroll */}
        <ProductCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onViewAll={() => {
            const el = document.getElementById('produits');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Section "COMMITMENT" */}
        <CommitmentSection
          onLearnMore={() => handleOpenContact()}
        />

        {/* 5. Section "OUR MARKETS" with SALI Commodities Hub, Russia, Hong Kong */}
        <NetworkSection
          onOpenNetworkModal={() => setIsNetworkModalOpen(true)}
          onOpenContactModal={() => handleOpenContact()}
        />

        {/* 6. Section "SERVICES & EXPERTISE" */}
        <ExpertiseSection onSelectService={(serviceName) => handleOpenContact(serviceName)} />

        {/* 7. Key Figures Banner (3 Stats) */}
        <StatsSection />

        {/* 8. Contact CTA Banner */}
        <ContactCta
          onOpenModal={() => handleOpenContact()}
        />
      </main>

      {/* Official Institutional Footer with White Icon Logo */}
      <Footer onOpenPrivacy={navigateToPrivacy} />

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

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
