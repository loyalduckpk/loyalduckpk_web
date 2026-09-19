import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us · Regular Places. Unusual Loyalty.',
  description:
    'Loyal Duck connects one customer account to separate rewards at many businesses across Pakistan. Operated by COOPON PVT LTD, Pakistan.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Loyal Duck — Regular Places. Unusual Loyalty.',
    description:
      'Loyal Duck connects one customer account to separate rewards at many businesses across Pakistan. Operated by COOPON PVT LTD.',
    url: 'https://loyalduck.pk/about',
  },
};

export default function AboutPage() {
  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>ABOUT THE DUCK
          </span>
          <h1>
            Regular places.<br />
            <span className="cobalt">Unusual loyalty.</span>
          </h1>
          <p className="lead">
            You already have a favourite café, a barber and a place you always go back to. Getting rewarded should not mean starting over at every door.
          </p>
          <div className="hero-buttons">
            <Link className="button button-primary" href="/how-it-works">
              How it works
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Manifesto Card */}
        <div className="manifesto-card">
          <span className="eyebrow">THE WHOLE IDEA</span>
          <div className="manifesto-line">One account.</div>
          <div className="manifesto-line">Your usuals.</div>
          <div className="manifesto-line blue">More good stuff.</div>
          <div className="ticket-rule"></div>
          <div className="manifesto-bottom">
            <p>
              Serious engine.<br />
              <strong>Unserious Duck.</strong>
            </p>
            <img
              src="/brand/duck-mascot.png"
              alt="Loyal Duck Mascot"
              className="manifesto-duck-img"
            />
          </div>
          <span className="mini-symbol">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5" />
            </svg>
          </span>
        </div>
      </section>

      {/* Two Column Body */}
      <section className="section container two-column-copy">
        <div>
          <span className="eyebrow">NOT ANOTHER EVERYTHING APP</span>
          <h2>A small idea.<br />Done properly.</h2>
        </div>
        <div className="body-stack">
          <p>
            One Loyal Duck account connects you to participating businesses. Each business keeps its own points, visits and rewards. Your account simply makes them easier to find and use.
          </p>
          <p>
            Businesses keep their existing checkout. Staff records the loyalty action in Loyal Duck Business. No new ordering system. No delivery platform. No pretending every shop is the same.
          </p>
          <p>
            Offers help customers discover another reason to visit. Reviewed campaigns keep the useful messages useful. The Duck supplies the personality, not a substitute for clear terms.
          </p>
        </div>
      </section>

      {/* Soft Section: 3 Cards */}
      <section className="soft-section">
        <div className="container section">
          <div className="info-grid">
            <article className="info-card">
              <span className="merchant-icon lavender">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="6" y="2" width="12" height="20" rx="3" />
                  <path d="M10 18h4M10 5h4" />
                </svg>
              </span>
              <h3>Simple for customers.</h3>
              <p>Register once. Keep your own account. See separate rewards without separate signups.</p>
            </article>

            <article className="info-card">
              <span className="merchant-icon yellow">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 10h18l-2-6H5l-2 6Zm1 0v10h16V10M9 20v-7h6v7M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
                </svg>
              </span>
              <h3>Practical for businesses.</h3>
              <p>Your rewards, your staff and your normal checkout. A familiar experience on both sides of the counter.</p>
            </article>

            <article className="info-card">
              <span className="merchant-icon rose">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6l8-3Z" />
                  <path d="m8 12 3 3 5-6" />
                </svg>
              </span>
              <h3>Clear about responsibility.</h3>
              <p>Businesses honour their offers. Loyal Duck keeps the records. Customers stay in control of their account.</p>
              <Link className="text-link" href="/trust">
                The trust page
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Operator Card */}
      <section className="section container operator-card">
        <span className="eyebrow">THE COMPANY BEHIND THE DUCK</span>
        <h2>Made for real places.<br />Operated from Pakistan.</h2>
        <p><strong>loyalduck.pk is operated by COOPON PVT LTD, Pakistan.</strong></p>
        <p>
          For service, business or privacy questions, use the Loyal Duck contact page. The Privacy Policy and Terms explain the service relationship in more detail.
        </p>
        <Link className="text-link" href="/contact">
          Contact Loyal Duck
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
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
