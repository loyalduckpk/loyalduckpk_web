'use client';

import React, { useState } from 'react';
import ConnectionDialog, { DestinationType } from './ConnectionDialog';

interface ClosingStripProps {
  variant?: 'customer' | 'business';
}

export default function ClosingStrip({ variant = 'customer' }: ClosingStripProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const isBusiness = variant === 'business';
  const destination: DestinationType = isBusiness ? 'businessOnboardingUrl' : 'customerAppUrl';

  return (
    <>
      <section className={`closing-strip ${isBusiness ? 'business-close' : ''}`} id="connect">
        <div className="container closing-inner">
          <div>
            <span className="eyebrow">
              {isBusiness ? 'SAME COUNTER. BETTER REASONS TO RETURN.' : 'YOU WERE GOING THERE ANYWAY.'}
            </span>
            <h2>
              {isBusiness ? 'Let’s make you a Duck spot.' : 'Might as well get the perks.'}
            </h2>
          </div>
          <button
            className="button button-dark"
            type="button"
            onClick={() => setDialogOpen(true)}
          >
            {isBusiness ? 'Become a partner' : 'Get your Duck'}
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 18 18 6M6 6h12v12"/>
            </svg>
          </button>
        </div>
      </section>

      <ConnectionDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        destination={destination}
      />
    </>
  );
}
