'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Coffee,
  Scissors,
  CheckCircle2,
  Check,
  Sparkles,
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Multi-layered ambient glassmorphism glow backdrops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none">
        <div className="absolute top-[-80px] left-[-30px] w-[450px] h-[450px] rounded-full bg-[#3155FF]/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-20 right-[-20px] w-[420px] h-[420px] rounded-full bg-[#FFC83D]/18 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full bg-[#059669]/10 blur-[110px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Eyebrow Pill with Specular Glass Sheen */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#3155FF] animate-pulse" />
              <span className="text-[11px] font-extrabold tracking-wider uppercase text-[#3155FF]">
                ONE ACCOUNT • SEPARATE REWARDS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17181A] leading-[1.06]">
              One account.{' '}
              <span className="text-[#3155FF] block sm:inline">
                Many separate rewards.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-[#74767B] font-medium leading-relaxed max-w-2xl">
              Register with Loyal Duck once. Then your customer identity works at
              participating restaurants, cafés, salons, shops, car washes and more—without
              pooling anyone&apos;s rewards.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/#customers"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#3155FF] hover:bg-[#1E3FD6] text-white font-extrabold text-sm uppercase tracking-wide shadow-xl shadow-[#3155FF]/25 hover:shadow-2xl hover:shadow-[#3155FF]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <span>Find my rewards</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/business"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/80 hover:bg-white text-[#17181A] font-extrabold text-sm uppercase tracking-wide border border-white/90 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all text-center backdrop-blur-md"
              >
                <span>I run a business</span>
              </Link>
            </div>

            {/* Trust Micro-copy with vector indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-bold text-slate-500">
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
                <span>Zero repetitive signups</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Frosted Glass Card Simulation */}
          <div className="lg:col-span-5 relative">
            {/* Ambient backlight glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#3155FF]/20 via-[#FFC83D]/15 to-emerald-500/15 blur-2xl opacity-75" />

            <div className="relative glass-card rounded-3xl p-6 sm:p-7 border border-white/90 shadow-2xl space-y-5 card-hover">
              {/* Card Header with Glass Accent */}
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold tracking-wider uppercase text-slate-500">
                    YOUR PASSES
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#3155FF]/10 text-[#3155FF] font-extrabold text-[11px] tracking-wide uppercase border border-[#3155FF]/20">
                  3 Active Passes
                </span>
              </div>

              {/* Sample Rewards Passes */}
              <div className="space-y-3.5">
                {/* 1. REC Specialty Coffee */}
                <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/60 hover:border-[#3155FF]/40 hover:bg-white transition-all shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#3155FF] text-white flex items-center justify-center font-extrabold text-xs shadow-md shadow-[#3155FF]/20">
                        REC
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-[#17181A] leading-tight">
                          REC Coffee Roasters
                        </h4>
                        <p className="text-[11px] font-semibold text-slate-400">
                          Specialty Café • DHA Phase 5
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-extrabold tabular-nums text-[#3155FF]">
                        420 pts
                      </span>
                      <p className="text-[10px] font-bold text-slate-400 tabular-nums">
                        80 left
                      </p>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-3 w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/40">
                    <div
                      className="bg-gradient-to-r from-[#3155FF] to-[#1E3FD6] h-full rounded-full transition-all duration-1000"
                      style={{ width: '84%' }}
                    />
                  </div>
                </div>

                {/* 2. Coffee Co. Visit Stamp Card */}
                <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/60 hover:border-emerald-300 hover:bg-white transition-all shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                        <Coffee className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-[#17181A] leading-tight">
                          Coffee Co.
                        </h4>
                        <p className="text-[11px] font-semibold text-slate-400">
                          Espresso Bar • Gulberg III
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-extrabold tabular-nums text-emerald-600">
                        4 / 5 visits
                      </span>
                      <p className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-wide">
                        1 to go!
                      </p>
                    </div>
                  </div>
                  {/* Stamp row with crisp vector checks */}
                  <div className="mt-3 flex items-center gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-sm"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    ))}
                    <div className="w-7 h-7 rounded-lg border-2 border-dashed border-emerald-400 text-emerald-500 flex items-center justify-center text-xs font-black animate-pulse">
                      5
                    </div>
                  </div>
                </div>

                {/* 3. Salon X Grooming */}
                <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/60 hover:border-[#FFC83D] hover:bg-white transition-all shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#D99B00] text-white flex items-center justify-center shadow-md shadow-[#D99B00]/20">
                        <Scissors className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-[#17181A] leading-tight">
                          Salon X
                        </h4>
                        <p className="text-[11px] font-semibold text-slate-400">
                          Premium Grooming
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-extrabold tabular-nums text-[#D99B00]">
                        180 pts
                      </span>
                      <p className="text-[10px] font-bold text-slate-400 tabular-nums">
                        120 left
                      </p>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-3 w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/40">
                    <div
                      className="bg-gradient-to-r from-[#FFC83D] to-[#D99B00] h-full rounded-full transition-all duration-1000"
                      style={{ width: '60%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Explanatory Glass Callout Box */}
              <div className="p-3.5 rounded-2xl bg-[#3155FF]/5 border border-[#3155FF]/15 text-xs text-slate-600 leading-relaxed backdrop-blur-sm">
                <span className="font-extrabold text-[#3155FF] block mb-0.5 uppercase tracking-wide text-[10px]">
                  BALANCES STAY SEPARATE
                </span>
                REC points stay at REC. Coffee visits stay at Coffee Co. Loyal Duck keeps
                everything organized in one familiar place.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
