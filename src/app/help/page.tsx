'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

interface HelpItem {
  id: string;
  category: string;
  question: string;
  answer: React.ReactNode;
}

const helpItems: HelpItem[] = [
  {
    id: 'answer-0',
    category: 'getting-started',
    question: 'How do I join Loyal Duck?',
    answer: 'Open the customer app or scan a participating business’s merchant QR. Enter your phone number, verify the SMS code and use that same account at other Loyal Duck businesses.',
  },
  {
    id: 'answer-1',
    category: 'getting-started',
    question: 'Do I need an account at every business?',
    answer: 'No. One Loyal Duck account holds your separate merchant relationships. You may sign back in on a new device, but do not create another account for each shop.',
  },
  {
    id: 'answer-2',
    category: 'getting-started',
    question: 'My SMS code has not arrived. What now?',
    answer: 'Check the phone number and country code. Wait for the resend control in the app, then retry. Never share a code with staff or support. Contact support if access remains blocked.',
  },
  {
    id: 'answer-3',
    category: 'rewards',
    question: 'Why did scanning a QR not add points?',
    answer: 'A merchant QR opens that business. Staff must record a qualifying purchase or visit before loyalty is added. The scan alone does not prove a purchase.',
  },
  {
    id: 'answer-4',
    category: 'rewards',
    question: 'Can I move points between businesses?',
    answer: 'No. Each business runs its own programme. Your café’s visits and your salon’s points are kept separate.',
  },
  {
    id: 'answer-5',
    category: 'rewards',
    question: 'A purchase or visit is missing.',
    answer: 'Check your recent activity, the merchant and branch, and the programme’s qualification rules. Ask staff to check the original transaction before recording it again.',
  },
  {
    id: 'answer-6',
    category: 'rewards',
    question: 'How do I use a reward?',
    answer: 'Select the available reward in your app and follow the confirmation flow with staff. The business supplies the reward and the final confirmation updates your balance.',
  },
  {
    id: 'answer-7',
    category: 'rewards',
    question: 'Staff entered the wrong amount.',
    answer: 'Ask a manager to review the original transaction and use the permitted reversal process. Do not ask staff to balance it out with a fake purchase or visit.',
  },
  {
    id: 'answer-8',
    category: 'offers',
    question: 'Are offers the same as points rewards?',
    answer: 'No. An offer is a temporary merchant deal. It may not use points. Check its terms, branch, dates and use limits before redemption.',
  },
  {
    id: 'answer-9',
    category: 'offers',
    question: 'Why can’t I see an offer someone else sees?',
    answer: 'Some promotions are for existing members, specific branches or customers who have not already used them. Offers can also expire, pause or reach their stated limits.',
  },
  {
    id: 'answer-10',
    category: 'offers',
    question: 'Do I have to allow location access?',
    answer: 'No. Choose a city instead. Location is useful for nearby results while browsing; it is not required to use core loyalty.',
  },
  {
    id: 'answer-11',
    category: 'offers',
    question: 'The merchant would not honour an offer.',
    answer: 'Ask the team to check the published terms and branch. Keep the offer reference and contact Loyal Duck if the issue remains unresolved. Do not share passwords or OTPs.',
  },
  {
    id: 'answer-12',
    category: 'account',
    question: 'How do I turn off promotional notifications?',
    answer: 'Open Me → notification settings in Loyal Duck and change Offers from My Places. Device-level push settings are separate. Turning off promotional pushes does not delete your loyalty account.',
  },
  {
    id: 'answer-13',
    category: 'account',
    question: 'How do I delete my account?',
    answer: (
      <>
        Use Me → Privacy / Account → Delete Account, or the public deletion page. Identity verification protects your account. A support conversation is not the only route.{' '}
        <Link className="inline-link" href="/delete-account">
          Open the deletion page →
        </Link>
      </>
    ),
  },
  {
    id: 'answer-14',
    category: 'account',
    question: 'I no longer have my old phone number.',
    answer: 'Contact support through the account access topic. Do not create duplicate accounts or share someone else’s OTP. Recovery needs a verified identity check.',
  },
  {
    id: 'answer-15',
    category: 'business',
    question: 'How quickly can I set up a programme?',
    answer: 'Basic loyalty setup starts online and activates immediately when you confirm your representative authority in Loyal Duck Business. No setup payment or manual review delays.',
  },
  {
    id: 'answer-16',
    category: 'business',
    question: 'Does every cashier need to sign a contract?',
    answer: 'The authorised business signatory completes the merchant agreement. Staff accept a shorter use acknowledgement through their own account before using the counter.',
  },
  {
    id: 'answer-17',
    category: 'business',
    question: 'Do I need a new POS or scanner?',
    answer: 'No POS replacement is required. The Business app’s supported camera scanner can read a customer QR; exact phone or Duck ID lookup is available as an alternative.',
  },
  {
    id: 'answer-18',
    category: 'business',
    question: 'Is the first location free?',
    answer: 'Core loyalty at your first location is free during the founding launch. Confirm the applicable offer at onboarding. Campaigns, extra locations and physical materials are separate.',
  },
  {
    id: 'answer-19',
    category: 'getting-started',
    question: 'How do I resume an unfinished business setup?',
    answer: 'Your website setup draft is saved for 72 hours. You can continue using the saved handoff link, or start again at /start-business with the same details without duplicate creation.',
  },
  {
    id: 'answer-20',
    category: 'business',
    question: 'Is a Google listing required for my business?',
    answer: 'No. A Google listing is completely optional. Unlisted shops, food stalls, home businesses and mobile food trucks can start basic loyalty without a Google Place ID or upfront payment.',
  },
  {
    id: 'answer-21',
    category: 'business',
    question: 'Can I use my customer phone login to access the counter?',
    answer: 'No. Customer and business access are separate. Cashiers, managers and owners log in through Loyal Duck Business with individual business credentials and permissions.',
  },
  {
    id: 'answer-22',
    category: 'business',
    question: 'When do extra verification and directory listing happen?',
    answer: 'Basic counter loyalty activates immediately upon representative confirmation. Extra verification (like public location/contact proof, domain challenges or business documents) happens later in Business settings when you want public marketplace directory discovery.',
  },
  {
    id: 'answer-23',
    category: 'campaigns',
    question: 'Why is my campaign waiting for review?',
    answer: 'Loyal Duck reviews the message and linked offer before sending is available. Check the campaign status in Business for changes needed or the next step.',
  },
  {
    id: 'answer-24',
    category: 'campaigns',
    question: 'Can I message everyone on Loyal Duck?',
    answer: 'No. Campaigns target your own eligible, opted-in merchant customers. You do not get other businesses’ customer lists or unrestricted messaging access.',
  },
  {
    id: 'answer-25',
    category: 'campaigns',
    question: 'I paid, but the campaign has not sent.',
    answer: 'Check its approval, payment, schedule and promotion status. Contact support with the campaign reference. Do not pay again or create another campaign to force the send.',
  },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const normalize = (text: string) =>
    text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const filteredItems = useMemo(() => {
    const queryWords = normalize(searchQuery).trim().split(/\s+/).filter(Boolean);
    return helpItems.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchCategory) return false;
      if (queryWords.length === 0) return true;
      const combinedText = normalize(`${item.question} ${typeof item.answer === 'string' ? item.answer : ''}`);
      return queryWords.every((word) => combinedText.includes(word));
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero text-only">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>HELP, WITHOUT THE HOLD MUSIC
          </span>
          <h1>
            A little help.<br />
            <span className="cobalt">Less ducking about.</span>
          </h1>
          <p className="lead">
            Answers for customers, counter teams and business owners. Start with the question. We’ll keep the jargon out.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="container help-section">
        <div className="help-search">
          <label htmlFor="help-search" className="eyebrow">
            SEARCH THE HELP CENTRE
          </label>
          <div className="search-box">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="10" cy="10" r="6" />
              <path d="m15 15 6 6" />
            </svg>
            <input
              id="help-search"
              type="search"
              placeholder="Try ‘missing points’ or ‘campaign’"
              autoComplete="off"
              aria-describedby="help-count"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="icon-button"
                type="button"
                id="clear-search"
                aria-label="Clear search"
                onClick={() => setSearchQuery('')}
              >
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="filter-row" role="group" aria-label="Filter help topics">
          {[
            { id: 'all', label: 'All questions' },
            { id: 'getting-started', label: 'Getting started' },
            { id: 'rewards', label: 'Rewards' },
            { id: 'offers', label: 'Offers' },
            { id: 'account', label: 'Your account' },
            { id: 'business', label: 'Business' },
            { id: 'campaigns', label: 'Campaigns' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              data-help-filter={tab.id}
              aria-pressed={activeCategory === tab.id}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <p id="help-count" className="fineprint" role="status" aria-live="polite">
          {filteredItems.length} {filteredItems.length === 1 ? 'answer' : 'answers'} found.
        </p>

        {/* Results List */}
        {filteredItems.length > 0 ? (
          <div className="faq-list help-results">
            {filteredItems.map((item) => (
              <details key={item.id} data-help-item data-category={item.category} id={item.id}>
                <summary>
                  {item.question}
                  <span className="faq-symbol" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        ) : (
          <div className="empty-results" id="help-empty">
            <h2>No match. No mystery.</h2>
            <p>Try fewer words, choose another topic or contact the team.</p>
            <Link className="button button-dark" href="/contact">
              Contact Loyal Duck
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        )}
      </section>

      {/* Support Links */}
      <section className="section container support-links">
        <Link className="link-card" href="/contact">
          <span className="eyebrow">SOMETHING SPECIFIC?</span>
          <h3>Talk to the team.</h3>
          <p>Tell us what happened. No passwords, sign-in codes or card details.</p>
          <span className="link-arrow">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </span>
        </Link>
        <Link className="link-card" href="/delete-account">
          <span className="eyebrow">YOUR ACCOUNT, YOUR CALL</span>
          <h3>Privacy and deletion.</h3>
          <p>Clear choices, an identity check and no guilt trip.</p>
          <span className="link-arrow">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </span>
        </Link>
      </section>
    </div>
  );
}
