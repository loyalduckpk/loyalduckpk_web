import React from 'react';

export default function BusinessGrowth() {
  return (
    <section className="section container business-growth" aria-labelledby="growth-title">
      <div className="growth-copy">
        <span className="eyebrow">03 / A GOOD OFFER DESERVES GOOD COMPANY</span>
        <h2 id="growth-title">
          Worth a visit.<br /> Not another<br /> <span className="serif-accent">“SALE!!!”</span>
        </h2>
        <p>
          Publish an offer for discovery in Loyal Duck. Then request a campaign to tell your own eligible, opted-in customers.
        </p>
        <p>
          We review the message before it goes out. Your promotion gets attention without turning the customer’s phone into a billboard.
        </p>
        <div className="growth-note">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z"/>
            <path d="m8 11 3 3 5-5"/>
          </svg>{' '}
          Reviewed by Loyal Duck. Controlled by customer preferences.
        </div>
      </div>

      <div className="campaign-card">
        <div className="campaign-top">
          <span>CAMPAIGN PREVIEW</span>
          <span className="pill">ILLUSTRATIVE</span>
        </div>
        <div className="notification-preview">
          <span className="notification-app">ld.</span>
          <div>
            <span>LOYAL DUCK · YOUR SALON</span>
            <h3>A little reason to come back.</h3>
            <p>Rs 500 off your next hair colour service. See the offer and terms in Loyal Duck.</p>
          </div>
        </div>
        <div className="campaign-path">
          <div>
            <span className="path-number">1</span>
            <span>Your offer</span>
            <span>Set the real deal.</span>
          </div>
          <div>
            <span className="path-number">2</span>
            <span>Our review</span>
            <span>Keep it clear and useful.</span>
          </div>
          <div>
            <span className="path-number">3</span>
            <span>Their choice</span>
            <span>Reach eligible, opted-in customers.</span>
          </div>
        </div>
        <p className="campaign-disclaimer">
          Optional campaigns are separate from free core loyalty. Applicable fees are shown before payment on Business Web.
        </p>
      </div>
    </section>
  );
}
