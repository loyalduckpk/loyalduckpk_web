'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <span className="text-2xl leading-none">🦆</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              Loyal Duck
            </span>
            <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 -mt-1">
              One Account. Many Rewards.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <Link
            href="/#customers"
            className="hover:text-blue-600 transition-colors"
          >
            FOR CUSTOMERS
          </Link>
          <Link
            href="/#businesses"
            className="hover:text-blue-600 transition-colors"
          >
            FOR BUSINESSES
          </Link>
          <Link
            href="/#how-it-works"
            className="hover:text-blue-600 transition-colors"
          >
            HOW IT WORKS
          </Link>
          <Link
            href="/#faq"
            className="hover:text-blue-600 transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/business"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Partner with us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-bold text-slate-700">
            <Link
              href="/#customers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600"
            >
              For Customers
            </Link>
            <Link
              href="/#businesses"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600"
            >
              For Businesses
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600"
            >
              How It Works
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600"
            >
              FAQ
            </Link>
          </nav>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link
              href="/business"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-2xl bg-blue-600 text-white text-center font-bold text-sm shadow-md shadow-blue-500/25"
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
