'use client';

import React from 'react';
import { ShieldCheck, MessageCircle } from 'lucide-react';

export default function BusinessGrowth() {
  return (
    <section className="section container business-growth marketing-scope" aria-labelledby="growth-title">
      <div className="growth-copy">
        <span className="eyebrow">03 / A GOOD OFFER DESERVES GOOD COMPANY</span>
        <h2 id="growth-title">Worth a visit.<br /> Not another<br /> <span className="serif-accent">“SALE!!!”</span></h2>
        <p>
          Publish an offer for discovery in Loyal Duck. Then request a campaign to tell your own eligible, opted-in customers.
        </p>
        <p>
          We review the message before it goes out. Your promotion gets attention without turning the customer’s phone into a billboard.
        </p>
        <div className="growth-note bg-slate-100 p-4 rounded-xl border border-slate-200">
          <ShieldCheck className="icon w-[18px] h-[18px] text-[#3155FF]" /> 
          <span>Reviewed by Loyal Duck. Controlled by customer preferences.</span>
        </div>
      </div>
      
      <div className="campaign-card glass-panel-cobalt text-white shadow-2xl">
        <div className="campaign-top">
          <span>CAMPAIGN PREVIEW</span>
          <span className="pill bg-white/20 border-white/20 text-white">ILLUSTRATIVE</span>
        </div>
        
        <div className="notification-preview glass-card text-[#17181A]">
          <span className="notification-app flex items-center justify-center">ld.</span>
          <div>
            <span>LOYAL DUCK · YOUR SALON</span>
            <h3>A little reason to come back.</h3>
            <p>Rs 500 off your next hair colour service. See the offer and terms in Loyal Duck.</p>
          </div>
        </div>
        
        <div className="campaign-path">
          <div>
            <span className="path-number text-[#3155FF]">1</span>
            <span>Your offer</span>
            <span>Set the real deal.</span>
          </div>
          <div>
            <span className="path-number text-[#3155FF]">2</span>
            <span>Our review</span>
            <span>Keep it clear and useful.</span>
          </div>
          <div>
            <span className="path-number text-[#3155FF]">3</span>
            <span>Their choice</span>
            <span>Reach eligible, opted-in customers.</span>
          </div>
        </div>
        <p className="campaign-disclaimer opacity-80 border-t border-white/20">
          Optional campaigns are separate from free core loyalty. Applicable fees are shown before payment on Business Web.
        </p>
      </div>
    </section>
  );
}
