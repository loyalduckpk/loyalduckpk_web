'use client';

import React, { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import ConnectionDialog from './ConnectionDialog';

export default function PricingSection() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="section container pricing-section marketing-scope" id="start" aria-labelledby="pricing-title">
        <div className="pricing-copy">
          <span className="eyebrow">05 / START WITH YOUR FIRST LOCATION</span>
          <h2 id="pricing-title">Less commitment.<br /> <span className="cobalt gradient-text">More regulars.</span></h2>
          <p>
            Try core loyalty at one location during the founding launch. Add a reward worth returning for. We’ll help you get going.
          </p>
          <p className="quiet-note">
            Additional locations, optional campaign sends and physical materials are separate. Confirm the applicable terms during onboarding.
          </p>
        </div>
        <div className="price-card glass-card shadow-xl hover:shadow-2xl transition-shadow cursor-default">
          <div className="price-head">
            <span className="eyebrow">FOUNDING LAUNCH</span>
            <span className="pill text-amber-900 border-amber-300 shadow-sm">1 LOCATION</span>
          </div>
          <div className="price-value">
            Free<span>to start.</span>
          </div>
          <p>
            Your own loyalty programme.<br /> Not your own software project.
          </p>
          <ul className="feature-list">
            <li><Check className="icon w-[16px] h-[16px]" /> Points or visits, with your rewards</li>
            <li><Check className="icon w-[16px] h-[16px]" /> Staff access and customer lookup</li>
            <li><Check className="icon w-[16px] h-[16px]" /> Your merchant QR</li>
            <li><Check className="icon w-[16px] h-[16px]" /> Activity and basic reporting</li>
          </ul>
          <button 
            className="button button-primary shadow-lg shadow-[#3155ff30]" 
            onClick={() => setDialogOpen(true)}
          >
            Become a partner <ArrowUpRight className="icon w-[18px] h-[18px]" />
          </button>
          <p className="price-note text-[#5F6168]">
            First-location founding offer. Optional campaigns and physical kits are separate.
          </p>
        </div>
      </section>

      <ConnectionDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
