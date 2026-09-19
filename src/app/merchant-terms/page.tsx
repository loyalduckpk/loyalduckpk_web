'use client';

import React from 'react';
import Link from 'next/link';

export default function MerchantTermsPage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="support-page legal-page">
      {/* Page Hero */}
      <section className="container page-hero text-only legal-hero">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>THE SERIOUS BIT
          </span>
          <h1>Your agreement, explained.</h1>
          <p className="lead">
            A plain-language guide for business owners. Read the actual merchant agreement before signing.
          </p>
        </div>
      </section>

      {/* Draft Banner */}
      <div className="container legal-banner" data-legal-draft>
        <strong>Legal-review draft · 19 September 2026.</strong> This page is a proposed presentation and wording, not a replacement for the currently approved policy or signed agreement. Confirm the final company, contact, retention and commercial terms before publishing.
      </div>

      {/* Summary */}
      <section className="container legal-summary">
        <span className="eyebrow">AT A GLANCE</span>
        <p>
          Your authorised representative signs. Your business chooses and honours the rewards. Staff gets appropriate access. Paid campaigns are optional. Clear terms still matter.
        </p>
      </section>

      {/* Layout with TOC and Sections */}
      <div className="container legal-layout">
        <aside className="legal-toc">
          <span className="eyebrow">ON THIS PAGE</span>
          <a href="#authority">01 / Who signs what</a>
          <a href="#setup">02 / A simple setup, with real checks</a>
          <a href="#rewards">03 / Your rewards and customer promises</a>
          <a href="#staff">04 / Your team and access</a>
          <a href="#campaigns">05 / Offers and campaigns</a>
          <a href="#data">06 / Customer information</a>
          <a href="#cost">07 / Free access and optional services</a>
          <a href="#leaving">08 / Changes, leaving and questions</a>
          <button type="button" className="text-link" onClick={handlePrint}>
            Print this page
          </button>
        </aside>

        <article className="legal-body">
          <section id="authority">
            <span className="legal-number">01</span>
            <h2>Who signs what</h2>
            <p>
              An authorised owner or representative signs the business’s merchant agreement with <strong>COOPON PVT LTD, Pakistan</strong>, the operator of Loyal Duck.
            </p>
            <p>
              Individual cashiers and staff accept a shorter staff use acknowledgement through their own account. They should not be made the business’s signatory merely because they operate the counter. This guide does not replace either document.
            </p>
          </section>

          <section id="setup">
            <span className="legal-number">02</span>
            <h2>A simple setup, with real checks</h2>
            <p>
              The setup target is around five minutes for a straightforward loyalty programme after business approval. Application review, verification, agreement signing and activation are separate.
            </p>
            <p>
              You do not need to build a loyalty app or replace your POS. You do need to provide accurate business information and have the right person accept the agreement.
            </p>
          </section>

          <section id="rewards">
            <span className="legal-number">03</span>
            <h2>Your rewards and customer promises</h2>
            <p>
              Your business defines the programme, qualifying actions, reward cost and exclusions. Choose terms your team can explain and that your business can honour.
            </p>
            <p>
              Loyal Duck records the authorised activity. Your business supplies the goods, services or discounts. Changes must follow the programme and agreement rules, rather than retrospectively erasing promises or records.
            </p>
          </section>

          <section id="staff">
            <span className="legal-number">04</span>
            <h2>Your team and access</h2>
            <p>
              Invite each staff member with their own account. Check their role and branch. Remove access when no longer needed and do not share a manager login around the counter.
            </p>
            <p>
              Record genuine purchases and visits, verify the customer for redemption, and use authorised corrections. Staff activity is recorded for operational accountability.
            </p>
          </section>

          <section id="campaigns">
            <span className="legal-number">05</span>
            <h2>Offers and campaigns</h2>
            <p>
              Offer claims, dates, terms and branch details must be accurate. A campaign is a separate, reviewed request to communicate a promotion to eligible customers.
            </p>
            <p>
              Approval is tied to the reviewed content. Payment does not permit bypassing preferences or sending arbitrary messages. Fees and relevant cancellation or exception handling should be clear in the actual quote and agreement.
            </p>
          </section>

          <section id="data">
            <span className="legal-number">06</span>
            <h2>Customer information</h2>
            <p>
              Use customer information only for your legitimate Loyal Duck business relationship. Do not harvest phone numbers, use another merchant’s history or export the platform’s customer audience for unrelated messaging.
            </p>
            <p>
              Direct account verification should use the official flow. Staff must not ask for a customer’s SMS sign-in code or password.
            </p>
          </section>

          <section id="cost">
            <span className="legal-number">07</span>
            <h2>Free access and optional services</h2>
            <p>
              Core loyalty for the first location is offered free during the founding launch, subject to the terms confirmed at onboarding. No blanket promise of unlimited free locations, staff, printed kits or campaign sends is made here.
            </p>
            <p>
              The actual agreement and quote should specify any paid service, billing period, commitment, cancellation and refund arrangements. This website does not invent a minimum term, an exclusivity requirement or a no-contract promise.
            </p>
          </section>

          <section id="leaving">
            <span className="legal-number">08</span>
            <h2>Changes, leaving and questions</h2>
            <p>
              Before closing your business account, work through active rewards, scheduled campaigns, staff access, records and any applicable agreement obligations. Personal account deletion is a separate privacy process.
            </p>
            <p>
              Read the agreement, ask questions and retain your signed copy. Our aim is understandable terms—not the absence of responsibilities. Use the{' '}
              <Link href="/contact">business onboarding topic</Link> for questions before signing.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
