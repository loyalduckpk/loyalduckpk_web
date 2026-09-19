'use client';

import React from 'react';
import { ScanLine, Smartphone, PhoneCall, ArrowUpRight } from 'lucide-react';
import { IDENTIFICATION_WAYS } from '@/lib/constants';

const WAY_ICONS = {
  qr: ScanLine,
  duck_id: Smartphone,
  phone: PhoneCall,
};

export default function IdentificationWays() {
  return (
    <section className="py-20 bg-slate-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 mb-4">
          <span className="text-xs font-black tracking-wider uppercase text-emerald-700">
            THREE EASY WAYS
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          However you show up, Duck knows you.
        </h2>

        {/* Subhead */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Different doors. Same customer identity.
        </p>

        {/* 3 Tactile Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {IDENTIFICATION_WAYS.map((way) => {
            const IconComponent = WAY_ICONS[way.id as keyof typeof WAY_ICONS] || ScanLine;
            return (
              <div
                key={way.id}
                className="glass-card rounded-3xl p-8 border border-white/95 shadow-lg hover:shadow-2xl hover:border-slate-300 card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full text-white shadow-sm"
                      style={{ backgroundColor: way.accentColor }}
                    >
                      {way.badge}
                    </span>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                      style={{ backgroundColor: way.accentColor }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                    {way.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-extrabold text-[#3155FF] mb-3 uppercase tracking-wide">
                    {way.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {way.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                  <span>Fast checkout guaranteed</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
