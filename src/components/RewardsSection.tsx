'use client';

import React, { useState } from 'react';

export default function RewardsSection() {
  const [mode, setMode] = useState<'visits' | 'points'>('visits');
  const [ready, setReady] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const handleToggleVisit = () => {
    const nextReady = !ready;
    setReady(nextReady);
    setStatusMsg(
      nextReady
        ? 'Sample reward unlocked. No real points or visits were added.'
        : 'Demo reset to 4 of 5 visits.'
    );
  };

  return (
    <section className="rewards-section" id="rewards" aria-labelledby="rewards-title">
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
          <div className="segmented" aria-label="Choose a reward demonstration">
            <button
              type="button"
              data-reward-mode="visits"
              aria-pressed={mode === 'visits'}
              aria-controls="visits-demo"
              onClick={() => setMode('visits')}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h1a3 3 0 0 1 0 6h-1M7 3v2m4-2v2m4-2v2"/>
              </svg>{' '}
              Visits
            </button>
            <button
              type="button"
              data-reward-mode="points"
              aria-pressed={mode === 'points'}
              aria-controls="points-demo"
              onClick={() => setMode('points')}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m12 2 2.6 6.7L22 9l-5.8 4.7 2 7.3-6.2-4-6.2 4 2-7.3L2 9l7.4-.3L12 2Z"/>
              </svg>{' '}
              Points
            </button>
          </div>
          <p className="quiet-note">
            Each business sets its own rewards.<br />
            One account. <strong>Not one shared points balance.</strong>
          </p>
        </div>

        <div className="reward-ticket" id="reward-demo">
          <div className="ticket-top">
            <span>THE LITTLE PERKS DEPARTMENT</span>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5"/>
            </svg>
          </div>

          <div id="visits-demo" hidden={mode !== 'visits'}>
            <div className="ticket-heading">
              <span className="eyebrow">YOUR CAFÉ / VISIT REWARDS</span>
              <span className="pill">A LITTLE DEMO</span>
            </div>
            <div className="ticket-value">
              <span data-visit-count>{ready ? '5' : '4'}</span>
              <span className="ticket-denominator">/ 5 visits</span>
            </div>
            <div data-visit-stamps>
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
                {ready ? (
                  <span className="stamp filled">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m5 12 4 4L19 6"/>
                    </svg>
                  </span>
                ) : (
                  <span className="stamp empty">
                    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h1a3 3 0 0 1 0 6h-1M7 3v2m4-2v2m4-2v2"/>
                    </svg>
                  </span>
                )}
              </div>
            </div>
            <h3 data-visit-title>
              {ready ? 'Coffee, on the house.' : 'One more. Remain calm.'}
            </h3>
            <p data-visit-caption>
              {ready
                ? 'A free coffee is ready in this demo. In the real app, staff confirms the qualifying visit and redemption.'
                : 'After 5 qualifying purchases, your next coffee is free in this example.'}
            </p>
            <button
              className="button button-dark demo-action"
              type="button"
              data-demo-visit
              onClick={handleToggleVisit}
            >
              {ready ? (
                'Reset the demo ↺'
              ) : (
                <>
                  Add a sample visit{' '}
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </>
              )}
            </button>
            <div className="demo-status" data-demo-status role="status" aria-live="polite">
              {statusMsg}
            </div>
          </div>

          <div id="points-demo" hidden={mode !== 'points'}>
            <div className="ticket-heading">
              <span className="eyebrow">YOUR DINNER SPOT / POINTS</span>
              <span className="pill">A LITTLE DEMO</span>
            </div>
            <div className="ticket-value">
              420<span className="ticket-denominator">/ 500 points</span>
            </div>
            <div className="points-meter" role="img" aria-label="420 of 500 points">
              <span></span>
            </div>
            <h3>Dessert is getting closer.</h3>
            <p>
              80 more points to a free dessert in this example. Your café’s stamps stay right where they belong.
            </p>
            <div className="points-example">
              <span>Illustrative earn rate</span>
              <strong>Rs 100 spent = 1 point</strong>
            </div>
          </div>

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
