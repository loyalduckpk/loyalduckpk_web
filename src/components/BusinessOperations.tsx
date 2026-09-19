import React from 'react';

export default function BusinessOperations() {
  return (
    <section className="operations-section">
      <div className="container operations-layout">
        <div>
          <span className="eyebrow">04 / THE QUIETLY IMPORTANT STUFF</span>
          <h2>
            Funny name.<br /> Serious about<br /> your counter.
          </h2>
        </div>
        <div className="operations-list">
          <article>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 3h6v6H3V3Zm12 0h6v6h-6V3ZM3 15h6v6H3v-6Zm12 0h2v2h-2v-2Zm4 0h2v6h-6v-2"/>
            </svg>
            <div>
              <h3>Find them. Reward them. Next.</h3>
              <p>
                Duck ID, personal QR or phone lookup. Staff sees the customer’s rewards at your business—not everyone else’s.
              </p>
            </div>
          </article>
          <article>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 3h14v18l-3-2-4 2-4-2-3 2V3Zm4 5h6m-6 4h6m-6 4h3"/>
            </svg>
            <div>
              <h3>A record you can reconcile.</h3>
              <p>
                Check activity, review redemptions and export transaction reports. Mistakes get a traceable manager reversal.
              </p>
            </div>
          </article>
          <article>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z"/>
              <path d="m8 11 3 3 5-5"/>
            </svg>
            <div>
              <h3>The right access for each person.</h3>
              <p>
                Owners and managers handle setup and teams. Staff focuses on serving customers.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
