'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Check, Coffee, Utensils, Scissors } from 'lucide-react';
import ConnectionDialog from './ConnectionDialog';

export default function HomeHero() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="hero container marketing-scope" aria-labelledby="home-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="label-dash"></span> ONE ACCOUNT. MORE GOOD STUFF.
          </div>
          <h1 id="home-title">
            Your usuals.<br /> <span className="cobalt gradient-text">With benefits.</span>
          </h1>
          <p className="hero-description">
            Coffee. A haircut. Your favourite dinner spot.<br className="desktop-break" />
            Get rewarded across participating businesses.<br className="desktop-break" />
            <strong>One free account. That’s Loyal Duck.</strong>
          </p>
          <div className="hero-buttons">
            <button 
              className="button button-primary shadow-xl shadow-[#3155ff30]" 
              onClick={() => setDialogOpen(true)}
            >
              Get your Duck <ArrowUpRight className="icon" />
            </button>
            <Link className="button button-quiet" href="/business">
              I run a business <ArrowRight className="icon" />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="tiny-check">
              <Check className="icon w-[15px] h-[15px]" />
            </span> 
            Register once. Not again at every shop.
          </div>
        </div>

        <div className="wallet-stage glass-panel-cobalt" aria-label="Illustrative multi-merchant rewards wallet">
          <div className="stage-caption">
            <span>YOUR REGULARS, ALL TOGETHER.</span>
            <span>↙</span>
          </div>
          <div className="one-account-seal" aria-hidden="true">
            ONE<br /> ACCOUNT<span>NOT FIVE.</span>
          </div>
          
          <div className="wallet-paper glass-card">
            <div className="wallet-title">
              <span>Good things<br /> <strong>you’ve got going.</strong></span>
              <span className="mini-symbol">
                <SparklesIcon />
              </span>
            </div>
            
            <div className="mini-merchant coffee-merchant bg-white/60">
              <div className="mini-top">
                <span className="merchant-icon yellow shadow-sm">
                  <Coffee className="icon w-[18px] h-[18px]" />
                </span>
                <div>
                  <strong>Your café</strong>
                  <span>THE USUAL, PLEASE.</span>
                </div>
                <span className="micro-label bg-white/80">VISITS</span>
              </div>
              <div className="mini-value">
                <strong>4 <span>/ 5</span></strong>
                <span>One more.<br /> Remain calm.</span>
              </div>
              <div className="stamp-row" aria-hidden="true">
                <span className="stamp filled shadow-sm"><Check className="icon w-4 h-4 text-amber-900" /></span>
                <span className="stamp filled shadow-sm"><Check className="icon w-4 h-4 text-amber-900" /></span>
                <span className="stamp filled shadow-sm"><Check className="icon w-4 h-4 text-amber-900" /></span>
                <span className="stamp filled shadow-sm"><Check className="icon w-4 h-4 text-amber-900" /></span>
                <span className="stamp empty bg-white/50"><Coffee className="icon w-4 h-4" /></span>
              </div>
              <p className="mini-bottom">Next up: a free coffee.</p>
            </div>
            
            <div className="mini-merchant compact bg-white/40 backdrop-blur-sm">
              <span className="merchant-icon lavender shadow-sm">
                <Utensils className="icon w-[18px] h-[18px]" />
              </span>
              <div>
                <strong>Your dinner spot</strong>
                <span>80 points to a free dessert</span>
              </div>
              <strong className="mini-balance">420<span>POINTS</span></strong>
            </div>
            
            <div className="mini-merchant compact bg-white/40 backdrop-blur-sm">
              <span className="merchant-icon rose shadow-sm">
                <Scissors className="icon w-[18px] h-[18px]" />
              </span>
              <div>
                <strong>Your salon</strong>
                <span>Looking expensive. Earning points.</span>
              </div>
              <strong className="mini-balance">180<span>POINTS</span></strong>
            </div>
            
            <div className="wallet-paper-footer">
              <span>Separate rewards.</span>
              <strong>Same Duck.</strong>
            </div>
          </div>
          <p className="stage-disclaimer opacity-80">Illustrative rewards. Not live balances or partner listings.</p>
        </div>
      </section>

      <ConnectionDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}

function SparklesIcon() {
  return (
    <svg className="icon w-[28px] h-[28px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5"/>
    </svg>
  );
}
