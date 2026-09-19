'use client';

import React, { useState } from 'react';
import { Check, Star, Navigation, MapPin } from 'lucide-react';

export default function RewardsSection() {
  const [mode, setMode] = useState<'visits' | 'points'>('visits');
  const [visits, setVisits] = useState(4);
  const [statusMsg, setStatusMsg] = useState('');

  const handleAddVisit = () => {
    if (visits >= 5) {
      setVisits(1);
      setStatusMsg('Starting a new card.');
    } else {
      setVisits(visits + 1);
      if (visits + 1 === 5) {
        setStatusMsg('Reward earned! (Demo only)');
      } else {
        setStatusMsg('Sample visit recorded.');
      }
    }
  };

  return (
    <section className="rewards-section marketing-scope" id="rewards" aria-labelledby="rewards-title">
      <div className="container rewards-layout">
        <div className="rewards-copy">
          <span className="eyebrow">02 / VERY GOOD AT KEEPING COUNT</span>
          <h2 id="rewards-title">
            A little closer to<br /> <span className="serif-accent">“this one’s on us.”</span>
          </h2>
          <p>
            Some places give points. Some count visits.<br />
            Both have a home in Loyal Duck.
          </p>
          
          <div className="segmented glass-card" aria-label="Choose a reward demonstration">
            <button 
              type="button" 
              onClick={() => setMode('visits')}
              aria-pressed={mode === 'visits'}
              className="transition-colors"
            >
              <Check className="icon w-[17px] h-[17px]" /> Visits
            </button>
            <button 
              type="button" 
              onClick={() => setMode('points')}
              aria-pressed={mode === 'points'}
              className="transition-colors"
            >
              <Star className="icon w-[17px] h-[17px]" /> Points
            </button>
          </div>
          <p className="quiet-note">
            Each business sets its own rewards.<br />
            One account. <strong>Not one shared points balance.</strong>
          </p>
        </div>

        <div className="reward-ticket glass-card" id="reward-demo">
          <div className="ticket-top">
            <span>THE LITTLE PERKS DEPARTMENT</span>
            <SparklesIcon />
          </div>

          {mode === 'visits' && (
            <div id="visits-demo" className="animate-in fade-in zoom-in-95 duration-300">
              <div className="ticket-heading">
                <span className="eyebrow">YOUR CAFÉ / VISIT REWARDS</span>
                <span className="pill">A LITTLE DEMO</span>
              </div>
              <div className="ticket-value">
                <span>{visits}</span>
                <span className="ticket-denominator">/ 5 visits</span>
              </div>
              
              <div className="stamp-row" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span key={num} className={`stamp shadow-sm ${num <= visits ? 'filled' : 'empty bg-slate-50 border-slate-200'}`}>
                    <Check className={`icon w-[22px] h-[22px] ${num <= visits ? 'text-amber-900' : 'text-slate-300'}`} />
                  </span>
                ))}
              </div>
              
              <h3>{visits >= 5 ? 'Coffee time.' : 'One more. Remain calm.'}</h3>
              <p>
                {visits >= 5 
                  ? 'You’ve earned a free coffee in this example.' 
                  : 'After 5 qualifying purchases, your next coffee is free in this example.'}
              </p>
              
              <button 
                className="button button-dark demo-action w-full" 
                type="button" 
                onClick={handleAddVisit}
              >
                {visits >= 5 ? 'Reset sample' : 'Add a sample visit'} 
                <Navigation className="icon w-[16px] h-[16px] ml-2" />
              </button>
              <div className="demo-status" role="status" aria-live="polite">{statusMsg}</div>
            </div>
          )}

          {mode === 'points' && (
            <div id="points-demo" className="animate-in fade-in zoom-in-95 duration-300">
              <div className="ticket-heading">
                <span className="eyebrow">YOUR DINNER SPOT / POINTS</span>
                <span className="pill">A LITTLE DEMO</span>
              </div>
              <div className="ticket-value">
                420<span className="ticket-denominator">/ 500 points</span>
              </div>
              <div className="points-meter shadow-inner" role="img" aria-label="420 of 500 points">
                <span></span>
              </div>
              <h3>Dessert is getting closer.</h3>
              <p>
                80 more points to a free dessert in this example. Your café’s stamps stay right where they belong.
              </p>
              <div className="points-example glass-card-subtle px-4 rounded-xl">
                <span>Illustrative earn rate</span>
                <strong>Rs 100 spent = 1 point</strong>
              </div>
            </div>
          )}

          <div className="ticket-perforation"></div>
          <div className="ticket-bottom">
            <span>Real rewards. Separate merchants.</span>
            <span>LD / 001</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SparklesIcon() {
  return (
    <svg className="icon w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5"/>
    </svg>
  );
}
