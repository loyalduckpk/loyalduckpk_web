'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Coffee,
  Scissors,
  Utensils,
  CheckCircle2,
} from 'lucide-react';
import { SAMPLE_REWARDS } from '@/lib/constants';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'cafes' | 'salons'>('all');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background soft decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-40">
        <div className="absolute top-[-100px] left-[-50px] w-96 h-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-black tracking-wider uppercase text-blue-700">
                ONE ACCOUNT. MANY PLACES.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
              One account.{' '}
              <span className="text-blue-600 block sm:inline">
                Many separate rewards.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
              Register with Loyal Duck once. Then your identity works at
              participating restaurants, cafés, salons, shops, car washes and more—without
              pooling anyone&apos;s rewards.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/#customers"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <span>Find my rewards</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/business"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border-2 border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <span>I run a business</span>
              </Link>
            </div>

            {/* Trust Micro-copy */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>No pile of apps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>No drawer full of cards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>No signing up again and again</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Card Simulation */}
          <div className="lg:col-span-5 relative">
            {/* Ambient shadow glow behind card */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 blur-xl opacity-70" />

            <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200/90 space-y-5 card-hover">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black tracking-wider uppercase text-slate-500">
                    YOUR REWARDS
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 font-extrabold text-[11px]">
                  3 Active Passes
                </span>
              </div>

              {/* Sample Rewards List */}
              <div className="space-y-3.5">
                {/* 1. REC Specialty Coffee */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/30 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                        REC
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 leading-tight">
                          REC Coffee Roasters
                        </h4>
                        <p className="text-xs font-semibold text-slate-400">
                          Specialty Café • DHA Phase 5
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-black text-blue-600">
                        420 pts
                      </span>
                      <p className="text-[11px] font-bold text-slate-400">
                        80 left
                      </p>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-3 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-1000"
                      style={{ width: '84%' }}
                    />
                  </div>
                </div>

                {/* 2. Coffee Co. Visit Stamp Card */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                        <Coffee className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 leading-tight">
                          Coffee Co.
                        </h4>
                        <p className="text-xs font-semibold text-slate-400">
                          Espresso Bar • Gulberg III
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-black text-emerald-600">
                        4 / 5 visits
                      </span>
                      <p className="text-[11px] font-bold text-emerald-600 font-extrabold">
                        1 to go!
                      </p>
                    </div>
                  </div>
                  {/* Stamp row */}
                  <div className="mt-3 flex items-center gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-sm"
                      >
                        ✓
                      </div>
                    ))}
                    <div className="w-7 h-7 rounded-lg border-2 border-dashed border-emerald-400 text-emerald-500 flex items-center justify-center text-xs font-black animate-pulse">
                      5
                    </div>
                  </div>
                </div>

                {/* 3. Salon X Grooming */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-amber-300 hover:bg-amber-50/30 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                        <Scissors className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-slate-900 leading-tight">
                          Salon X
                        </h4>
                        <p className="text-xs font-semibold text-slate-400">
                          Premium Grooming
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-black text-amber-600">
                        180 pts
                      </span>
                      <p className="text-[11px] font-bold text-slate-400">
                        120 left
                      </p>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-3 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: '60%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Explanatory Callout Box */}
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700 leading-relaxed">
                <span className="font-black text-blue-900 block mb-0.5">
                  Balances stay separate.
                </span>
                REC points stay at REC. Coffee visits stay at Coffee Co. Loyal Duck keeps
                everything in one familiar place.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
