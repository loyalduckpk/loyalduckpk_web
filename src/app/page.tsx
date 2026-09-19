import React from 'react';
import HeroSection from '@/components/HeroSection';
import RegisterLifecycle from '@/components/RegisterLifecycle';
import IdentificationWays from '@/components/IdentificationWays';
import CustomerChaosSection from '@/components/CustomerChaosSection';
import BusinessKeepSection from '@/components/BusinessKeepSection';
import CategoryGrid from '@/components/CategoryGrid';
import PhysicalDuckSection from '@/components/PhysicalDuckSection';
import WhyLoyalDuck from '@/components/WhyLoyalDuck';
import CtaBanner from '@/components/CtaBanner';
import FaqAccordion from '@/components/FaqAccordion';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section with Live Interactive Rewards Wallet */}
      <HeroSection />

      {/* 2. 5-Step Lifecycle Journey */}
      <RegisterLifecycle />

      {/* 3. 3 Seamless Ways Duck Knows You */}
      <IdentificationWays />

      {/* 4. For Customers with Interactive Stamp Card Simulator */}
      <CustomerChaosSection />

      {/* 5. For Businesses with Points vs Visits POS Simulator */}
      <BusinessKeepSection />

      {/* 6. Loyalty Works Everywhere (8 Vertical Categories) */}
      <CategoryGrid />

      {/* 7. The Physical Counter Touchpoint */}
      <PhysicalDuckSection />

      {/* 8. Why Loyal Duck (3 Core Pillars) */}
      <WhyLoyalDuck />

      {/* 9. High-Conversion CTA Banner */}
      <CtaBanner />

      {/* 10. Interactive FAQ Accordion */}
      <FaqAccordion />
    </div>
  );
}
