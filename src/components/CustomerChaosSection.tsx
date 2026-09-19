'use client';

import React, { useState } from 'react';
import {
  CreditCard,
  Eye,
  Smartphone,
  Sparkles,
  Coffee,
  Check,
  CheckCircle2,
} from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function CustomerChaosSection() {
  const [stamps, setStamps] = useState(7);
  const totalStamps = 9;

  const handleAddStamp = () => {
    if (stamps < totalStamps) {
      setStamps(stamps + 1);
    } else {
      setStamps(1); // Reset for interactive replay
    }
  };

  return (
    <section id="customers" className="py-24 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Pitch & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80">
              <span className="text-xs font-black tracking-wider uppercase text-blue-700">
                FOR CUSTOMERS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              All your loyalty.{' '}
              <span className="text-blue-600 block sm:inline">
                None of the loyalty-card chaos.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Loyal Duck keeps participating businesses in one familiar place,
              while every business keeps its own points or visit progress.
            </p>

            {/* Feature Highlights */}
            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/50 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    One account instead of many.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    No 30 passwords, forgotten logins, or plastic cards stretching
                    your wallet seams.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/50 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    See each business&apos;s points or visit progress.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Live visibility into how close you are to your next free coffee,
                    haircut, or dessert.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-200/50 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    No separate app for every restaurant, salon or shop.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                    Free up phone storage and eliminate notification spam from 15
                    different store apps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital Stamp Card Simulation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[#3155FF] via-[#2346E8] to-[#1633BA] text-white shadow-2xl space-y-6 overflow-hidden card-hover border border-white/20">
              {/* Decorative frosted ambient backlight glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FFC83D]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header with Vector Brand Monogram */}
              <div className="flex items-center justify-between border-b border-white/20 pb-4 relative">
                <div className="flex items-center gap-3">
                  <BrandLogo size="sm" showText={false} />
                  <span className="text-xs font-black tracking-wider uppercase text-blue-100">
                    LOYAL DUCK PASS
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black text-white border border-white/30">
                  Active
                </div>
              </div>

              {/* Card Title */}
              <div className="relative">
                <h3 className="text-2xl font-black text-white">
                  One account. Many separate rewards.
                </h3>
                <p className="text-xs font-semibold text-blue-100 mt-1">
                  Interactive Simulator — Click button below to test visit stamping!
                </p>
              </div>

              {/* Interactive Coffee Stamp Card with Specular Sheen */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 text-slate-900 shadow-xl space-y-4 border border-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center">
                      <Coffee className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900">
                        Espresso Bar Stamp Card
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-400">
                        Buy 8 coffees, 9th on the house
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono font-black text-xs border border-blue-200">
                    {stamps} of {totalStamps}
                  </span>
                </div>

                {/* Stamp Grid - ZERO EMOJIS, pure vector SVG stamps */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 pt-2">
                  {Array.from({ length: totalStamps }).map((_, index) => {
                    const isStamped = index < stamps;
                    const isTarget = index === totalStamps - 1;
                    return (
                      <div
                        key={index}
                        className={`h-12 rounded-xl flex items-center justify-center font-black text-xs transition-all ${
                          isStamped
                            ? 'bg-[#3155FF] text-white shadow-md scale-100'
                            : isTarget
                            ? 'border-2 border-dashed border-[#FFC83D] bg-amber-50 text-[#D99B00] animate-pulse font-extrabold'
                            : 'border border-slate-200 bg-slate-50 text-slate-400'
                        }`}
                      >
                        {isStamped ? (
                          <div className="flex items-center gap-1">
                            <Coffee className="w-3.5 h-3.5 opacity-80" />
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : isTarget ? (
                          'FREE'
                        ) : (
                          `${index + 1}`
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Interactive Simulation Button */}
                <button
                  onClick={handleAddStamp}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs tracking-wide uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>
                    {stamps >= totalStamps
                      ? 'Reward Unlocked! Click to Reset'
                      : 'Simulate Staff Stamp (+1 visit)'}
                  </span>
                </button>
              </div>

              {/* Bottom Glass Note */}
              <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-white/15 text-xs text-blue-100 backdrop-blur-sm">
                <span className="font-extrabold text-white block">
                  Rewards stay with each business.
                </span>
                Your wallet has seen enough paper cards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
