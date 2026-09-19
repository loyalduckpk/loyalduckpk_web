'use client';

import React from 'react';
import {
  Coffee,
  Utensils,
  Scissors,
  Car,
  UserCheck,
  Cake,
  ShoppingBag,
  Dumbbell,
} from 'lucide-react';
import { BUSINESS_CATEGORIES } from '@/lib/constants';

const CATEGORY_ICONS = {
  Coffee,
  Utensils,
  Scissors,
  Car,
  UserCheck,
  Cake,
  ShoppingBag,
  Dumbbell,
};

export default function CategoryGrid() {
  return (
    <section className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4">
          <span className="text-xs font-black tracking-wider uppercase text-blue-700">
            ONE ACCOUNT. MANY BUSINESSES
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Loyalty works wherever regular customers matter.
        </h2>

        {/* Subhead */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          One Loyal Duck identity connects customers to independent businesses,
          while every business keeps its own programme.
        </p>

        {/* 8-Card Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {BUSINESS_CATEGORIES.map((cat) => {
            const IconComponent =
              CATEGORY_ICONS[cat.icon as keyof typeof CATEGORY_ICONS] || Coffee;
            return (
              <div
                key={cat.name}
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-slate-300 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md"
                      style={{ backgroundColor: cat.accent }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className="text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: cat.accent }}
                    >
                      {cat.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-1">
                    {cat.name}
                  </h3>

                  <p className="text-xs font-bold text-slate-500 leading-relaxed">
                    {cat.reward}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-extrabold text-slate-400">
                  <span>Separate Program</span>
                  <span>100% Retained</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tag */}
        <div className="mt-12 flex items-center justify-center gap-3 text-xs font-black tracking-widest uppercase text-slate-400">
          <span>ONE DUCK</span>
          <span>•</span>
          <span>MANY DOORS</span>
        </div>
      </div>
    </section>
  );
}
