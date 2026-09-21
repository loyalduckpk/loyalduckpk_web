'use client';

import React from 'react';
import Link from 'next/link';
import { getDestinations } from '@/lib/destinations';

export default function HomeHero() {
  const destinations = getDestinations();

  return (
    <>
      <section className="hero container" aria-labelledby="home-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="label-dash"></span> ONE ACCOUNT. MORE GOOD STUFF.
          </div>
          <h1 id="home-title">
            Your usuals.<br /> <span className="cobalt">With benefits.</span>
          </h1>
          <p className="hero-description">
            Coffee. A haircut. Your favourite dinner spot.<br className="desktop-break" />{' '}
            Get rewarded across participating businesses.<br className="desktop-break" />{' '}
            <strong>One free account. That’s Loyal Duck.</strong>
          </p>
          <div className="hero-buttons">
            <a
              className="button button-primary"
              href={destinations.customerAppUrl}
            >
              Get your Duck
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6"/>
              </svg>
            </a>
            <Link className="button button-quiet" href="/business">
              I run a business
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6"/>
              </svg>
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="tiny-check">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12 4 4L19 6"/>
              </svg>
            </span>{' '}
            Register once. Not again at every shop.
          </div>
        </div>

        <div className="wallet-stage" aria-label="Illustrative multi-merchant rewards wallet">
          <div className="stage-caption">
            <span>YOUR REGULARS, ALL TOGETHER.</span>
            <span>↙</span>
          </div>
          <div className="one-account-seal" aria-hidden="true">
            ONE<br /> ACCOUNT<span>NOT FIVE.</span>
          </div>
          <div className="wallet-paper">
            <div className="wallet-title">
              <span>Good things<br /> <strong>you’ve got going.</strong></span>
              <span className="mini-symbol">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5"/>
                </svg>
              </span>
            </div>

            <div className="mini-merchant coffee-merchant">
              <div className="mini-top">
                <span className="merchant-icon yellow">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h1a3 3 0 0 1 0 6h-1M7 3v2m4-2v2m4-2v2"/>
                  </svg>
                </span>
                <div>
                  <strong>Your café</strong>
                  <span>THE USUAL, PLEASE.</span>
                </div>
                <span className="micro-label">VISITS</span>
              </div>
              <div className="mini-value">
                <strong>4 <span>/ 5</span></strong>
                <span>One more.<br /> Remain calm.</span>
              </div>
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
                <span className="stamp empty">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h1a3 3 0 0 1 0 6h-1M7 3v2m4-2v2m4-2v2"/>
                  </svg>
                </span>
              </div>
              <p className="mini-bottom">Next up: a free coffee.</p>
            </div>

            <div className="mini-merchant compact">
              <span className="merchant-icon lavender">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 3v7m3-7v7M3 3v5a3 3 0 0 0 6 0V3M6 11v10M17 3c-3 4-4 8 0 9h3V3h-3Zm3 9v9"/>
                </svg>
              </span>
              <div>
                <strong>Your dinner spot</strong>
                <span>80 points to a free dessert</span>
              </div>
              <strong className="mini-balance">420<span>POINTS</span></strong>
            </div>

            <div className="mini-merchant compact">
              <span className="merchant-icon rose">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="6" cy="6" r="3"/>
                  <circle cx="6" cy="18" r="3"/>
                  <path d="m8.5 7.5 12 12m-12-3 12-12M14 10l-4 4"/>
                </svg>
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
          <p className="stage-disclaimer">Illustrative rewards. Not live balances or partner listings.</p>
        </div>
      </section>
    </>
  );
}
