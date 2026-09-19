'use client';

import React, { useState } from 'react';
import { MapPin, Scissors, Droplets, ArrowUpRight } from 'lucide-react';
import ConnectionDialog from './ConnectionDialog';

export default function NearbySection() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="section container nearby-section marketing-scope" aria-labelledby="nearby-title">
        <div className="nearby-visual glass-panel shadow-2xl">
          <div className="nearby-visual-head">
            <span>
              <MapPin className="icon w-[13px] h-[13px] text-[#3155FF]" /> 
              AROUND YOUR CORNER
            </span>
            <span className="micro-label">EXAMPLE OFFERS</span>
          </div>
          
          <div className="offer-card glass-card hover:translate-y-[-2px] transition-transform shadow-md cursor-default">
            <span className="merchant-icon rose shadow-sm text-pink-700">
              <Scissors className="icon w-[18px] h-[18px]" />
            </span>
            <div>
              <span className="offer-category">YOUR LOCAL BARBER</span>
              <h3>Fresh cut.<br /> Same Duck.</h3>
              <p>A complimentary beard trim with a haircut.</p>
            </div>
            <span className="offer-footer">Standalone offer · merchant terms apply</span>
          </div>
          
          <div className="offer-card yellow-offer glass-card hover:translate-y-[-2px] transition-transform shadow-md cursor-default border-amber-200">
            <span className="merchant-icon white shadow-sm text-amber-700">
              <Droplets className="icon w-[18px] h-[18px]" />
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
            <MapPin className="icon w-[16px] h-[16px] text-emerald-600" /> 
            Use your location. Or just choose a city.
          </p>
          <button 
            className="text-link group" 
            onClick={() => setDialogOpen(true)}
          >
            Explore in Loyal Duck 
            <ArrowUpRight className="icon w-[16px] h-[16px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <p className="quiet-note">
            Loyalty rewards and standalone offers.<br />
            Different good things. Same account.
          </p>
        </div>
      </section>

      <ConnectionDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
