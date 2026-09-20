'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
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
          <h1>Terms of Service</h1>
          <p className="lead">
            The service relationship, reward rules and responsibilities behind Loyal Duck.
          </p>
        </div>
      </section>

      {/* Policy Effective Banner */}
      <div className="container legal-banner">
        <strong>Effective Date: 20 September 2026.</strong> Official Terms of Service for Loyal Duck, operated by <strong>COOPON PVT LTD, Pakistan</strong>.
      </div>

      {/* Summary */}
      <section className="container legal-summary">
        <span className="eyebrow">AT A GLANCE</span>
        <p>
          Use your own account. Keep merchant rewards separate. Check the offer terms. Keep transactions genuine. Contact us when something needs checking.
        </p>
      </section>

      {/* Layout */}
      <div className="container legal-layout">
        <aside className="legal-toc">
          <span className="eyebrow">ON THIS PAGE</span>
          <a href="#operator">01 / The service and its operator</a>
          <a href="#account">02 / Using an account</a>
          <a href="#loyalty">03 / Points, visits and rewards</a>
          <a href="#offers">04 / Offers and communications</a>
          <a href="#fees">05 / Fees and merchant services</a>
          <a href="#conduct">06 / Fair use</a>
          <a href="#privacy">07 / Privacy and leaving</a>
          <a href="#availability">08 / Availability, disputes and support</a>
          <button type="button" className="text-link" onClick={handlePrint}>
            Print this page
          </button>
        </aside>

        <article className="legal-body">
          <section id="operator">
            <span className="legal-number">01</span>
            <h2>The service and its operator</h2>
            <p>
              Loyal Duck and loyalduck.pk are operated by <strong>COOPON PVT LTD, Pakistan</strong>. Loyal Duck provides customer loyalty accounts, merchant tools, offers and related communications.
            </p>
            <p>
              These proposed terms describe the general service. The approved terms presented at registration and any signed merchant agreement must govern the live relationship. No preview button in this website signs a contract or activates an account.
            </p>
          </section>

          <section id="account">
            <span className="legal-number">02</span>
            <h2>Using an account</h2>
            <p>
              Use accurate account information and only phone numbers or email addresses you are authorised to use. Keep sign-in codes and passwords private. Do not impersonate another person or use someone else’s rewards.
            </p>
            <p>
              One customer account can be used across participating businesses. You may need to reauthenticate; one-time registration is not a promise of a permanent login session.
            </p>
          </section>

          <section id="loyalty">
            <span className="legal-number">03</span>
            <h2>Points, visits and rewards</h2>
            <p>
              Each participating business sets and honours its own programme rules, qualification criteria and rewards. Balances are separate between businesses and are not a pooled cash balance.
            </p>
            <p>
              Staff records qualifying purchases or visits. Scanning a merchant QR alone does not create an entitlement. Redemption follows the applicable reward terms and customer/staff confirmation workflow.
            </p>
            <p>
              An error should be raised using its transaction reference. Authorised reversals preserve a record rather than silently editing history. A merchant reward is not a payment made by Loyal Duck on the merchant’s behalf.
            </p>
          </section>

          <section id="offers">
            <span className="legal-number">04</span>
            <h2>Offers and communications</h2>
            <p>
              Offers can be limited by branch, dates, membership, availability, qualifying purchases or stated use limits. Check the details before relying on an offer. The merchant applies any actual discount through its own checkout.
            </p>
            <p>
              Campaigns are separate from organic offer publication. Messages are reviewed and must respect customer eligibility, preferences and platform limits. We do not promise that every push will be displayed, read or cause a purchase.
            </p>
          </section>

          <section id="fees">
            <span className="legal-number">05</span>
            <h2>Fees and merchant services</h2>
            <p>
              Customer accounts are free in the current product. The founding first-location offer for businesses applies to core loyalty under the terms confirmed at onboarding.
            </p>
            <p>
              Extra locations, physical materials and optional campaigns may have separate prices. A campaign’s applicable quote is shown before payment on Business Web. Do not assume a free account includes unlimited campaign sends or printed materials.
            </p>
          </section>

          <section id="conduct">
            <span className="legal-number">06</span>
            <h2>Fair use</h2>
            <p>
              Do not create false transactions, misuse staff access, harvest customer information, bypass approvals, abuse messaging, tamper with QR codes or interfere with the service. Merchants must make accurate offers and honour valid terms.
            </p>
            <p>
              Access or content may be restricted to investigate misuse or protect users. A restriction should not be used to obstruct a legitimate privacy request.
            </p>
          </section>

          <section id="privacy">
            <span className="legal-number">07</span>
            <h2>Privacy and leaving</h2>
            <p>
              The <Link href="/privacy">Privacy Policy</Link> describes data handling. You can request account deletion through the app or <Link href="/delete-account">this website</Link>. Certain limited records may be retained for stated legitimate purposes.
            </p>
            <p>
              Deleting a staff or owner’s personal identity is different from closing a business. An authorised transfer or closure process may be needed to avoid abandoning staff, customers or unresolved merchant obligations.
            </p>
          </section>

          <section id="availability">
            <span className="legal-number">08</span>
            <h2>Availability, disputes and support</h2>
            <p>
              Network connections and external providers can affect verification, availability and delivery. The service does not replace a merchant’s payment or ordering system, and a demo is not a real transaction.
            </p>
            <p>
              Start reward or offer issues with the participating business, and contact Loyal Duck with the reference if support is needed. Campaign payment issues require review of the actual provider and campaign state; this draft does not promise automatic refunds or make all fees non-refundable.
            </p>
            <p>
              Applicable mandatory consumer rights are not excluded by this draft. Governing law, dispute procedure, liability allocation and any term or termination provisions must be approved by qualified counsel before these terms are published as binding terms.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
