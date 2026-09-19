'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type ToneType = 'simple' | 'friendly' | 'duck';

interface MessageSample {
  title: string;
  body: string;
}

const toneSamples: Record<ToneType, MessageSample> = {
  simple: {
    title: 'Rs 500 off hair colour.',
    body: 'A sample salon offer. Check participating branches, dates and terms in the app.',
  },
  friendly: {
    title: 'A little reason to come back.',
    body: 'Your salon has a sample Rs 500 hair-colour offer. See the details and terms.',
  },
  duck: {
    title: 'Fresh colour. Same Duck.',
    body: 'A sample Rs 500 hair-colour offer from your salon. The terms are sensible, too.',
  },
};

export default function CampaignsPage() {
  const [activeTone, setActiveTone] = useState<ToneType>('simple');
  const sample = toneSamples[activeTone];

  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>FOR BUSINESSES / OFFERS &amp; CAMPAIGNS
          </span>
          <h1>
            Worth opening.<br />
            <span className="cobalt">Not ignoring.</span>
          </h1>
          <p className="lead">
            Have a real offer? Tell the right customers without writing a notification from scratch—or turning their phones into billboards.
          </p>
          <div className="hero-buttons">
            <Link className="button button-primary" href="/start-business">
              Start with Loyal Duck
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
            <Link className="button button-quiet" href="/pricing">
              See pricing
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Campaign Demo */}
        <div className="campaign-demo">
          <div className="paper-top">
            <span className="eyebrow">SAME OFFER. THREE TONES.</span>
            <span className="pill">PREVIEW ONLY</span>
          </div>

          <div className="offer-switch" role="group" aria-label="Campaign writing style">
            <button
              type="button"
              data-tone="simple"
              aria-pressed={activeTone === 'simple'}
              onClick={() => setActiveTone('simple')}
            >
              Simple
            </button>
            <button
              type="button"
              data-tone="friendly"
              aria-pressed={activeTone === 'friendly'}
              onClick={() => setActiveTone('friendly')}
            >
              Friendly
            </button>
            <button
              type="button"
              data-tone="duck"
              aria-pressed={activeTone === 'duck'}
              onClick={() => setActiveTone('duck')}
            >
              Ducky
            </button>
          </div>

          <div className="notification-preview">
            <div className="notification-app">ld.</div>
            <div>
              <span className="eyebrow">LOYAL DUCK · YOUR SALON</span>
              <h3>{sample.title}</h3>
              <p>{sample.body}</p>
            </div>
          </div>

          <div className="review-strip">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 4 4L19 6" />
            </svg>
            <span>Your offer. Our review. Their choice.</span>
          </div>

          <p className="fineprint">
            Sample copy. Choosing a tone here does not create or send a campaign.
          </p>
        </div>
      </section>

      {/* Two Different Buttons */}
      <section className="section container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">FIRST, TWO DIFFERENT BUTTONS</span>
            <h2>Publish an offer.<br />Request a campaign.</h2>
          </div>
          <p>An offer can appear in the app. A campaign is a separate request to tell eligible, opted-in customers about it.</p>
        </div>
        <div className="info-grid">
          <article className="info-card">
            <span className="merchant-icon yellow">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <h3>Your offer, discoverable.</h3>
            <p>Add the actual deal, dates, branches and terms. Customers browse offers they are eligible to see.</p>
            <Link className="text-link" href="/offers">
              How offers work
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </article>

          <article className="info-card">
            <span className="merchant-icon lavender">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 17h14l-2-3V9a5 5 0 0 0-10 0v5l-2 3Zm5 3a2 2 0 0 0 4 0M12 2v2" />
              </svg>
            </span>
            <h3>Your message, reviewed.</h3>
            <p>Choose an audience and a writing style. Loyal Duck checks the offer and message before a send is approved.</p>
          </article>

          <article className="info-card">
            <span className="merchant-icon rose">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6l8-3Z" />
                <path d="m8 12 3 3 5-6" />
              </svg>
            </span>
            <h3>Their phone, their choice.</h3>
            <p>Customer preferences and frequency limits still apply. Payment does not buy a bypass.</p>
          </article>
        </div>
      </section>

      {/* Editorial Steps */}
      <section className="soft-section">
        <div className="container section">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">NO BLANK BLAST BUTTON</span>
              <h2>A little process.<br />A much better message.</h2>
            </div>
          </div>
          <div className="editorial-steps">
            <article>
              <span className="step-no">01</span>
              <div>
                <h3>Start with an existing promotion.</h3>
                <p>The message comes from a real offer with clear terms. No arbitrary links or free-for-all advertising copy.</p>
              </div>
            </article>
            <article>
              <span className="step-no">02</span>
              <div>
                <h3>Choose the audience and tone.</h3>
                <p>Select from the merchant audiences available in Business. Request custom wording when needed; our team reviews it.</p>
              </div>
            </article>
            <article>
              <span className="step-no">03</span>
              <div>
                <h3>Review, then choose whether to pay.</h3>
                <p>Your approved message and applicable quote come before payment. Campaign checkout is handled through Business Web.</p>
              </div>
            </article>
            <article>
              <span className="step-no">04</span>
              <div>
                <h3>Schedule. Send. See the useful numbers.</h3>
                <p>Eligible customers receive an in-app update and a push attempt where enabled. Reports distinguish actual opens and redemptions from a message merely accepted for delivery.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container narrow-section">
        <div className="faq-list">
          <details>
            <summary>Can I reach every Loyal Duck user?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>No. These campaigns are for your own eligible, opted-in customers. Nearby discovery is separate; you do not get another merchant’s customer list.</p>
            </div>
          </details>
          <details>
            <summary>Can I edit an approved message?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>A material change must return through review. The message that goes out must match the approved version.</p>
            </div>
          </details>
          <details>
            <summary>Are campaigns included in free core loyalty?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>No. Campaign sending is an optional service with an applicable quote shown before payment. You do not need a paid campaign to run core loyalty.</p>
            </div>
          </details>
          <details>
            <summary>What if an offer ends or a customer opts out?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Eligibility is checked before sending. Approval or payment does not override an expired offer, a paused promotion or customer preferences.</p>
            </div>
          </details>
        </div>
      </section>

      {/* Closing Strip */}
      <section className="closing-strip">
        <div className="container closing-inner">
          <div>
            <span className="eyebrow">BUSINESS GROWTH, WITHOUT THE SHOUTING.</span>
            <h2>Useful offer.<br />Respectful delivery.</h2>
          </div>
          <Link className="button button-dark" href="/get-started">
            Open Business
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
