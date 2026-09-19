import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="support-page">
      <section className="container error-page">
        <span className="eyebrow">404 / WRONG TURN. RIGHT WEBSITE.</span>
        <div className="error-mascot-wrap" aria-hidden="true">
          <img
            src="/brand/duck-mascot.png"
            alt="Loyal Duck Mascot"
            className="error-duck-img"
          />
        </div>
        <div className="error-number" aria-hidden="true">
          4<span>0</span>4
        </div>
        <h1>No Duck here.</h1>
        <p>
          The page has moved, or that link has gone a little off course.<br />
          Your rewards have not.
        </p>
        <div className="hero-buttons">
          <Link className="button button-primary" href="/">
            Back to Loyal Duck
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
          <Link className="button button-quiet" href="/help">
            Get help
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
