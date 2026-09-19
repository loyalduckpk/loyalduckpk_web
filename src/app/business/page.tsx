'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Store,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
} from 'lucide-react';

export default function BusinessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    city: 'Lahore',
    category: 'Café / Coffee Shop',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
            <span className="text-xs font-black tracking-wider uppercase text-emerald-700">
              MERCHANT PARTNER PROGRAM
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Turn first-time visitors into{' '}
            <span className="text-blue-600">lifelong regulars.</span>
          </h1>

          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Join the Loyal Duck merchant network. Set up your custom rewards in
            minutes, start recognizing customers in 2 taps, and never lose them to
            competitors.
          </p>
        </div>

        {/* Form and Value Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Why Partner With Us */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg space-y-6">
              <h3 className="text-2xl font-black text-slate-900">
                Why Top Independent Merchants Choose Loyal Duck
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900">
                      Zero Hardware Required
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Runs in any existing browser, iPad, Android tablet, or counter
                      phone. No costly POS integration or hardware lock-in.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900">
                      High Customer Adoption
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Customers already have a Loyal Duck account from other shops.
                      They don&apos;t have to download yet another app to earn your rewards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900">
                      Merchant Sovereignty
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      You own your customer lists, reward rules, and visit analytics.
                      Points earned at your store stay strictly at your store.
                    </p>
                  </div>
                </div>
              </div>

              {/* Physical Kit Inclusion */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-3">
                <span className="text-2xl">📦</span>
                <div className="text-xs text-blue-900 leading-snug font-medium">
                  <span className="font-extrabold block">Free Counter Starter Kit:</span>
                  Includes premium acrylic counter display, window decals, and table QR stickers.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div id="onboarding" className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl space-y-6">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Application Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for applying to partner with Loyal Duck. Our merchant team
                    will review your application and contact you on{' '}
                    <span className="font-bold text-slate-900">{formData.phone}</span> within
                    24 hours to set up your counter kit.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs"
                    >
                      <span>Return to Home</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      Apply for Merchant Access
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">
                      Join the pilot cohort in Lahore & Karachi.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Roaster's Coffee"
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Owner / Manager Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.ownerName}
                        onChange={(e) =>
                          setFormData({ ...formData, ownerName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="owner@business.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        City
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 bg-white"
                      >
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Business Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 bg-white"
                      >
                        <option value="Café / Coffee Shop">Café / Coffee Shop</option>
                        <option value="Restaurant / Fast Casual">Restaurant / Fast Casual</option>
                        <option value="Salon / Spa / Grooming">Salon / Spa / Grooming</option>
                        <option value="Bakery / Dessert">Bakery / Dessert</option>
                        <option value="Car Wash / Auto">Car Wash / Auto</option>
                        <option value="Retail Boutique">Retail Boutique</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <span>Submit Merchant Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-medium">
                    By submitting, you agree to our Terms of Service & Privacy Policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
