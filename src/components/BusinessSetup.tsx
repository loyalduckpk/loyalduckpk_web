import React from 'react';

export default function BusinessSetup() {
  return (
    <section className="section container" aria-labelledby="setup-title">
      <div className="section-heading split-heading">
        <div>
          <span className="eyebrow">01 / YOUR BUSINESS. YOUR RULES.</span>
          <h2 id="setup-title">Less setup theatre.<br /> More getting started.</h2>
        </div>
        <p>
          Your next customer might already have Loyal Duck. They keep their account.<br />{' '}
          <strong>You give them a new reason to return.</strong>
        </p>
      </div>
      <div className="steps-grid">
        <article className="step">
          <span className="step-number">01</span>
          <h3>Tell us<br /> about your place.</h3>
          <p>Find your business or add it yourself—no Google listing required. Unlisted or mobile businesses start basic loyalty without upfront payment or routine approval.</p>
        </article>
        <article className="step">
          <span className="step-number">02</span>
          <h3>Choose what<br /> loyalty looks like.</h3>
          <p>Run your own points or visits programme. Free coffee, a discount or a service. Your rewards stay separate, while customers use their one Loyal Duck account.</p>
        </article>
        <article className="step">
          <span className="step-number">03</span>
          <h3>Give your<br /> team the controls.</h3>
          <p>Staff use the existing Business browser workflow beside your POS. Put your QR at the counter; your team identifies the customer and records the transaction.</p>
        </article>
      </div>
    </section>
  );
}
