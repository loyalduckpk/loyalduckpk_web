'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getDestinations } from '@/lib/destinations';

type OfferKind = 'cafe' | 'salon' | 'car';

interface OfferSample {
  category: string;
  title: string;
  text: string;
}

const offerSamples: Record<OfferKind, OfferSample> = {
  cafe: {
    category: 'YOUR CAFÉ',
    title: 'A coffee.\nA cookie.\nA good call.',
    text: 'Example: a complimentary cookie with a qualifying coffee purchase.',
  },
  salon: {
    category: 'YOUR SALON',
    title: 'Fresh cut.\nSame Duck.',
    text: 'Example: Rs 500 off a qualifying hair colour service. Check the salon’s terms.',
  },
  car: {
    category: 'YOUR CAR WASH',
    title: 'Clean car.\nDirty Duck.',
    text: 'Example: a special price on a qualifying wash. The car gets the clean treatment.',
  },
};

export default function OffersPage() {
  const [activeKind, setActiveKind] = useState<OfferKind>('cafe');
  const destinations = getDestinations();
  const sample = offerSamples[activeKind];

  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>THERE’S GOOD STUFF AROUND
          </span>
          <h1>
            Worth the visit.<br />
            <span className="cobalt">Not the spam.</span>
          </h1>
          <p className="lead">
            Discover offers from participating Loyal Duck businesses. The coffee place, the salon, the car wash. Same account. More reasons to use it.
          </p>
          <div className="hero-buttons">
            <a className="button button-primary" href={destinations.customerAppUrl}>
              Browse in Loyal Duck
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
          <p className="fineprint">
            This website explains the feature. Genuine merchant listings appear in the customer app from eligible participating businesses.
          </p>
        </div>

        {/* Offer Stage Card */}
        <div className="offer-stage">
          <div className="paper-top">
            <span className="eyebrow">THE NEARBY IDEA</span>
            <span className="pill">EXAMPLE, NOT LIVE</span>
          </div>

          <div className="offer-switch" role="group" aria-label="Choose an example industry">
            <button
              type="button"
              data-offer-kind="cafe"
              aria-pressed={activeKind === 'cafe'}
              onClick={() => setActiveKind('cafe')}
            >
              Café
            </button>
            <button
              type="button"
              data-offer-kind="salon"
              aria-pressed={activeKind === 'salon'}
              onClick={() => setActiveKind('salon')}
            >
              Salon
            </button>
            <button
              type="button"
              data-offer-kind="car"
              aria-pressed={activeKind === 'car'}
              onClick={() => setActiveKind('car')}
            >
              Car wash
            </button>
          </div>

          <div className="offer-spot">
            <span className="eyebrow">{sample.category}</span>
            <h2 style={{ whiteSpace: 'pre-line' }}>{sample.title}</h2>
            <p>{sample.text}</p>
            <div className="ticket-rule"></div>
            <span className="sample-tag">SAMPLE OFFER · TERMS SET BY THE BUSINESS</span>
          </div>

          <p className="fineprint">
            Illustration only. Open the app for available merchants, branches, dates and terms.
          </p>
        </div>
      </section>

      {/* Section 1: Nearby choices */}
      <section className="section container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">YOUR AREA. YOUR CHOICE.</span>
            <h2>Nearby, without<br />following you around.</h2>
          </div>
          <p>Choose location access while browsing, or choose a city. Core loyalty works either way.</p>
        </div>
        <div className="info-grid">
          <article className="info-card">
            <span className="merchant-icon lavender">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <h3>Choose your area.</h3>
            <p>Use your device location in the app, or browse a city. No background location tracking is needed.</p>
          </article>

          <article className="info-card">
            <span className="merchant-icon yellow">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3ZM8 7h8M8 11h8M8 15h4" />
              </svg>
            </span>
            <h3>Read the actual deal.</h3>
            <p>Check the branch, dates, qualifying purchase, exclusions and any use limit before visiting.</p>
          </article>

          <article className="info-card">
            <span className="merchant-icon rose">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="7" r="3" />
                <path d="M2 21v-3a7 7 0 0 1 14 0v3M16 4a3 3 0 0 1 0 6m3 4a5 5 0 0 1 3 4v3" />
              </svg>
            </span>
            <h3>Let the team confirm.</h3>
            <p>Staff finds your existing account and records the offer redemption. Discounts are applied at the business’s normal checkout.</p>
          </article>
        </div>
      </section>

      {/* Duo Callout */}
      <section className="container duo-callout">
        <div>
          <span className="eyebrow">NOT THE SAME THING</span>
          <h2>A reward is earned.<br />An offer is offered.</h2>
          <p>Redeeming an offer does not automatically add or use loyalty points. The business’s terms explain what can be combined.</p>
        </div>
        <Link className="text-link" href="/how-it-works">
          Understand loyalty
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </section>

      {/* FAQ */}
      <section className="section container narrow-section">
        <div className="faq-list">
          <details>
            <summary>Will every offer be open to me?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Some offers are open to Loyal Duck customers; others are for a business’s existing members. Your app shows the offers you are eligible to see.</p>
            </div>
          </details>
          <details>
            <summary>Does publishing an offer send me a notification?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>No. Publishing and messaging are separate actions. Merchant campaigns are reviewed and subject to your preferences and platform limits.</p>
            </div>
          </details>
          <details>
            <summary>What if the business will not honour the offer?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Ask staff to check the terms and participating branch. Keep the offer reference and contact Loyal Duck through Help if the issue remains unresolved.</p>
            </div>
          </details>
        </div>
      </section>

      {/* Closing Strip */}
      <section className="closing-strip">
        <div className="container closing-inner">
          <div>
            <span className="eyebrow">ONE ACCOUNT. YOUR KIND OF PLACES.</span>
            <h2>A little loyalty.<br />A lot less faff.</h2>
          </div>
          <a className="button button-dark" href={destinations.customerAppUrl}>
            Get Loyal Duck
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
