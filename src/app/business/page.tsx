import React from 'react';
import BusinessHero from '@/components/BusinessHero';
import BusinessSetup from '@/components/BusinessSetup';
import BusinessPrograms from '@/components/BusinessPrograms';
import BusinessGrowth from '@/components/BusinessGrowth';
import BusinessOperations from '@/components/BusinessOperations';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import ClosingStrip from '@/components/ClosingStrip';

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <BusinessSetup />
      <BusinessPrograms />
      <BusinessGrowth />
      <BusinessOperations />
      <PricingSection />
      <FaqSection variant="business" />
      <ClosingStrip variant="business" />
    </>
  );
}
