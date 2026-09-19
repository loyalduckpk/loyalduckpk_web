'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/constants';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50/50 border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80">
            <span className="text-xs font-black tracking-wider uppercase text-[#3155FF]">
              GOOD QUESTIONS
            </span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight text-center leading-tight">
          A few things people ask the Duck.
        </h2>

        {/* Subhead */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium text-center max-w-xl mx-auto leading-relaxed">
          Short answers now. Full loyalty confidence very soon.
        </p>

        {/* Accordions with glass styling */}
        <div className="mt-14 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="glass-card rounded-2xl border border-white/95 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-[#3155FF]' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
