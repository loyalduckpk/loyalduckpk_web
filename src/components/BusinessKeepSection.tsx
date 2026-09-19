'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Store,
  Coins,
  QrCode,
  ShieldAlert,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function BusinessKeepSection() {
  const [programType, setProgramType] = useState<'points' | 'visits'>('points');
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirmAction = () => {
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 2500);
  };

  return (
    <section id="businesses" className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Merchant Pitch & Program Switcher */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80">
              <span className="text-xs font-black tracking-wider uppercase text-emerald-700">
                FOR BUSINESSES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Keep the customers you{' '}
              <span className="text-blue-600 block sm:inline">
                already worked hard to win.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Loyal Duck gives independent businesses a complete loyalty programme
              without forcing them to build their own app or buy hardware.
            </p>

            {/* Interactive Program Type Toggle */}
            <div className="pt-2 space-y-3">
              <span className="text-xs font-black tracking-wider uppercase text-slate-400 block">
                CHOOSE YOUR PROGRAM STYLE:
              </span>
              <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <button
                  onClick={() => setProgramType('points')}
                  className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                    programType === 'points'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Points by Spend
                </button>
                <button
                  onClick={() => setProgramType('visits')}
                  className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                    programType === 'visits'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Visit & Stamp Cards
                </button>
              </div>
            </div>

            {/* Merchant Benefits Checklist */}
            <div className="pt-2 space-y-3 text-sm font-bold text-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  ✓
                </div>
                <span>Works on any existing tablet, phone, or cashier screen</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  ✓
                </div>
                <span>Staff checkout takes under 3 seconds per transaction</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  ✓
                </div>
                <span>You own 100% of your customer records and visit insights</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/business"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-md shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Partner with Loyal Duck</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Staff POS Checkout Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-2xl space-y-6 card-hover">
              {/* POS Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm">
                    POS
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-wider uppercase text-slate-900">
                      Staff Counter Terminal
                    </h4>
                    <p className="text-[11px] font-semibold text-slate-400">
                      Mode: {programType === 'points' ? 'Points per Rs 100' : 'Per-Visit Stamp'}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-black uppercase ${
                    programType === 'points'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-emerald-50 text-emerald-700'
                  }`}
                >
                  {programType}
                </span>
              </div>

              {/* POS Customer Lookup Screen */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">IDENTIFIED CUSTOMER</span>
                  <span className="text-[11px] font-extrabold text-emerald-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Verified Session
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-lg font-black text-slate-900">Farabi</h5>
                    <p className="text-xs font-mono text-slate-500">+92 300 •••• 814</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-400 block">TIER</span>
                    <span className="text-xs font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                      Gold Regular
                    </span>
                  </div>
                </div>
              </div>

              {/* Transaction Input Area */}
              {programType === 'points' ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl border-2 border-blue-100 bg-blue-50/40 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-500 block">BILL AMOUNT</span>
                      <span className="text-2xl font-black text-slate-900">Rs 5,200</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-blue-600 block">POINTS EARNED</span>
                      <span className="text-xl font-black text-blue-600">+52 pts</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl border-2 border-emerald-100 bg-emerald-50/40 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-500 block">QUALIFYING VISIT</span>
                      <span className="text-xl font-black text-slate-900">Coffee / Dining Visit</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-600 block">STAMP REWARD</span>
                      <span className="text-xl font-black text-emerald-600">+1 Stamp</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={handleConfirmAction}
                disabled={confirmed}
                className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                  confirmed
                    ? 'bg-emerald-600 text-white shadow-emerald-500/30'
                    : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20 active:scale-[0.98]'
                }`}
              >
                {confirmed ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span>Transaction Recorded in 0.4s!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Simulate Staff 1-Tap Confirmation</span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-slate-400 font-semibold">
                No complex hardware. Runs in tablet browser or phone in 2 taps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
