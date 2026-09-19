'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ConnectionDialog, { DestinationType } from '@/components/ConnectionDialog';

export default function GetStartedPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogDestination, setDialogDestination] = useState<DestinationType>('customerAppUrl');

  const openDialog = (dest: DestinationType) => {
    setDialogDestination(dest);
    setDialogOpen(true);
  };

  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero text-only">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>YOU’RE IN THE RIGHT PLACE
          </span>
          <h1>
            Which side<br />
            of the <span className="cobalt">counter?</span>
          </h1>
          <p className="lead">
            Here for your rewards, or here to give them? Both are good reasons to be here.
          </p>
        </div>
      </section>

      {/* Dual Portal Grid */}
      <section className="container portal-grid" id="connect">
        {/* Customer Portal */}
        <article className="portal-card customer-portal">
          <span className="eyebrow">FOR CUSTOMERS</span>
          <h2>My usuals.<br />My rewards.</h2>
          <p>
            One free account across participating businesses. Register with your number and SMS code. No new signup at every shop.
          </p>
          <div className="portal-actions">
            <button
              className="button button-primary"
              type="button"
              onClick={() => openDialog('customerAppUrl')}
            >
              Open Loyal Duck
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
            <button
              className="button button-quiet"
              type="button"
              onClick={() => openDialog('customerAppUrl')}
            >
              View Android app
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          </div>
          <p className="fineprint">
            Use the customer web experience on supported browsers, including iPhone. An Android store link appears only after it has been verified.
          </p>
        </article>

        {/* Business Portal */}
        <article className="portal-card business-portal" id="business">
          <span className="eyebrow">FOR BUSINESSES</span>
          <h2>Your regulars.<br />Your controls.</h2>
          <p>
            Staff, managers and owners: use Loyal Duck Business for the counter, rewards, promotions and reports.
          </p>
          <div className="portal-actions">
            <button
              className="button button-dark"
              type="button"
              onClick={() => openDialog('businessLoginUrl')}
            >
              Business login
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
            <Link className="button button-quiet" href="/start-business">
              New business? Start here
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
          <p className="fineprint">
            Use the account invited by your business. Do not enter your password or OTP on an unofficial page.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className="section container narrow-section">
        <div className="faq-list">
          <details>
            <summary>Do I need two apps?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Customers only need Loyal Duck. Staff and managers use Loyal Duck Business for their work. Both use the same platform, with different permissions.</p>
            </div>
          </details>
          <details>
            <summary>Can I use the browser?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>The customer and Business web experiences are available on supported browsers. This page will open the configured official destination.</p>
            </div>
          </details>
          <details>
            <summary>Does signup take two seconds?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Signup is deliberately short: phone number, then SMS verification. Delivery and network speed vary, so we do not promise a two-second verified account. Returning customers do not register again.</p>
            </div>
          </details>
        </div>
      </section>

      <ConnectionDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        destination={dialogDestination}
      />
    </div>
  );
}
