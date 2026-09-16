import React, { useState } from 'react';
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
import { ProductItem, SITE_CONTENT } from './data/content';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [prefillProduct, setPrefillProduct] = useState<string>('');
  const [activeLang, setActiveLang] = useState<'FR' | 'EN' | 'AR'>('FR');

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

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfd] text-[#1c2c46]">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        activeLang={activeLang}
        onChangeLang={(l) => setActiveLang(l)}
      />

      {/* Main Single-Page Content Following Mockup Structure */}
      <main className="flex-grow">
        {/* 1. Hero Section with 01_hero_producteur_verger_SALI.png */}
        <Hero
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onDiscover={handleDiscover}
        />

        {/* 2. The 4 Floating Boxes (Sourcing responsable, Réseau international, etc.) */}
        <FeatureCards />

        {/* 3. Section "NOS PRODUITS" with HD Products Carousel */}
        <ProductCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onViewAll={() => {
            const el = document.getElementById('produits');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Section "NOTRE ENGAGEMENT" with 07_agriculture_durable_maroc.png */}
        <CommitmentSection
          onLearnMore={() => handleOpenContact()}
        />

        {/* 5. Section "NOTRE RÉSEAU" with carte-reseau.png */}
        <NetworkSection
          onOpenNetworkModal={() => setIsNetworkModalOpen(true)}
        />

        {/* 6. Section "NOTRE EXPERTISE" (9 Services from SALI Capital Official Site) */}
        <ExpertiseSection />

        {/* 7. Key Figures Banner with 08_fond_chiffres_verger.png */}
        <StatsSection />

        {/* 8. Contact CTA Banner with 09_fond_contact_tomates.png */}
        <ContactCta
          onOpenContact={() => handleOpenContact()}
        />
      </main>

      {/* 9. Official Institutional Footer with SALI COMMODITIES® */}
      <Footer />

      {/* Modals & Dialogs */}
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
