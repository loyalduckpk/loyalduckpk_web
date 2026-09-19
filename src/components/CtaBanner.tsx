'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#3155FF] via-[#2447E8] to-[#1734BC] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-white/20">
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC83D]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 backdrop-blur-md">
                <span className="text-xs font-black tracking-wider uppercase text-blue-100">
                  ONE ACCOUNT • ONE EASY SYSTEM
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Your customers already come back.{' '}
                <span className="text-[#FFD15C] block sm:inline">
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#3155FF] font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-black/15 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
                >
                  <span>Partner with Loyal Duck</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/#faq"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white font-extrabold text-xs uppercase tracking-wider border border-white/30 backdrop-blur-md transition-all text-center"
                >
                  <span>Explore FAQ</span>
                </Link>
              </div>
            </div>

            {/* Right Card with frosted glass overlay */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-7 border border-white/25 shadow-2xl space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-wider uppercase text-blue-200">
                    LOYAL DUCK FOR BUSINESS
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFC83D]/20 text-[#FFD15C] text-[10px] font-black uppercase border border-[#FFC83D]/30">
                    Early Access
                  </span>
                </div>

                <h3 className="text-xl font-black text-white">
                  A loyalty programme that feels familiar from day one.
                </h3>

                <div className="space-y-3 text-xs sm:text-sm font-semibold text-blue-50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>One shared customer identity</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Merchant-owned independent rewards</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>No expensive new app to build or maintain</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs text-blue-200 font-bold">
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
