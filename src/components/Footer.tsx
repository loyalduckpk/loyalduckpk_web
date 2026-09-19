'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-[#17181A] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <BrandLogo size="md" textDark={false} className="group-hover:opacity-90 transition-opacity" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              One account for customers. One easy loyalty system for independent businesses.
              No plastic cards, no app clutter, separate rewards that stay with each merchant.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent merchant sovereignty guaranteed</span>
            </div>
          </div>

          {/* Col 2: Customers */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-extrabold tracking-wider uppercase text-slate-400">
              For Customers
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-semibold">
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#customers" className="hover:text-white transition-colors">
                  My Rewards Wallet
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Customer FAQ
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-rose-400 transition-colors">
                  Delete Account (Data Safety)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Businesses */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-extrabold tracking-wider uppercase text-slate-400">
              For Businesses
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-semibold">
              <li>
                <Link href="/business" className="hover:text-white transition-colors">
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link href="/#businesses" className="hover:text-white transition-colors">
                  Points vs. Stamp Visits
                </Link>
              </li>
              <li>
                <Link href="/business#onboarding" className="hover:text-white transition-colors">
                  Merchant Application
                </Link>
              </li>
              <li>
                <a
                  href="mailto:partner@loyalduck.com"
                  className="hover:text-white transition-colors"
                >
                  Contact Merchant Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Policies */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-extrabold tracking-wider uppercase text-slate-400">
              Compliance & Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-semibold">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-white transition-colors">
                  Data Retention & Safety
                </Link>
              </li>
              <li>
                <span className="text-[11px] text-slate-500 block pt-1">
                  Google Play & App Store compliant
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Loyal Duck Technologies. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with care for local businesses</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
