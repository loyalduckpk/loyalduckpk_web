'use client';

import React from 'react';
import Link from 'next/link';

interface ClosingStripProps {
  variant?: 'customer' | 'business';
}

export default function ClosingStrip({ variant = 'customer' }: ClosingStripProps) {
  const isBusiness = variant === 'business';

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
          <div className="closing-action-wrap">
            {isBusiness ? (
              <Link className="button button-dark" href="/start-business">
                Start your programme
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 18 18 6M6 6h12v12"/>
                </svg>
              </Link>
            ) : (
              <Link className="button button-dark" href="/get-started">
                Get your Duck
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6"/>
                </svg>
              </Link>
            )}
            <div className="closing-mascot-anchor" aria-hidden="true">
              <img
                src="/brand/duck-mascot.png"
                alt="Loyal Duck Mascot"
                className="closing-duck-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
