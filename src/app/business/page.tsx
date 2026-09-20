import React from 'react';
import BusinessHero from '@/components/BusinessHero';
import BusinessSetup from '@/components/BusinessSetup';
import BusinessPrograms from '@/components/BusinessPrograms';
import BusinessGrowth from '@/components/BusinessGrowth';
import BusinessOperations from '@/components/BusinessOperations';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import ClosingStrip from '@/components/ClosingStrip';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Business · Customer Loyalty & Retention Network',
  description:
    'Create your own points or visits programme. Set a reward and start with the customers you already serve—without replacing your POS.',
  alternates: {
    canonical: '/business',
  },
  openGraph: {
    title: 'Loyal Duck for Business — A Better Reason to Come Back',
    description:
      'Create your own points or visits programme. Set a reward and start with the customers you already serve—without replacing your POS.',
    url: 'https://loyalduck.pk/business',
  },
};

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
