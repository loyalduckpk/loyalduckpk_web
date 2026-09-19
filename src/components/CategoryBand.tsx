'use client';

import React from 'react';
import { Coffee, Utensils, Scissors, ShoppingBag, Car } from 'lucide-react';

export default function CategoryBand() {
  return (
    <div className="category-band marketing-scope glass-panel border-x-0 border-b-0 py-1">
      <div className="container category-inner">
        <span className="category-intro">A DUCK WALKS INTO…</span>
        <span><Coffee className="icon w-[18px] h-[18px]" /> A café</span>
        <span><Utensils className="icon w-[18px] h-[18px]" /> A restaurant</span>
        <span><Scissors className="icon w-[18px] h-[18px]" /> A salon</span>
        <span><ShoppingBag className="icon w-[18px] h-[18px]" /> A shop</span>
        <span><Car className="icon w-[18px] h-[18px]" /> A car wash</span>
      </div>
    </div>
  );
}
