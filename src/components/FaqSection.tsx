import React from 'react';

interface FaqSectionProps {
  variant?: 'customer' | 'business';
}

export default function FaqSection({ variant = 'customer' }: FaqSectionProps) {
  const isBusiness = variant === 'business';

  if (isBusiness) {
    return (
      <section className="section container faq-section business-faq" aria-labelledby="business-faq-title">
        <div>
          <span className="eyebrow">LET’S MAKE THIS EASY.</span>
          <h2 id="business-faq-title">Before you<br /> give a Duck.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Do I have to replace my POS?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>No. Loyal Duck runs beside it on a phone, tablet or browser. Staff records the loyalty purchase or qualifying visit; payments and discounts still happen through your normal checkout.</p>
            </div>
          </details>
          <details>
            <summary>Will customers need another account?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Only customers new to Loyal Duck need to register. Customers who already use it at another participating business keep the same account. Your rewards remain separate.</p>
            </div>
          </details>
          <details>
            <summary>Who decides and honours the rewards?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>You set your programme and rewards, and your business honours them. Loyal Duck keeps the records and provides the customer and staff experience.</p>
            </div>
          </details>
          <details>
            <summary>How do I start and activate my business?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Start in a few simple steps online, set your basic reward, and confirm your details in Loyal Duck Business. No Google listing is required, no card is needed to start, and unlisted or mobile businesses can start right away. An authorised representative confirms their authority and your counter goes live immediately. Extra verification and optional growth features come later when relevant.</p>
            </div>
          </details>
          <details>
            <summary>Are promotional notifications included?<span className="faq-symbol" aria-hidden="true">+</span></summary>
            <div className="faq-answer">
              <p>Publishing an offer and sending a campaign are different actions. Campaigns require review, respect customer preferences and frequency limits, and may carry a fee shown before payment on Business Web.</p>
            </div>
          </details>
        </div>
      </section>
    );
  }

  return (
    <section className="section container faq-section" aria-labelledby="faq-title">
      <div>
        <span className="eyebrow">GOOD QUESTIONS.</span>
        <h2 id="faq-title">No mysteries.<br /> Just a Duck.</h2>
        <p className="faq-intro">
          The useful answers. Without the<br className="desktop-break" /> loyalty-software lecture.
        </p>
      </div>
      <div className="faq-list">
        <details>
          <summary>Is Loyal Duck free for customers?<span className="faq-symbol" aria-hidden="true">+</span></summary>
          <div className="faq-answer">
            <p>Yes. Your Loyal Duck account is free. Individual rewards and offers are set by participating businesses.</p>
          </div>
        </details>
        <details>
          <summary>Do I sign up again at each business?<span className="faq-symbol" aria-hidden="true">+</span></summary>
          <div className="faq-answer">
            <p>No. Use your existing Loyal Duck account at the next participating business. You may occasionally need to sign back in, but you do not create another merchant-specific account.</p>
          </div>
        </details>
        <details>
          <summary>Can I use one shop’s points at another?<span className="faq-symbol" aria-hidden="true">+</span></summary>
          <div className="faq-answer">
            <p>No. Each business has its own points, visits and rewards. Loyal Duck keeps them together in one account, without mixing their balances.</p>
          </div>
        </details>
        <details>
          <summary>Do I have to share my location?<span className="faq-symbol" aria-hidden="true">+</span></summary>
          <div className="faq-answer">
            <p>No. Location helps you browse nearby offers when you choose to use it. You can choose a city instead, and your loyalty rewards still work without location access.</p>
          </div>
        </details>
      </div>
    </section>
  );
}
