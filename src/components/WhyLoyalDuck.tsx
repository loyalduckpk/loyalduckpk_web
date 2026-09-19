'use client';

import React from 'react';
import { ShieldCheck, Store, Smile } from 'lucide-react';
import { CORE_PILLARS } from '@/lib/constants';

const PILLAR_ICONS = [ShieldCheck, Store, Smile];

export default function WhyLoyalDuck() {
  return (
    <section className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4">
          <span className="text-xs font-black tracking-wider uppercase text-blue-700">
            WHY LOYAL DUCK
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Not another loyalty app for one shop.
        </h2>

        {/* Subhead */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Businesses stay independent. The customer experience becomes connected.
        </p>

        {/* 3 Core Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {CORE_PILLARS.map((pillar, idx) => {
            const IconComponent = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            return (
              <div
                key={pillar.number}
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-blue-600">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60">
                  <span className="text-xs font-extrabold text-blue-700 bg-blue-50/90 px-3 py-1.5 rounded-lg inline-block">
                    {pillar.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
