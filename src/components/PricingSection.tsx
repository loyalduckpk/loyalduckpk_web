'use client';

import React, { useState } from 'react';
import ConnectionDialog from './ConnectionDialog';

export default function PricingSection() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="section container pricing-section" id="start" aria-labelledby="pricing-title">
        <div className="pricing-copy">
          <span className="eyebrow">05 / START WITH YOUR FIRST LOCATION</span>
          <h2 id="pricing-title">
            Less commitment.<br /> <span className="cobalt">More regulars.</span>
          </h2>
          <p>
            Try core loyalty at one location during the founding launch. Add a reward worth returning for. We’ll help you get going.
          </p>
          <p className="quiet-note">
            Additional locations, optional campaign sends and physical materials are separate. Confirm the applicable terms during onboarding.
          </p>
        </div>
        <div className="price-card">
          <div className="price-head">
            <span className="eyebrow">FOUNDING LAUNCH</span>
            <span className="pill">1 LOCATION</span>
          </div>
          <div className="price-value">
            Free<span>to start.</span>
          </div>
          <p>
            Your own loyalty programme.<br /> Not your own software project.
          </p>
          <ul className="feature-list">
            <li>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12 4 4L19 6"/>
              </svg>{' '}
              Points or visits, with your rewards
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12 4 4L19 6"/>
              </svg>{' '}
              Staff access and customer lookup
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12 4 4L19 6"/>
              </svg>{' '}
              Your merchant QR
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12 4 4L19 6"/>
              </svg>{' '}
              Activity and basic reporting
            </li>
          </ul>
          <button
            className="button button-primary"
            type="button"
            onClick={() => setDialogOpen(true)}
          >
            Become a partner
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 18 18 6M6 6h12v12"/>
            </svg>
          </button>
          <p className="price-note">
            First-location founding offer. Optional campaigns and physical kits are separate.
          </p>
        </div>
      </section>

      <ConnectionDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        destination="businessOnboardingUrl"
      />
    </>
  );
}
