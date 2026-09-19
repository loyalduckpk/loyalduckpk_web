'use client';

import React from 'react';
import {
  Sparkles,
  QrCode,
  CreditCard,
  TrendingUp,
  Gift,
} from 'lucide-react';
import { LIFECYCLE_STEPS } from '@/lib/constants';

const STEP_ICONS = [
  Sparkles,
  QrCode,
  CreditCard,
  TrendingUp,
  Gift,
];

export default function RegisterLifecycle() {
  return (
    <section id="how-it-works" className="py-20 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-4">
          <span className="text-xs font-black tracking-wider uppercase text-[#3155FF]">
            REGISTER ONCE
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Your first Loyal Duck signup is your last.
        </h2>

        {/* Section Subhead */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Verify your phone once. At the next participating Loyal Duck business,
          there is no new account to create.
        </p>

        {/* 5-Step Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
          {LIFECYCLE_STEPS.map((step, idx) => {
            const IconComponent = STEP_ICONS[idx % STEP_ICONS.length];
            return (
              <div
                key={step.step}
                className="relative glass-card-subtle hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#3155FF]/40 card-hover flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#3155FF]">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#3155FF] shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xs font-extrabold text-slate-900 tracking-wider uppercase mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="mt-6 pt-3 border-t border-slate-200/60">
                  <span className="inline-block text-[10px] font-extrabold text-[#3155FF] bg-blue-50/80 border border-blue-100 px-2.5 py-1 rounded-lg">
                    {step.highlight}
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
