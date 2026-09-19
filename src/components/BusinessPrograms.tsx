import React from 'react';

export default function BusinessPrograms() {
  return (
    <section className="business-programs section" aria-labelledby="programs-title">
      <div className="container">
        <div className="center-heading">
          <span className="eyebrow">02 / TWO GOOD WAYS TO SAY “COME BACK”</span>
          <h2 id="programs-title">Pick a programme.<br /> We’ll do the counting.</h2>
        </div>
        <div className="program-grid">
          <article className="program-card points-program">
            <div className="program-card-head">
              <span className="merchant-icon lavender">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m12 2 2.6 6.7L22 9l-5.8 4.7 2 7.3-6.2-4-6.2 4 2-7.3L2 9l7.4-.3L12 2Z"/>
                </svg>
              </span>
              <span className="micro-label">FOR VARYING BILLS</span>
            </div>
            <h3>Points.</h3>
            <p>Reward customers for what they spend.</p>
            <div className="program-example">
              <span>EXAMPLE</span>
              <strong>Rs 100 = 1 point</strong>
              <div className="program-arrow">↓</div>
              <strong>500 points = free dessert</strong>
            </div>
            <p className="program-caption">Staff enters the bill. Loyal Duck calculates the points.</p>
          </article>

          <article className="program-card visits-program">
            <div className="program-card-head">
              <span className="merchant-icon yellow">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h1a3 3 0 0 1 0 6h-1M7 3v2m4-2v2m4-2v2"/>
                </svg>
              </span>
              <span className="micro-label">FOR QUALIFYING VISITS</span>
            </div>
            <h3>Visits.</h3>
            <p>Make the next visit a little more rewarding.</p>
            <div className="program-example">
              <span>EXAMPLE</span>
              <div className="stamp-row" aria-hidden="true">
                <span className="stamp filled">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 12 4 4L19 6"/>
                  </svg>
                </span>
                <span className="stamp filled">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 12 4 4L19 6"/>
                  </svg>
                </span>
                <span className="stamp filled">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 12 4 4L19 6"/>
                  </svg>
                </span>
                <span className="stamp filled">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 12 4 4L19 6"/>
                  </svg>
                </span>
                <span className="stamp filled">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 12 4 4L19 6"/>
                  </svg>
                </span>
              </div>
              <strong>Buy 5 coffees. The 6th is free.</strong>
            </div>
            <p className="program-caption">Staff records the visit. Loyal Duck tracks the progress.</p>
          </article>
        </div>
        <p className="center-note">
          Restaurants. Cafés. Salons. Shops. Car washes. <strong>Your kind of business.</strong>
        </p>
      </div>
    </section>
  );
}
