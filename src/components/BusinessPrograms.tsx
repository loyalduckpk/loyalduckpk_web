'use client';

import React from 'react';
import { Star, Check, ArrowDown } from 'lucide-react';

export default function BusinessPrograms() {
  return (
    <section className="business-programs section marketing-scope glass-panel border-x-0" aria-labelledby="programs-title">
      <div className="container">
        <div className="center-heading">
          <span className="eyebrow">02 / TWO GOOD WAYS TO SAY “COME BACK”</span>
          <h2 id="programs-title">Pick a programme.<br /> We’ll do the counting.</h2>
        </div>
        
        <div className="program-grid">
          <article className="program-card points-program glass-card shadow-lg hover:shadow-xl transition-shadow cursor-default border-slate-200">
            <div className="program-card-head">
              <span className="merchant-icon lavender shadow-sm">
                <Star className="icon w-[18px] h-[18px] text-[#3155FF]" />
              </span>
              <span className="micro-label">FOR VARYING BILLS</span>
            </div>
            <h3>Points.</h3>
            <p>Reward customers for what they spend.</p>
            <div className="program-example bg-white/60 rounded-xl px-4 mt-6">
              <span>EXAMPLE</span>
              <strong>Rs 100 = 1 point</strong>
              <div className="program-arrow text-[#3155FF] my-2">
                <ArrowDown className="w-5 h-5 mx-auto" />
              </div>
              <strong>500 points = free dessert</strong>
            </div>
            <p className="program-caption text-[#5F6168]">
              Staff enters the bill. Loyal Duck calculates the points.
            </p>
          </article>
          
          <article className="program-card visits-program glass-card shadow-lg hover:shadow-xl transition-shadow cursor-default border-amber-200">
            <div className="program-card-head">
              <span className="merchant-icon yellow shadow-sm">
                <Check className="icon w-[18px] h-[18px] text-amber-900" />
              </span>
              <span className="micro-label bg-white/60 text-amber-900 border-amber-300">FOR QUALIFYING VISITS</span>
            </div>
            <h3>Visits.</h3>
            <p>Make the next visit a little more rewarding.</p>
            <div className="program-example bg-white/60 rounded-xl px-4 mt-6 border-amber-300 border-dashed">
              <span>EXAMPLE</span>
              <div className="stamp-row w-full flex justify-center mb-3" aria-hidden="true">
                <span className="stamp filled shadow-sm flex items-center justify-center">
                  <Check className="icon w-[17px] h-[17px] text-amber-900" />
                </span>
                <span className="stamp filled shadow-sm flex items-center justify-center">
                  <Check className="icon w-[17px] h-[17px] text-amber-900" />
                </span>
                <span className="stamp filled shadow-sm flex items-center justify-center">
                  <Check className="icon w-[17px] h-[17px] text-amber-900" />
                </span>
                <span className="stamp filled shadow-sm flex items-center justify-center">
                  <Check className="icon w-[17px] h-[17px] text-amber-900" />
                </span>
                <span className="stamp filled shadow-sm flex items-center justify-center">
                  <Check className="icon w-[17px] h-[17px] text-amber-900" />
                </span>
              </div>
              <strong>Buy 5 coffees. The 6th is free.</strong>
            </div>
            <p className="program-caption text-amber-900/80">
              Staff records the visit. Loyal Duck tracks the progress.
            </p>
          </article>
        </div>
        
        <p className="center-note">
          Restaurants. Cafés. Salons. Shops. Car washes. <strong>Your kind of business.</strong>
        </p>
      </div>
    </section>
  );
}
