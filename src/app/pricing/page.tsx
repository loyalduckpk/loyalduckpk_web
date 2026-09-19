import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simple pricing. No duck maths. — Loyal Duck',
  description: 'Free customer accounts and a founding first-location offer for businesses. Optional campaigns and physical materials are separate.',
};

export default function PricingPage() {
  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>KEEPING THIS PART SIMPLE
          </span>
          <h1>
            Small setup.<br />
            <span className="cobalt">Clear costs.</span>
          </h1>
          <p className="lead">
            Customers join free. Businesses can start core loyalty at their first location free during the founding launch. Optional extras stay optional.
          </p>
          <div className="hero-buttons">
            <Link className="button button-quiet" href="/business">
              For your business
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Price Card */}
        <div className="price-card price-support">
          <div className="paper-top">
            <span className="eyebrow">FOUNDING LAUNCH</span>
            <span className="pill">FIRST LOCATION</span>
          </div>
          <div className="price-value">
            Rs 0<span> to start</span>
          </div>
          <p>
            Your rewards programme.<br />
            Not a monthly software project.
          </p>
          <ul className="feature-list">
            <li>Points or visits</li>
            <li>Your own rewards</li>
            <li>Staff access &amp; customer lookup</li>
            <li>Merchant QR &amp; basic activity reporting</li>
          </ul>
          <Link className="button button-primary" href="/start-business">
            Start with one location
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
          <p className="price-note">
            Founding offer for core loyalty. Additional locations, campaigns and physical materials are separate. Onboarding confirms the applicable terms.
          </p>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="section container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">THREE DIFFERENT THINGS</span>
            <h2>Know what<br />you’re choosing.</h2>
          </div>
          <p>No invented pricing tiers. No mystery “contact sales” maze for basic loyalty.</p>
        </div>
        <div className="info-grid">
          <article className="info-card">
            <span className="merchant-icon lavender">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="6" y="2" width="12" height="20" rx="3" />
                <path d="M10 18h4M10 5h4" />
              </svg>
            </span>
            <h3>For customers: free.</h3>
            <p>One Loyal Duck account for rewards across participating businesses. The business sets the terms of each reward and offer.</p>
            <Link className="text-link" href="/get-started">
              Get Loyal Duck
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </article>

          <article className="info-card">
            <span className="merchant-icon yellow">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10h18l-2-6H5l-2 6Zm1 0v10h16V10M9 20v-7h6v7M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
              </svg>
            </span>
            <h3>First location: founding offer.</h3>
            <p>Start with core loyalty at one location. Discuss extra branches with us before rollout; no assumption of unlimited free locations.</p>
            <Link className="text-link" href="/start-business">
              Start with your place
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </article>

          <article className="info-card">
            <span className="merchant-icon rose">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 17h14l-2-3V9a5 5 0 0 0-10 0v5l-2 3Zm5 3a2 2 0 0 0 4 0M12 2v2" />
              </svg>
            </span>
            <h3>Campaigns: optional.</h3>
            <p>Reviewed messages to eligible, opted-in customers are a separate service. Your Business Web quote is shown before you choose to pay.</p>
            <Link className="text-link" href="/campaigns">
              See the campaign flow
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </article>
        </div>
      </section>

      {/* Two-Column Copy */}
      <section className="soft-section">
        <div className="container section two-column-copy">
          <div>
            <span className="eyebrow">THE BITS THAT STILL MATTER</span>
            <h2>Free software.<br />Real rewards.</h2>
          </div>
          <div className="body-stack">
            <p>
              Your business funds and honours the rewards it offers. A free coffee, discount or service is your commercial offer—not a payment from Loyal Duck.
            </p>
            <p>
              Printed stickers, counter stands, mascot appearances and other physical materials are quoted separately. They are not automatically included in free account access.
            </p>
            <p>
              Nothing here commits you to a paid campaign. Review its approved message and quote first.
            </p>
            <Link className="text-link" href="/merchant-terms">
              Read the merchant agreement guide
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Strip */}
      <section className="closing-strip">
        <div className="container closing-inner">
          <div>
            <span className="eyebrow">ONE LOCATION IS A GOOD BEGINNING.</span>
            <h2>Start small.<br />Give a Duck.</h2>
          </div>
          <Link className="button button-dark" href="/start-business">
            Plan my first programme
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
