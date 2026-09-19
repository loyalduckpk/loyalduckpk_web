'use client';

import React, { useState } from 'react';
import {
  CreditCard,
  Eye,
  Smartphone,
  Sparkles,
  Coffee,
  CheckCircle2,
} from 'lucide-react';

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
    <section id="customers" className="py-24 bg-white border-b border-slate-200/80">
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
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    One account instead of many.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    No 30 passwords, forgotten logins, or plastic cards stretching
                    your wallet seams.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    See each business&apos;s points or visit progress.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Live visibility into how close you are to your next free coffee,
                    haircut, or dessert.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900">
                    No separate app for every restaurant, salon or shop.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Free up phone storage and eliminate notification spam from 15
                    different store apps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital Stamp Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white shadow-2xl space-y-6 overflow-hidden card-hover">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🦆</span>
                  <span className="text-sm font-black tracking-wider uppercase text-blue-100">
                    LOYAL DUCK PASS
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-black text-white">
                  Active
                </div>
              </div>

              {/* Card Title */}
              <div>
                <h3 className="text-2xl font-black text-white">
                  One account. Many separate rewards.
                </h3>
                <p className="text-xs font-medium text-blue-100 mt-1">
                  Interactive Simulator — Click to test adding visits!
                </p>
              </div>

              {/* Interactive Coffee Stamp Card */}
              <div className="bg-white rounded-2xl p-6 text-slate-900 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
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
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono font-black text-xs">
                    {stamps} of {totalStamps}
                  </span>
                </div>

                {/* Stamp Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 pt-2">
                  {Array.from({ length: totalStamps }).map((_, index) => {
                    const isStamped = index < stamps;
                    const isTarget = index === totalStamps - 1;
                    return (
                      <div
                        key={index}
                        className={`h-12 rounded-xl flex items-center justify-center font-black text-xs transition-all ${
                          isStamped
                            ? 'bg-blue-600 text-white shadow-md scale-100'
                            : isTarget
                            ? 'border-2 border-dashed border-amber-500 bg-amber-50 text-amber-700 animate-pulse'
                            : 'border border-slate-200 bg-slate-50 text-slate-400'
                        }`}
                      >
                        {isStamped ? (
                          '☕ ✓'
                        ) : isTarget ? (
                          'FREE'
                        ) : (
                          `${index + 1}`
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Interactive Button */}
                <button
                  onClick={handleAddStamp}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>
                    {stamps >= totalStamps
                      ? 'Reward Unlocked! Click to Reset'
                      : 'Simulate Staff Stamp (+1 visit)'}
                  </span>
                </button>
              </div>

              {/* Bottom Note */}
              <div className="p-3.5 rounded-2xl bg-blue-900/50 border border-blue-400/30 text-xs text-blue-100">
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
