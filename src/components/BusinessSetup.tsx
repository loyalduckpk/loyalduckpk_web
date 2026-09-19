'use client';

import React from 'react';

export default function BusinessSetup() {
  return (
    <section className="section container marketing-scope" aria-labelledby="setup-title">
      <div className="section-heading split-heading">
        <div>
          <span className="eyebrow">01 / YOUR BUSINESS. YOUR RULES.</span>
          <h2 id="setup-title">Less setup theatre.<br /> More getting started.</h2>
        </div>
        <p>
          Your next customer might already have Loyal Duck. They keep their account.<br /> 
          <strong>You give them a new reason to return.</strong>
        </p>
      </div>
      <div className="steps-grid">
        <article className="step hover:bg-white/40 p-6 -m-6 rounded-2xl transition-colors duration-300">
          <span className="step-number text-[#3155FF]">01</span>
          <h3>Tell us<br /> about your place.</h3>
          <p>Add your business and branch details. We review your application and guide your authorised signatory through the agreement.</p>
        </article>
        <article className="step hover:bg-white/40 p-6 -m-6 rounded-2xl transition-colors duration-300">
          <span className="step-number text-[#3155FF]">02</span>
          <h3>Choose what<br /> loyalty looks like.</h3>
          <p>Points or visits. Free coffee, a discount or a service. Set a reward that works for your customers and your business.</p>
        </article>
        <article className="step hover:bg-white/40 p-6 -m-6 rounded-2xl transition-colors duration-300">
          <span className="step-number text-[#3155FF]">03</span>
          <h3>Give your<br /> team the controls.</h3>
          <p>Invite staff, set their access and put your QR at the counter. Your team identifies the customer and records what happened.</p>
        </article>
      </div>
    </section>
  );
}
