import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust & Privacy Choices · Your Rewards. Your Choices.',
  description:
    'Understand merchant privacy, notification choices, optional location, and account controls at Loyal Duck. Your data is never sold.',
  alternates: {
    canonical: '/trust',
  },
  openGraph: {
    title: 'Trust & Privacy at Loyal Duck — Clear Boundaries, No Data Selling',
    description:
      'A funny name with serious boundaries. Understand merchant privacy, permissions, and account deletion controls.',
    url: 'https://loyalduck.pk/trust',
  },
};

export default function TrustPage() {
  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero text-only">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>THE SERIOUS PART OF LOYAL DUCK
          </span>
          <h1>
            Your rewards.<br />
            <span className="cobalt">Your choices.</span>
          </h1>
          <p className="lead">
            A funny name should still come with clear boundaries. Here is what your account means—and what it does not give a business permission to do.
          </p>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="container trust-grid">
        <div className="info-grid">
          <article className="info-card">
            <span className="merchant-icon lavender">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="7" r="3" />
                <path d="M2 21v-3a7 7 0 0 1 14 0v3M16 4a3 3 0 0 1 0 6m3 4a5 5 0 0 1 3 4v3" />
              </svg>
            </span>
            <h3>One identity. Separate relationships.</h3>
            <p>A business sees its relationship with you, not your reward history at other merchants.</p>
          </article>

          <article className="info-card">
            <span className="merchant-icon yellow">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <h3>Nearby is a choice.</h3>
            <p>Choose location access while browsing offers, or choose a city. Loyalty does not need background location.</p>
          </article>

          <article className="info-card">
            <span className="merchant-icon rose">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 17h14l-2-3V9a5 5 0 0 0-10 0v5l-2 3Zm5 3a2 2 0 0 0 4 0M12 2v2" />
              </svg>
            </span>
            <h3>Marketing is controlled.</h3>
            <p>Merchant campaigns go through review and must respect your preferences and platform limits.</p>
          </article>

          <article className="info-card">
            <span className="merchant-icon lavender">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3" />
              </svg>
            </span>
            <h3>Your login stays yours.</h3>
            <p>Staff should never need your SMS sign-in code. Use your personal QR, Duck ID or registered number for customer lookup.</p>
          </article>

          <article className="info-card">
            <span className="merchant-icon yellow">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3ZM8 7h8M8 11h8M8 15h4" />
              </svg>
            </span>
            <h3>Mistakes leave a record.</h3>
            <p>Authorised corrections are recorded rather than silently rewriting transaction history.</p>
          </article>

          <article className="info-card">
            <span className="merchant-icon rose">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6l8-3Z" />
                <path d="m8 12 3 3 5-6" />
              </svg>
            </span>
            <h3>Leaving is a real option.</h3>
            <p>Request account deletion in the app or through the public web route. Identity verification protects you.</p>
            <Link className="text-link" href="/delete-account">
              Delete account
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </article>
        </div>
      </section>

      {/* Two-Column Copy */}
      <section className="section container two-column-copy">
        <div>
          <span className="eyebrow">TWO DIFFERENT CONTROLS</span>
          <h2>Permissions.<br />Preferences.</h2>
        </div>
        <div className="body-stack">
          <p>
            <strong>Your phone’s permission</strong> controls whether the app may display push notifications. <strong>Your Loyal Duck preferences</strong> control the messages you choose to receive. One is not a substitute for the other.
          </p>
          <p>
            Use Me → notification settings for your account preferences. Inbox entries are separate from a push appearing on your lock screen.
          </p>
          <p>
            A merchant paying for a campaign does not get permission to bypass those choices.
          </p>
          <Link className="text-link" href="/privacy">
            Read the privacy details
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Closing Strip */}
      <section className="closing-strip">
        <div className="container closing-inner">
          <div>
            <span className="eyebrow">NO SECURITY BADGES WE HAVE NOT EARNED.</span>
            <h2>Clear is a feature.</h2>
          </div>
          <Link className="button button-dark" href="/contact">
            Ask a privacy question
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
