'use client';

import React from 'react';
import Link from 'next/link';

export default function DeleteAccountPage() {
  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero privacy-action-hero">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>ACCOUNT &amp; DATA DELETION
          </span>
          <h1>
            Your account.<br />
            <span className="cobalt">Your decision.</span>
          </h1>
          <p className="lead">
            You can request account deletion in Loyal Duck or on the web. You do not need to reinstall the app, buy anything or explain why you are leaving.
          </p>
          <p className="fineprint">Operator: COOPON PVT LTD, Pakistan.</p>

          <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: '1rem', background: '#E9EDFF', border: '1px solid #3155FF' }}>
            <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: '#17181A' }}>
              Official compliance endpoint for Google Play Data Safety &amp; Apple App Store account deletion disclosures.
            </p>
          </div>
        </div>

        {/* Deletion Entry Aside */}
        <aside className="deletion-entry" id="procedures">
          <span className="eyebrow">REQUEST ACCOUNT DELETION</span>
          <h2>Start with an<br />identity check.</h2>
          <p>
            Continue to the existing secure deletion flow. Only the verified account holder can authorise the request.
          </p>
          <a
            className="button button-dark"
            href="mailto:privacy@loyalduck.com?subject=Account%20Deletion%20Request"
          >
            Email privacy officer
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
          <p className="fineprint">
            You will continue to the current Loyal Duck deletion service. This website does not collect your password or SMS verification code.
          </p>
          <div className="ticket-rule"></div>
          <strong>In the app</strong>
          <p>Me → Privacy / Account → Delete Account</p>
        </aside>
      </section>

      {/* What Happens Next Steps */}
      <section className="section container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">WHAT HAPPENS NEXT</span>
            <h2>Clear steps.<br />No guilt trip.</h2>
          </div>
          <p>
            Uninstalling the app does not delete the account. Use a verified deletion request to start the process.
          </p>
        </div>
        <div className="editorial-steps">
          <article>
            <span className="step-no">01</span>
            <div>
              <h3>Verify that the account is yours.</h3>
              <p>
                The existing deletion service checks your identity. Enter a verification code only inside that official flow, never in an unauthenticated support message.
              </p>
            </div>
          </article>
          <article>
            <span className="step-no">02</span>
            <div>
              <h3>Review the consequences and confirm.</h3>
              <p>
                Deletion removes access to your Loyal Duck profile and rewards. The documented process includes a 72-hour cancellation window; the verified confirmation shows your request’s timing.
              </p>
            </div>
          </article>
          <article>
            <span className="step-no">03</span>
            <div>
              <h3>Track completion.</h3>
              <p>
                After the cancellation window, the service processes deletion. You receive the applicable status or completion confirmation. Some limited records can remain for a specifically documented legal, security or reconciliation purpose.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Compliance Instructions Summary */}
      <section className="container" style={{ marginBottom: '3.5rem' }}>
        <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '1.5rem', border: '1px solid #DDDED9' }}>
          <span className="eyebrow">OFFICIAL PROCEDURES</span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.25rem' }}>
            3 Official Ways to Initiate Deletion
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div style={{ padding: '1.25rem', borderRadius: '1rem', background: '#F3F3F1' }}>
              <strong>1. In-App (Recommended)</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#5F6168' }}>
                Open Loyal Duck app → tap <b>Me</b> → <b>Privacy &amp; Account</b> → <b>Delete Account</b>. Type &ldquo;DELETE&rdquo; to confirm.
              </p>
            </div>
            <div style={{ padding: '1.25rem', borderRadius: '1rem', background: '#F3F3F1' }}>
              <strong>2. Web Session Verification</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#5F6168' }}>
                Sign in with your verified mobile number via SMS OTP to confirm identity. We never delete accounts from unverified public form posts.
              </p>
            </div>
            <div style={{ padding: '1.25rem', borderRadius: '1rem', background: '#F3F3F1' }}>
              <strong>3. Lost SIM / Assistance</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', color: '#5F6168' }}>
                If you lost access to your SIM and cannot receive an OTP, email <b>privacy@loyalduck.com</b>. Our privacy officer will assist within 72 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Changes (Data Panels) */}
      <section className="soft-section">
        <div className="container section">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">WHAT CHANGES</span>
              <h2>Personal data goes.<br />Some records may remain.</h2>
            </div>
          </div>
          <div className="data-panels">
            <article>
              <span className="eyebrow">REMOVED OR DE-IDENTIFIED</span>
              <h3>Your personal account.</h3>
              <p>
                Profile and sign-in associations, push installations, inbox and preference data, and other personal account links are permanently purged after the 72-hour grace period.
              </p>
            </article>
            <article>
              <span className="eyebrow">LIMITED RETENTION, WHEN JUSTIFIED</span>
              <h3>Specific operational records.</h3>
              <p>
                Ledger records (points redeemed, visits logged) are decoupled from your identity and retained in irreversible pseudonymized format (marked as &ldquo;Deleted Customer&rdquo;) pursuant to statutory financial auditing.
              </p>
            </article>
          </div>
          <p className="fineprint" style={{ marginTop: '1.5rem' }}>
            Deletion and retention are different processes. Any record kept for a legitimate requirement is limited to that purpose. Read the Privacy Policy for the approach and contact us with a specific privacy question.
          </p>
          <Link className="text-link" href="/privacy">
            Read the Privacy Policy
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container narrow-section">
        <div className="faq-list">
          <details>
            <summary>Do I have to contact support first?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>No. Start through the in-app or public web deletion route. Support is there for problems accessing the route or for exceptional identity issues.</p>
            </div>
          </details>
          <details>
            <summary>I am a cashier, manager or business owner.<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Personal account deletion is not the same as closing a business. Your role may need to be removed or business ownership transferred. The existing workflow handles these cases without silently deleting the merchant’s records.</p>
            </div>
          </details>
          <details>
            <summary>Can I just stop promotional notifications?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Yes. That is separate from account deletion. Use your notification settings. You do not have to choose this instead of deleting your account.</p>
            </div>
          </details>
          <details>
            <summary>The request page is not opening.<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Use the existing in-app deletion path or the privacy topic on our contact page. Do not send a password or OTP in a support request.</p>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
