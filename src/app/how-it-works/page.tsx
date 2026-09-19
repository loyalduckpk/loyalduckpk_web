import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Two steps. One account. — Loyal Duck',
  description: 'How to join Loyal Duck, identify yourself, earn separate merchant rewards and redeem with staff.',
};

export default function HowItWorksPage() {
  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>THE BEAUTIFULLY SIMPLE BIT
          </span>
          <h1>
            Two steps.<br />
            <span className="cobalt">One account.</span>
          </h1>
          <p className="lead">
            Your number. Your SMS code. Then your rewards live in one place—not in a different account for every shop.
          </p>
          <div className="hero-buttons">
            <Link className="button button-primary" href="/get-started">
              Get your Duck
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
            <Link className="button button-quiet" href="/#rewards">
              See the rewards
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
          <p className="fineprint">
            First-time verification depends on SMS delivery. Already registered? Keep using the same account.
          </p>
        </div>

        {/* Journey Paper Card */}
        <div className="journey-paper">
          <div className="paper-top">
            <span className="eyebrow">YOUR FIRST DUCK</span>
            <span className="pill">ONE-TIME SIGNUP</span>
          </div>
          <div className="big-ticket-number">
            02<span>steps.<br />Not another app for every shop.</span>
          </div>
          <div className="journey-line">
            <b>01</b>
            <div>
              <strong>Your number.</strong>
              <span>The one you use for Loyal Duck.</span>
            </div>
          </div>
          <div className="journey-line">
            <b>02</b>
            <div>
              <strong>Your SMS code.</strong>
              <span>Verify it. Your account is ready.</span>
            </div>
          </div>
          <div className="ticket-rule"></div>
          <div className="receipt-end">
            <strong>NEXT LOYAL DUCK BUSINESS</strong>
            <span>Same account. No repeat signup.</span>
          </div>
        </div>
      </section>

      {/* Section 1: In-Store Steps */}
      <section className="section container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">01 / ONCE YOU ARE IN</span>
            <h2>Show up.<br />We’ll remember.</h2>
          </div>
          <p>You keep buying from places you like. Their teams take care of the loyalty bits.</p>
        </div>
        <div className="editorial-steps">
          <article>
            <span className="step-no">01</span>
            <div>
              <h3>Find a participating business.</h3>
              <p>Look for Loyal Duck at the counter, on a table or in the app. The merchant QR opens that business; it does not award points by itself.</p>
            </div>
          </article>
          <article>
            <span className="step-no">02</span>
            <div>
              <h3>Let staff find your account.</h3>
              <p>Show your personal QR, give your Duck ID or tell staff your registered phone number. Already a Duck customer? No new merchant signup.</p>
            </div>
          </article>
          <article>
            <span className="step-no">03</span>
            <div>
              <h3>Earn that business’s rewards.</h3>
              <p>Staff records a qualifying purchase or visit. The business’s points or stamps update in your account.</p>
            </div>
          </article>
          <article>
            <span className="step-no">04</span>
            <div>
              <h3>Ready? Make it a little celebration.</h3>
              <p>Choose an available reward in the app. Staff confirms it at the business. Your balance updates when the redemption completes.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Section 2: Different Places */}
      <section className="soft-section">
        <div className="container section">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">02 / DIFFERENT PLACES. DIFFERENT PERKS.</span>
              <h2>Together.<br />Never mixed up.</h2>
            </div>
            <p>A café’s stamps stay with that café. A salon’s points stay with that salon. The convenient part is your one account.</p>
          </div>
          <div className="info-grid">
            <article className="info-card">
              <span className="merchant-icon yellow">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h1a3 3 0 0 1 0 6h-1M7 3v2m4-2v2m4-2v2" />
                </svg>
              </span>
              <h3>A café counts visits.</h3>
              <p>Five qualifying coffee purchases could unlock the next one free. Each business sets its own rules.</p>
            </article>
            <article className="info-card">
              <span className="merchant-icon lavender">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 10h18l-2-6H5l-2 6Zm1 0v10h16V10M9 20v-7h6v7M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
                </svg>
              </span>
              <h3>A shop rewards spend.</h3>
              <p>Earn points under that shop’s programme and use them on its own rewards.</p>
            </article>
            <article className="info-card">
              <span className="merchant-icon rose">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9h18v4H3zM5 13v8h14v-8M12 9v12" />
                  <path d="M12 9S5 9 5 5a3 3 0 0 1 5-2c2 2 2 6 2 6Zm0 0s7 0 7-4a3 3 0 0 0-5-2c-2 2-2 6-2 6Z" />
                </svg>
              </span>
              <h3>An offer is something else.</h3>
              <p>A temporary deal may not use your points at all. Read its terms and let staff confirm it.</p>
              <Link className="text-link" href="/offers">
                Explore offers
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3: FAQs */}
      <section className="section container narrow-section">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">A FEW USEFUL ANSWERS</span>
            <h2>Less mystery.<br />More free coffee.</h2>
          </div>
        </div>
        <div className="faq-list">
          <details>
            <summary>Do I have to scan every time?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>No. Returning customers can be found through their personal QR, Duck ID or registered phone number. Staff still confirms the qualifying action.</p>
            </div>
          </details>
          <details>
            <summary>Is every visit a stamp?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Only visits or purchases that meet that business’s published rules count. A scan on its own does not qualify.</p>
            </div>
          </details>
          <details>
            <summary>Can I use my points elsewhere?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>No. Rewards are merchant-specific. Your account brings the records together, not the balances.</p>
            </div>
          </details>
          <details>
            <summary>Will I need to sign in again?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Sometimes, for example on a new device or after a session expires. That is signing in to your existing account, not joining each business again.</p>
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
          <Link className="button button-dark" href="/get-started">
            Get Loyal Duck
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
