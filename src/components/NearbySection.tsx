'use client';

import React from 'react';
import Link from 'next/link';

export default function NearbySection() {
  return (
    <>
      <section className="section container nearby-section" aria-labelledby="nearby-title">
        <div className="nearby-visual">
          <div className="nearby-visual-head">
            <span>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/>
                <circle cx="12" cy="10" r="2.5"/>
              </svg>{' '}
              AROUND YOUR CORNER
            </span>
            <span className="micro-label">EXAMPLE OFFERS</span>
          </div>

          <div className="offer-card">
            <span className="merchant-icon rose">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="6" cy="6" r="3"/>
                <circle cx="6" cy="18" r="3"/>
                <path d="m8.5 7.5 12 12m-12-3 12-12M14 10l-4 4"/>
              </svg>
            </span>
            <div>
              <span className="offer-category">YOUR LOCAL BARBER</span>
              <h3>Fresh cut.<br /> Same Duck.</h3>
              <p>A complimentary beard trim with a haircut.</p>
            </div>
            <span className="offer-footer">Standalone offer · merchant terms apply</span>
          </div>

          <div className="offer-card yellow-offer">
            <span className="merchant-icon white">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m3 11 2-6h14l2 6M3 11h18v8H3v-8Zm2 8v2m14-2v2M6 15h2m8 0h2"/>
              </svg>
            </span>
            <div>
              <span className="offer-category">THE CAR WASH</span>
              <h3>Clean car.<br /> Dirty Duck.</h3>
              <p>A little extra shine with your next wash.</p>
            </div>
            <span className="offer-footer">Illustration only · not a live deal</span>
          </div>
        </div>

        <div className="nearby-copy">
          <span className="eyebrow">03 / YOUR NEXT USUAL</span>
          <h2>Good things.<br /> Closer than<br /> you think.</h2>
          <p>
            Find offers from participating Loyal Duck businesses around you. Your next favourite could be a few streets away.
          </p>
          <p className="location-note">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/>
              <circle cx="12" cy="10" r="2.5"/>
            </svg>{' '}
            Use your location. Or just choose a city.
          </p>
          <Link
            className="text-link"
            href="/offers"
          >
            Explore in Loyal Duck
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6"/>
            </svg>
          </Link>
          <p className="quiet-note">
            Loyalty rewards and standalone offers.<br />
            Different good things. Same account.
          </p>
        </div>
      </section>
    </>
  );
}
