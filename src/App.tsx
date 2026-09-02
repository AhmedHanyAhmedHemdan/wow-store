import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductSection } from './components/ProductSection';
import { ComparisonSection } from './components/ComparisonSection';
import { TrustGuaranteeSection } from './components/TrustGuaranteeSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { FinalUrgencySection } from './components/FinalUrgencySection';
import { Footer } from './components/Footer';
import { EasyOrderModal } from './components/EasyOrderModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { LiveSalesNotification } from './components/LiveSalesNotification';
import { StrategyGuideModal } from './components/StrategyGuideModal';
import { PRODUCTS } from './data/landingData';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [selectedBundleId, setSelectedBundleId] = useState<string | undefined>(undefined);
  const [isStrategyGuideOpen, setIsStrategyGuideOpen] = useState(false);

  const handleOpenOrderModal = (productId?: string, bundleId?: string) => {
    if (productId) setSelectedProductId(productId);
    if (bundleId) setSelectedBundleId(bundleId);
    setIsOrderModalOpen(true);
  };

  const handleSelectProduct = (productId: string) => {
    const el = document.getElementById(productId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* Header & Sticky Top Bar */}
      <Header 
        onOpenOrderModal={handleOpenOrderModal}
        onOpenStrategyGuide={() => setIsStrategyGuideOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Powerful Hero Section */}
        <HeroSection onSelectProduct={handleSelectProduct} />

        {/* 2. Product Sections (Only 2 dedicated winning products) */}
        {PRODUCTS.map((product, index) => (
          <ProductSection
            key={product.id}
            product={product}
            productNumber={index + 1}
            onOpenOrderModal={handleOpenOrderModal}
          />
        ))}

        {/* 3. Conversion Elements */}
        {/* Why Wow Store Comparison Table */}
        <ComparisonSection />

        {/* 4 Steps Easy Order & Guarantee */}
        <TrustGuaranteeSection />

        {/* Social Proof & Verified Iraqi Reviews */}
        <ReviewsSection />

        {/* Objection-Crushing FAQ Section */}
        <FAQSection />

        {/* Final Purchase Encouragement & Dual CTAs */}
        <FinalUrgencySection onOpenOrderModal={handleOpenOrderModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive EasyOrder Fast Checkout Modal */}
      <EasyOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialProductId={selectedProductId}
        initialBundleId={selectedBundleId}
      />

      {/* CRO Masterplan & Copywriting Guide Modal */}
      <StrategyGuideModal
        isOpen={isStrategyGuideOpen}
        onClose={() => setIsStrategyGuideOpen(false)}
      />

      {/* Responsive Sticky Mobile Bar */}
      <FloatingMobileBar onOpenOrderModal={handleOpenOrderModal} />

      {/* Live Sales Proof Toasts */}
      <LiveSalesNotification />

    </div>
  );
}

