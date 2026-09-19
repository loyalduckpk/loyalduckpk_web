import React from 'react';
import Link from 'next/link';

export default function BusinessInvite() {
  return (
    <section className="business-invite container" aria-labelledby="business-invite-title">
      <div className="invite-copy">
        <span className="eyebrow">RUN A PLACE PEOPLE LOVE?</span>
        <h2 id="business-invite-title">
          You bring the regulars.<br /> We’ll bring the Duck.
        </h2>
        <p>Your own rewards. A simple counter app. Offers worth coming back for.</p>
        <Link className="button button-light" href="/business">
          Meet Loyal Duck Business
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6"/>
          </svg>
        </Link>
      </div>
      <div className="invite-note" aria-hidden="true">
        <span>THIS PLACE</span>
        <strong>GIVES<br /> A DUCK.</strong>
        <span>YOURS COULD, TOO. ↗</span>
      </div>
    </section>
  );
}
