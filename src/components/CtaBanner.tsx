'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/40 border border-blue-300/30">
                <span className="text-xs font-black tracking-wider uppercase text-blue-100">
                  ONE ACCOUNT. ONE EASY SYSTEM.
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Your customers already come back.{' '}
                <span className="text-amber-300 block sm:inline">
                  Give them a reason to notice.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-blue-100 font-medium leading-relaxed max-w-xl">
                One account for customers. One easy loyalty system for businesses.
                Zero hardware required.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/business"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-blue-700 font-black text-base shadow-lg shadow-black/15 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                >
                  <span>Partner with Loyal Duck</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/#faq"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-700/60 hover:bg-blue-700 text-white font-bold text-base border border-blue-400/40 transition-all text-center"
                >
                  <span>Explore FAQ</span>
                </Link>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-7 border border-white/20 shadow-xl space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black tracking-wider uppercase text-blue-200">
                    LOYAL DUCK FOR BUSINESS
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-black uppercase">
                    Early Access
                  </span>
                </div>

                <h3 className="text-xl font-black text-white">
                  A loyalty programme that feels familiar from day one.
                </h3>

                <div className="space-y-3 text-sm font-semibold text-blue-50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>One shared customer identity</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Merchant-owned independent rewards</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>No expensive new app to build or maintain</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-blue-200 font-bold">
                  <span>Launching in Lahore & Karachi</span>
                  <span>Verified pilot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
