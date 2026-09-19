import React from 'react';
import Link from 'next/link';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Loyal Duck',
  description:
    'Transparent Privacy Policy for Loyal Duck customer and merchant applications, detailing data minimization, no data sales, and user sovereignty.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
          {/* Header */}
          <div className="border-b border-slate-100 pb-6 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-black uppercase text-blue-700">
              LEGAL & PRIVACY
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Loyal Duck Privacy Policy
            </h1>
            <p className="text-xs font-bold text-slate-400">
              Effective Date: September 19, 2026 • Version 1.2
            </p>
          </div>

          {/* Key Commitments Summary */}
          <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
            <h3 className="text-base font-black text-emerald-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>Our Core Privacy Commitments</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-800 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>We NEVER sell, rent, or monetize personal customer data to advertisers.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Rewards stay with each independent business—no cross-merchant tracking.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Coarse location is used strictly foreground to discover nearby offers. Never tracked in background.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Unconditional right to account deletion with 72-hour grace period.</span>
              </li>
            </ul>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">
              1. Information We Collect
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-2 font-medium">
              <p>
                <strong>Customer Identity:</strong> Verified mobile phone number (used for SMS OTP login and POS cashier matching) and optional display name.
              </p>
              <p>
                <strong>Loyalty Ledger Data:</strong> Transaction timestamps, points earned or redeemed, visits stamped, and associated merchant location identifiers.
              </p>
              <p>
                <strong>Device & Diagnostics:</strong> Anonymous crash reports and Firebase Cloud Messaging push notification installation tokens (if push permissions are granted).
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">
              2. How We Use Your Data
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-2 font-medium">
              <p>
                We use collected information solely to provide real-time loyalty balance calculations, prevent transaction fraud, issue verified redemption receipts, and inform you of promotions or rewards available at businesses you patronize.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">
              3. Data Retention & Erasure (Data Deletion Map)
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-2 font-medium">
              <p>
                When you request account deletion through the app or our public{' '}
                <Link href="/delete-account" className="text-blue-600 underline font-bold">
                  Data Safety Portal
                </Link>
                , personal identifiers (name, phone number, push tokens, marketing inbox) are permanently purged after a 72-hour grace period.
              </p>
              <p>
                Pursuant to statutory financial auditing, tax reconciliation, and double-entry accounting rules, ledger records (points redeemed, visits logged) are decoupled from your identity and retained in irreversible pseudonymized format (marked to merchants as &ldquo;Deleted Customer&rdquo;).
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">
              4. Third-Party Service Providers
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-2 font-medium">
              <p>
                We partner with vetted infrastructure providers under strict confidentiality:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>Supabase:</strong> Hosted PostgreSQL database and authentication infrastructure.</li>
                <li><strong>Google Firebase:</strong> Push notification delivery.</li>
                <li><strong>Twilio / Telephony Providers:</strong> Transactional SMS verification codes.</li>
                <li><strong>PayFast:</strong> Merchant subscription and commercial campaign billing.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-black text-slate-900">
              5. Contact Us
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              If you have questions regarding this Privacy Policy or wish to exercise your
              data rights, email our Data Protection Officer at{' '}
              <a href="mailto:privacy@loyalduck.com" className="text-blue-600 font-bold underline">
                privacy@loyalduck.com
              </a>.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <Link href="/" className="text-xs font-bold text-blue-600 hover:text-blue-700">
              ← Return to Home
            </Link>
            <Link href="/delete-account" className="text-xs font-bold text-rose-600 hover:text-rose-700">
              Request Account Deletion →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
