'use client';

import React from 'react';

export default function HowItWorks() {
  return (
    <section className="section container marketing-scope" id="how-it-works" aria-labelledby="how-title">
      <div className="section-heading split-heading">
        <div>
          <span className="eyebrow">01 / THE BEAUTIFULLY SIMPLE BIT</span>
          <h2 id="how-title">Join once.<br /> Keep showing up.</h2>
        </div>
        <p>
          You’re already a regular somewhere.<br /> Now there’s one account that remembers.<br /> 
          <strong>No new signup at the next Duck spot.</strong>
        </p>
      </div>
      
      <div className="steps-grid">
        <article className="step hover:bg-white/40 p-6 -m-6 rounded-2xl transition-colors duration-300">
          <span className="step-number text-[#3155FF]">01</span>
          <h3>One number.<br /> You’re in.</h3>
          <p>Verify your phone to create your Loyal Duck account. That’s the only signup.</p>
        </article>
        
        <article className="step hover:bg-white/40 p-6 -m-6 rounded-2xl transition-colors duration-300">
          <span className="step-number text-[#3155FF]">02</span>
          <h3>Same you.<br /> Different places.</h3>
          <p>Show your Duck ID, let staff scan your personal QR, or tell them your number.</p>
        </article>
        
        <article className="step hover:bg-white/40 p-6 -m-6 rounded-2xl transition-colors duration-300">
          <span className="step-number text-[#3155FF]">03</span>
          <h3>You do you.<br /> Duck keeps count.</h3>
          <p>Staff records your purchase or qualifying visit. Redeem your reward at the business that offers it.</p>
        </article>
      </div>
      
      <div className="footnote-line">
        A shop’s QR helps you find or join it. <strong>Scanning alone doesn’t earn points.</strong>
      </div>
    </section>
  );
}
