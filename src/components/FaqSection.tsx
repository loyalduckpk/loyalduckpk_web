'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqSectionProps {
  variant?: 'customer' | 'business';
}

export default function FaqSection({ variant = 'customer' }: FaqSectionProps) {
  const isBusiness = variant === 'business';

  const customerFaqs = [
    {
      q: 'Is Loyal Duck free for customers?',
      a: 'Yes. Your Loyal Duck account is free. Individual rewards and offers are set by participating businesses.'
    },
    {
      q: 'Do I sign up again at each business?',
      a: 'No. Use your existing Loyal Duck account at the next participating business. You may occasionally need to sign back in, but you do not create another merchant-specific account.'
    },
    {
      q: 'Can I use one shop’s points at another?',
      a: 'No. Each business has its own points, visits and rewards. Loyal Duck keeps them together in one account, without mixing their balances.'
    },
    {
      q: 'Do I have to share my location?',
      a: 'No. Location helps you browse nearby offers when you choose to use it. You can choose a city instead, and your loyalty rewards still work without location access.'
    }
  ];

  const businessFaqs = [
    {
      q: 'Do I have to replace my POS?',
      a: 'No. Loyal Duck runs beside it on a phone, tablet or browser. Staff records the loyalty purchase or qualifying visit; payments and discounts still happen through your normal checkout.'
    },
    {
      q: 'Will customers need another account?',
      a: 'Only customers new to Loyal Duck need to register. Customers who already use it at another participating business keep the same account. Your rewards remain separate.'
    },
    {
      q: 'Who decides and honours the rewards?',
      a: 'You set your programme and rewards, and your business honours them. Loyal Duck keeps the records and provides the customer and staff experience.'
    },
    {
      q: 'What happens after I apply?',
      a: 'Your application is reviewed, your authorised signatory completes the merchant agreement, and your business is activated. You can then finish programme setup and invite your team.'
    },
    {
      q: 'Are promotional notifications included?',
      a: 'Publishing an offer and sending a campaign are different actions. Campaigns require review, respect customer preferences and frequency limits, and may carry a fee shown before payment on Business Web.'
    }
  ];

  const faqs = isBusiness ? businessFaqs : customerFaqs;

  return (
    <section 
      className={`section container faq-section marketing-scope ${isBusiness ? 'business-faq' : ''}`} 
      aria-labelledby={isBusiness ? 'business-faq-title' : 'faq-title'}
    >
      <div>
        <span className="eyebrow">
          {isBusiness ? 'LET’S MAKE THIS EASY.' : 'GOOD QUESTIONS.'}
        </span>
        <h2 id={isBusiness ? 'business-faq-title' : 'faq-title'}>
          {isBusiness ? (
            <>Before you<br /> give a Duck.</>
          ) : (
            <>No mysteries.<br /> Just a Duck.</>
          )}
        </h2>
        {!isBusiness && (
          <p className="faq-intro">
            The useful answers. Without the<br className="desktop-break" /> loyalty-software lecture.
          </p>
        )}
      </div>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details className="group" open={open} onClick={(e) => {
      e.preventDefault();
      setOpen(!open);
    }}>
      <summary className="hover:text-[#3155FF] transition-colors group-open:text-[#3155FF]">
        {question}
        <span className="faq-symbol flex items-center justify-center transition-transform duration-300">
          {open ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </summary>
      <div className="faq-answer animate-in slide-in-from-top-2 fade-in duration-300 pb-6 text-[#5F6168]">
        <p>{answer}</p>
      </div>
    </details>
  );
}
