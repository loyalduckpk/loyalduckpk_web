'use client';

import React from 'react';
import { QrCode, Sparkles, Smartphone, Check } from 'lucide-react';

export default function PhysicalDuckSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-blue-600 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/40 border border-blue-300/30">
                <span className="text-xs font-black tracking-wider uppercase text-blue-100">
                  THE PHYSICAL TOUCHPOINT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                A little Duck at the counter.{' '}
                <span className="block text-blue-200">
                  A lot more memorable.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-blue-100 font-medium leading-relaxed max-w-xl">
                Loyal Duck lives where the customer interaction already happens:
                on the counter, in the window, on a receipt, or at the register.
              </p>

              {/* Tag Badges */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                {[
                  'Acrylic Counter Stand',
                  'Window Decal',
                  'Table QR Sticker',
                  'Receipt NFC Tag',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-700/60 border border-blue-400/30 text-xs font-bold text-white flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Graphic Mockups */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Stand Card 1 */}
              <div className="w-full sm:w-52 rounded-2xl bg-white text-slate-900 p-6 shadow-xl space-y-4 text-center card-hover">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-2xl shadow-inner">
                  🦆
                </div>
                <div>
                  <h4 className="font-black text-sm text-slate-900">
                    LOYAL DUCK
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 mt-0.5">
                    Your rewards, in your pocket.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-mono font-black text-[10px]">
                    Verified Member
                  </span>
                </div>
              </div>

              {/* Stand Card 2: QR Scanner Stand */}
              <div className="w-full sm:w-52 rounded-2xl bg-slate-900 text-white p-6 shadow-xl space-y-4 text-center card-hover border border-slate-700">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-600/30 border border-blue-500/50 text-blue-400 flex items-center justify-center shadow-inner">
                  <QrCode className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-sm text-white">
                    SCAN THE DUCK
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 mt-0.5">
                    Tap. Scan. Join.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono font-black text-[10px]">
                    Instant Scan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
