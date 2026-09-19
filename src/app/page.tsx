import React from 'react';
import HomeHero from '@/components/HomeHero';
import CategoryBand from '@/components/CategoryBand';
import HowItWorks from '@/components/HowItWorks';
import RewardsSection from '@/components/RewardsSection';
import NearbySection from '@/components/NearbySection';
import BusinessInvite from '@/components/BusinessInvite';
import FaqSection from '@/components/FaqSection';
import ClosingStrip from '@/components/ClosingStrip';

export default function Home() {
  return (
    <>
      <HomeHero />
      <CategoryBand />
      <HowItWorks />
      <RewardsSection />
      <NearbySection />
      <BusinessInvite />
      <FaqSection variant="customer" />
      <ClosingStrip variant="customer" />
    </>
  );
}
