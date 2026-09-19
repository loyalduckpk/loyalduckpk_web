'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/60 shadow-sm transition-all backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Bespoke Vector Monogram */}
        <Link href="/" className="group">
          <BrandLogo size="md" textDark={true} className="group-hover:opacity-95 transition-opacity" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-extrabold tracking-wider uppercase text-slate-600">
          <Link
            href="/#customers"
            className="hover:text-[#3155FF] transition-colors"
          >
            For Customers
          </Link>
          <Link
            href="/#businesses"
            className="hover:text-[#3155FF] transition-colors"
          >
            For Businesses
          </Link>
          <Link
            href="/#how-it-works"
            className="hover:text-[#3155FF] transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/#faq"
            className="hover:text-[#3155FF] transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/business"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3155FF] hover:bg-[#1E3FD6] text-white font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-[#3155FF]/25 hover:shadow-xl hover:shadow-[#3155FF]/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Partner with us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-200/50 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/60 bg-white/95 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-sm font-extrabold uppercase tracking-wide text-slate-700">
            <Link
              href="/#customers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#3155FF]"
            >
              For Customers
            </Link>
            <Link
              href="/#businesses"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#3155FF]"
            >
              For Businesses
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#3155FF]"
            >
              How It Works
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#3155FF]"
            >
              FAQ
            </Link>
          </nav>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/business"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-2xl bg-[#3155FF] text-white text-center font-extrabold text-xs uppercase tracking-wide shadow-md shadow-[#3155FF]/25"
            >
              Partner with Loyal Duck
            </Link>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Verified merchant network in Pakistan</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
