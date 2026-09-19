'use client';

import React from 'react';
import { QrCode, Smartphone, Check } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function PhysicalDuckSection() {
  return (
    <section className="py-20 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#3155FF] via-[#2549E8] to-[#1A38BF] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/20">
          {/* Subtle frosted glass glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFC83D]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/25 backdrop-blur-md">
                <span className="text-xs font-black tracking-wider uppercase text-blue-100">
                  THE PHYSICAL TOUCHPOINT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                A little Duck at the counter.{' '}
                <span className="block text-[#FFF3C4]">
                  A lot more memorable.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-blue-100 font-medium leading-relaxed max-w-xl">
                Loyal Duck lives where the customer interaction already happens:
                on the counter, in the window, on a receipt, or at the register.
              </p>

              {/* Tag Badges with crisp Lucide checks */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                {[
                  'Acrylic Counter Stand',
                  'Window Decal',
                  'Table QR Sticker',
                  'Receipt NFC Tag',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold text-white flex items-center gap-2 shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[3]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Graphic Mockups */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Stand Card 1: Vector Acrylic Mockup */}
              <div className="w-full sm:w-52 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 p-6 shadow-2xl space-y-4 text-center card-hover border border-white">
                <div className="flex justify-center">
                  <BrandLogo size="lg" showText={false} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 tracking-tight">
                    LOYAL DUCK
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 mt-0.5">
                    Your rewards, in your pocket.
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#3155FF] border border-blue-200 font-mono font-black text-[10px]">
                    Verified Member
                  </span>
                </div>
              </div>

              {/* Stand Card 2: QR Scanner Stand */}
              <div className="w-full sm:w-52 rounded-2xl bg-slate-900/90 backdrop-blur-md text-white p-6 shadow-2xl space-y-4 text-center card-hover border border-slate-700/80">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#3155FF]/20 border border-[#3155FF]/40 text-[#3155FF] flex items-center justify-center shadow-inner">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white tracking-tight">
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
