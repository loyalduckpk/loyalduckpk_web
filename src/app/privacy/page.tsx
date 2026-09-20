'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
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
          <h1>Privacy Policy</h1>
          <p className="lead">
            How Loyal Duck handles information across the customer app, Business app and website.
          </p>
        </div>
      </section>

      {/* Policy Effective Banner */}
      <div className="container legal-banner">
        <strong>Effective Date: 20 September 2026.</strong> Official Privacy Policy of Loyal Duck, operated by <strong>COOPON PVT LTD, Pakistan</strong>.
      </div>

      {/* Summary */}
      <section className="container legal-summary">
        <span className="eyebrow">AT A GLANCE</span>
        <p>
          One account, merchant-specific rewards, optional nearby location, controlled notifications and an accessible deletion route. The details below explain the boundaries.
        </p>
      </section>

      {/* Legal Layout with Sticky TOC */}
      <div className="container legal-layout">
        <aside className="legal-toc">
          <span className="eyebrow">ON THIS PAGE</span>
          <a href="#operator">01 / Who operates Loyal Duck</a>
          <a href="#information">02 / Information we use</a>
          <a href="#purpose">03 / Why it is used</a>
          <a href="#location">04 / Location, camera and notifications</a>
          <a href="#sharing">05 / Merchants and service providers</a>
          <a href="#retention">06 / Retention and account deletion</a>
          <a href="#choices">07 / Your choices and requests</a>
          <a href="#security">08 / Security and international processing</a>
          <a href="#website">09 / Website storage and changes</a>
          <button type="button" className="text-link" onClick={handlePrint}>
            Print this page
          </button>
        </aside>

        <article className="legal-body">
          <section id="operator">
            <span className="legal-number">01</span>
            <h2>Who operates Loyal Duck</h2>
            <p>
              <strong>loyalduck.pk is operated by COOPON PVT LTD, Pakistan.</strong> In this policy, “Loyal Duck”, “we” and “us” refer to that operator.
            </p>
            <p>
              This policy covers information used to operate customer loyalty accounts, merchant and staff tools, offers, campaigns, support and this website. Use our <Link href="/contact">contact page</Link> for privacy questions.
            </p>
          </section>

          <section id="information">
            <span className="legal-number">02</span>
            <h2>Information we use</h2>
            <p>
              Account information may include a phone number, display name, account identifier and authentication records. Business users also provide email and role information; authorised representatives provide business and agreement details.
            </p>
            <p>
              Service records include merchant memberships, points or visit activity, reward and offer redemptions, transaction references, campaign interactions and support correspondence.
            </p>
            <p>
              Technical records can include device and push identifiers, session information, IP address, timestamps, error reports and security events. We use these to operate, protect and troubleshoot the service.
            </p>
          </section>

          <section id="purpose">
            <span className="legal-number">03</span>
            <h2>Why it is used</h2>
            <p>
              We use information to authenticate accounts, maintain separate merchant rewards, record authorised transactions, fulfil redemptions, operate promotions, communicate permitted updates, process business applications and agreements, answer support requests and prevent misuse.
            </p>
            <p>
              Merchant campaign eligibility is based on that merchant’s relationship with the customer. Campaign reporting is not a licence to export the network’s customer contact data.
            </p>
          </section>

          <section id="location">
            <span className="legal-number">04</span>
            <h2>Location, camera and notifications</h2>
            <p>
              Nearby offers can use foreground device location when you choose that option. City selection is an alternative. Core loyalty does not require background location tracking.
            </p>
            <p>
              The Business app uses the camera for supported QR scanning. A website visit does not require camera, location or notification permission.
            </p>
            <p>
              Device notification permission and Loyal Duck message preferences are separate. You can manage preferences in the app. Turning off promotional notifications does not cancel your loyalty account.
            </p>
          </section>

          <section id="sharing">
            <span className="legal-number">05</span>
            <h2>Merchants and service providers</h2>
            <p>
              A participating business can access the information needed to operate its own customer relationship and rewards. It should not see your history with other merchants. Authorised platform staff may access limited information needed for operations, support, safety and privacy requests.
            </p>
            <p>
              The documented service uses Supabase for platform infrastructure, Twilio for phone verification and Firebase Cloud Messaging for push delivery. Business workflows may use Firma for electronic agreements, PayFast for campaign payments, and operational email/automation services. These providers perform their respective service functions; their own terms may also apply.
            </p>
            <p>
              We may disclose relevant information when required by applicable law, or where necessary to investigate misuse, protect people or resolve a dispute. We do not give merchants an unrestricted cross-business customer database.
            </p>
          </section>

          <section id="retention">
            <span className="legal-number">06</span>
            <h2>Retention and account deletion</h2>
            <p>
              You can request deletion in the app or from the <Link href="/delete-account">public account-deletion page</Link>. Identity verification is required before a destructive request proceeds. The currently documented flow includes a 72-hour cancellation window; the verified request confirmation gives the applicable status and timing.
            </p>
            <p>
              Deletion removes or de-identifies account information under the approved deletion process. Limited transaction, agreement, payment, security or dispute records may need to remain for specific legitimate purposes. Retention must be limited to the applicable purpose and obligation; removing a database link alone is not a guarantee that all related information is anonymous.
            </p>
            <p>
              Any retained categories, applicable periods and exceptions must be reflected in the final published retention schedule. Backup expiry and restoration controls must preserve completed deletion requests. The legal-review checklist accompanying this site identifies these details for final confirmation.
            </p>
          </section>

          <section id="choices">
            <span className="legal-number">07</span>
            <h2>Your choices and requests</h2>
            <p>
              You can manage account information and notification preferences in the app, choose whether to use location for discovery, and initiate deletion without having to reinstall the app.
            </p>
            <p>
              For access, correction, account recovery or another privacy request, contact us. We may need proportionate identity verification. Do not send passwords, OTPs, full payment-card details or unnecessary identity documents through a general support form.
            </p>
          </section>

          <section id="security">
            <span className="legal-number">08</span>
            <h2>Security and international processing</h2>
            <p>
              We use access controls, server-side authorisation and operational records to protect information. No website or app can honestly guarantee that a security incident is impossible. Report a concern through the <Link href="/contact">security topic on our contact page</Link>.
            </p>
            <p>
              Service providers may process information outside Pakistan. Before publication, the operator must confirm the provider list, processing locations and any safeguards or notices required for the markets actually served.
            </p>
          </section>

          <section id="website">
            <span className="legal-number">09</span>
            <h2>Website storage and changes</h2>
            <p>
              This supplied website does not add marketing trackers, advertising pixels or a cookie banner. Its interactive demonstrations run in memory. A configured contact form sends the information you submit to the support endpoint. Hosting providers may process ordinary request and security logs.
            </p>
            <p>
              The connected apps have their own sessions and service storage. Any analytics or additional tracking introduced later must be reflected in this policy and the appropriate consent controls.
            </p>
            <p>
              The final policy must show its effective date. Material changes should be communicated appropriately. The draft date above is not a statement that this policy is already legally approved.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
