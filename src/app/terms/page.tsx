import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Loyal Duck',
  description: 'Terms of Service for Loyal Duck customers and merchant partners.',
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
          <div className="border-b border-slate-100 pb-6 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-black uppercase text-blue-700">
              LEGAL
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs font-bold text-slate-400">
              Last Updated: September 19, 2026
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">1. Acceptance of Terms</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              By registering an account with Loyal Duck or by using our counter scanner, app, or website, you agree to comply with these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">2. Customer Accounts & Identity</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Customers verify their identity via SMS phone authentication. Each customer is responsible for maintaining the confidentiality of their phone and session. Points or stamps are issued by independent merchants and can only be redeemed with the issuing business.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">3. Merchant Responsibilities</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Participating businesses determine their reward policies, points ratios, and visit stamp thresholds. Merchants agree to honor published rewards in good faith and adhere to applicable consumer protection standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">4. Modifications & Termination</h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              You may terminate your account at any time via the in-app settings or our{' '}
              <Link href="/delete-account" className="text-blue-600 font-bold underline">
                Data Safety Portal
              </Link>.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-100">
            <Link href="/" className="text-xs font-bold text-blue-600 hover:text-blue-700">
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
