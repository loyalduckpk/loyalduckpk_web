'use client';

import React from 'react';
import Link from 'next/link';

export default function StaffGuidePage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>FOR THE PERSON AT THE COUNTER
          </span>
          <h1>
            Find. Record.<br />
            <span className="cobalt">Next customer.</span>
          </h1>
          <p className="lead">
            No new checkout system. No loyalty maths in your head. Just the right customer, the real purchase or visit, and a clear confirmation.
          </p>
          <div className="hero-buttons">
            <Link className="button button-primary" href="/get-started">
              Open Business login
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
            <button className="button button-quiet" type="button" onClick={handlePrint}>
              Print this guide
            </button>
          </div>
        </div>

        {/* Counter Cheat Card */}
        <aside className="counter-cheat">
          <span className="eyebrow">THE QUESTION TO REMEMBER</span>
          <blockquote>
            “Do you have<br />Loyal Duck?”
          </blockquote>
          <div className="ticket-rule"></div>
          <p>Personal QR · Duck ID · Phone number</p>
          <strong>Never ask for their SMS code.</strong>
        </aside>
      </section>

      {/* Steps */}
      <section className="section container">
        <div className="editorial-steps">
          <article>
            <span className="step-no">01</span>
            <div>
              <h3>Log in as yourself.</h3>
              <p>Use your own staff login, accept the staff use policy when prompted, and check the business and branch shown at the top.</p>
            </div>
          </article>
          <article>
            <span className="step-no">02</span>
            <div>
              <h3>Find the customer.</h3>
              <p>Scan their personal QR or use the approved Duck ID or exact phone lookup. Confirm the result before recording anything. No account? Use the existing registration flow or show the merchant signup QR.</p>
            </div>
          </article>
          <article>
            <span className="step-no">03</span>
            <div>
              <h3>Add the qualifying purchase or visit.</h3>
              <p>For points, enter the eligible bill amount; the system calculates the points. For visits, add the qualifying visit. A real action comes first; loyalty records it.</p>
            </div>
          </article>
          <article>
            <span className="step-no">04</span>
            <div>
              <h3>Wait for the result.</h3>
              <p>Use the returned confirmation. When the connection is uncertain, check recent activity before starting another transaction. Do not assume a missing screen means the first request failed.</p>
            </div>
          </article>
          <article>
            <span className="step-no">05</span>
            <div>
              <h3>Handle rewards and offers separately.</h3>
              <p>A reward uses that merchant’s points or visit entitlement. An offer follows its own terms. Staff must confirm the correct item and any physical discount in the normal checkout.</p>
            </div>
          </article>
          <article>
            <span className="step-no">06</span>
            <div>
              <h3>Made a mistake? Ask the manager.</h3>
              <p>Use the approved reversal process. Never compensate by creating a made-up sale, an extra visit or a manual balance change.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Note Panel */}
      <section className="container">
        <aside className="note-panel">
          <span className="merchant-icon lavender">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6l8-3Z" />
              <path d="m8 12 3 3 5-6" />
            </svg>
          </span>
          <div>
            <h3>Customer codes are private.</h3>
            <p>Never ask customers to share their sign-in OTP. A personal QR or Duck ID identifies an account; it is not permission to take arbitrary rewards.</p>
          </div>
        </aside>
      </section>

      {/* Support Links */}
      <section className="section container support-links">
        <Link className="link-card" href="/merchant-terms">
          <span className="eyebrow">FOR MANAGERS</span>
          <h3>Invite. Acknowledge. Activate.</h3>
          <p>Staff must accept the current use policy before counter access. Remove access when someone leaves.</p>
          <span className="link-arrow">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </span>
        </Link>
        <Link className="link-card" href="/contact">
          <span className="eyebrow">SOMETHING IS NOT RIGHT</span>
          <h3>Get help with a transaction.</h3>
          <p>Keep the business, time and transaction reference. Never include passwords or sign-in codes.</p>
          <span className="link-arrow">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </span>
        </Link>
      </section>
    </div>
  );
}
