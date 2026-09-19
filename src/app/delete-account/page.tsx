import React from 'react';
import Link from 'next/link';
import { ShieldAlert, Clock, CheckCircle2, Lock, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Account & Data Deletion — Loyal Duck Privacy',
  description:
    'Transparent account and personal data deletion instructions for Loyal Duck customers and merchants, compliant with Google Play Data Safety and App Store requirements.',
};

export default function DeleteAccountPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/95 shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200">
            <span className="text-xs font-black tracking-wider uppercase text-rose-700">
              DATA SAFETY & TRANSPARENCY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Request Account & Personal Data Deletion
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            At Loyal Duck, account deletion is an unconditional user right. You have
            complete sovereignty over your personal identity. This page outlines how to
            request deletion, what data is permanently wiped, and what minimal records
            are legally retained.
          </p>

          <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#3155FF] shrink-0" />
            <p className="text-xs sm:text-sm text-blue-900 font-semibold">
              Official URL for Google Play Data Safety & Apple App Store account deletion disclosures.
            </p>
          </div>
        </div>

        {/* 3 Step Instruction Card */}
        <div className="mt-8 glass-card rounded-3xl p-8 sm:p-12 border border-white/95 shadow-lg space-y-8">
          <h2 className="text-2xl font-black text-slate-900">
            How to Request Account Deletion
          </h2>

          <div className="space-y-6">
            {/* Step 1: In App */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#3155FF] text-white flex items-center justify-center font-black text-sm">
                  1
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  In the Loyal Duck Mobile App (Recommended)
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                Open the Loyal Duck app $\to$ tap <span className="font-bold text-slate-900">Me</span> $\to$ tap{' '}
                <span className="font-bold text-slate-900">Privacy & Account</span> $\to$ tap{' '}
                <span className="font-bold text-slate-900">Delete Account</span>. Type &ldquo;DELETE&rdquo; to confirm
                your intent. Deletion is automatically scheduled.
              </p>
            </div>

            {/* Step 2: Via Web */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm">
                  2
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  Via Web Session Re-authentication
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                Sign in with your verified mobile number via SMS OTP to confirm identity.
                To prevent malicious account hijacking, we never delete an account based solely
                on an unverified phone number submitted in a public form.
              </p>
            </div>

            {/* Step 3: Lost Phone */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm">
                  3
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  Assistance with Lost Phone / SIM
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                If you lost access to your SIM and cannot receive an OTP, submit a manual request
                to <span className="font-mono text-[#3155FF] font-bold">privacy@loyalduck.com</span> with your registered
                details. Our privacy officer will assist you within 72 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Data Deletion Map */}
        <div className="mt-8 glass-card rounded-3xl p-8 sm:p-12 border border-white/95 shadow-lg space-y-6">
          <h2 className="text-2xl font-black text-slate-900">
            What Data is Deleted vs. Retained
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Deleted Immediately */}
            <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200/80 space-y-3">
              <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-black uppercase tracking-wider">
                Permanently Deleted
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Display name & customer profile record</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Phone number (E.164) & SMS OTP tokens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Push notification device installation tokens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>In-app notifications and inbox messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Duck ID rotating QR presentation tokens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Cosmetics unlocks and XP activity events</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>Authentication user record purged from Supabase Auth</span>
                </li>
              </ul>
            </div>

            {/* Retained in Pseudonymized Form */}
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-[#D99B00] text-xs font-black uppercase tracking-wider">
                Retained Pseudonymously
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Economic Ledger Transactions:</strong> Points redeemed and visits logged
                    are preserved with personal identifiers decoupled (shown to merchants as &ldquo;Deleted Customer&rdquo;) to
                    maintain tax and financial audit integrity.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Command Receipts:</strong> Merchant reconciliation records are preserved
                    without customer PII.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Privacy Audit Log:</strong> A cryptographic pseudonym reference
                    (<span className="font-mono text-xs">DEL-XXXXX</span>) is preserved for proof of regulatory compliance.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Grace Period Notice */}
        <div className="mt-8 p-6 rounded-3xl bg-blue-50/80 border border-blue-200 flex items-start gap-4">
          <Clock className="w-6 h-6 text-[#3155FF] shrink-0 mt-1" />
          <div className="space-y-1 text-sm text-slate-700">
            <h4 className="font-extrabold text-blue-900 text-base">
              72-Hour Grace Period & Remorse Window
            </h4>
            <p className="leading-relaxed">
              Upon scheduling deletion, your account enters a 72-hour grace period. During
              this time, push notifications are halted. You can cancel your deletion request
              at any point within the 72 hours by opening the app or logging in. Once the 72 hours
              expire, data erasure is permanent and irreversible.
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-[#3155FF] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Loyal Duck Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
