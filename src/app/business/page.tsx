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
    'Turn first-time customers into lifelong regulars. Set up digital stamp cards, visit rewards, and cashback across Pakistan with zero extra hardware.',
  alternates: {
    canonical: '/business',
  },
  openGraph: {
    title: 'Loyal Duck for Business — Turn First-Timers into Regulars',
    description:
      'Launch digital punch cards, tiered VIP loyalty, and repeat customer retention with zero proprietary hardware.',
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
