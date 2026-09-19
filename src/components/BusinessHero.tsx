'use client';

import React, { useState } from 'react';
import ConnectionDialog from './ConnectionDialog';

export default function BusinessHero() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [billInput, setBillInput] = useState('5200');
  const [submitted, setSubmitted] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const parseValue = (text: string): number | null => {
    const cleaned = text.trim().replaceAll(',', '');
    if (!/^\d{1,7}$/.test(cleaned)) return null;
    const amount = Number(cleaned);
    return Number.isSafeInteger(amount) && amount >= 100 && amount <= 1000000 ? amount : null;
  };

  const amount = parseValue(billInput);
  const isValid = amount !== null;
  const pointsPreview = isValid ? String(Math.floor(amount / 100)) : '—';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillInput(e.target.value);
    setSubmitted(false);
    setSuccessMsg('');
  };

  const handleRecord = () => {
    if (submitted) {
      setBillInput('5200');
      setSubmitted(false);
      setSuccessMsg('');
      return;
    }
    if (amount === null) return;
    const points = Math.floor(amount / 100);
    setSuccessMsg(
      `Demo complete: +${points.toLocaleString('en-PK')} points. Sample balance: ${(420 + points).toLocaleString('en-PK')} points. No real transaction was made.`
    );
    setSubmitted(true);
  };

  return (
    <>
      <section className="hero container business-hero" aria-labelledby="business-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="label-dash"></span> LOYAL DUCK FOR BUSINESS
          </div>
          <h1 id="business-title">
            A better reason<br /> to <span className="cobalt">come back.</span>
          </h1>
          <p className="hero-description">
            Your customers. Your rewards. Without building another app or replacing your POS.
          </p>
          <p className="business-hero-detail">
            Give your regulars points or visit rewards. Let your team handle the rest from Loyal Duck Business.
          </p>
          <div className="hero-buttons">
            <button
              className="button button-primary"
              type="button"
              onClick={() => setDialogOpen(true)}
            >
              Become a partner
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 18 18 6M6 6h12v12"/>
              </svg>
            </button>
            <a className="button button-quiet" href="#counter">
              Try the counter
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6"/>
              </svg>
            </a>
          </div>
          <div className="hero-footnote">
            <span className="tiny-check">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12 4 4L19 6"/>
              </svg>
            </span>{' '}
            First location free during the founding launch.
          </div>
        </div>

        <div className="counter-stage" id="counter">
          <div className="counter-header">
            <span className="counter-brand">ld.</span>
            <div>
              <strong>Loyal Duck Business</strong>
              <span>COUNTER / YOUR BRANCH</span>
            </div>
            <span className="counter-example">DEMO</span>
          </div>
          <div className="counter-content">
            <div className="counter-customer">
              <span className="customer-avatar">A</span>
              <div>
                <strong>Alex · sample customer</strong>
                <span>420 points at your business</span>
              </div>
              <span className="micro-label">FOUND</span>
            </div>
            <div className="counter-rule">
              Example rule <strong>Rs 100 = 1 point</strong>
            </div>
            <label className="counter-label" htmlFor="bill-amount">
              Qualifying bill amount
            </label>
            <div className="counter-input">
              <span>Rs</span>
              <input
                id="bill-amount"
                type="text"
                inputMode="decimal"
                value={billInput}
                onChange={handleInputChange}
                maxLength={9}
                autoComplete="off"
                spellCheck="false"
                aria-describedby="counter-help counter-error"
                aria-invalid={!isValid}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (isValid) handleRecord();
                  }
                }}
              />
            </div>
            <p id="counter-error" className="input-error" role="alert" hidden={isValid}>
              Enter a whole-rupee amount from 100 to 1,000,000.
            </p>
            <div className="counter-result">
              <span>Points to add</span>
              <strong>+<span data-points-preview>{pointsPreview}</span></strong>
            </div>
            <button
              className="button button-primary counter-record"
              type="button"
              data-record-demo
              disabled={!isValid}
              onClick={handleRecord}
            >
              {submitted ? (
                'Reset the counter demo ↺'
              ) : (
                <>
                  Record sample purchase{' '}
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14m-6-6 6 6-6 6"/>
                  </svg>
                </>
              )}
            </button>
            <div className="counter-success" role="status" aria-live="polite" hidden={!submitted || !successMsg}>
              {successMsg}
            </div>
            <p id="counter-help" className="demo-disclaimer">
              Interactive demo. No real purchase or points are recorded.
            </p>
          </div>
          <div className="counter-bottom">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z"/>
              <path d="m8 11 3 3 5-5"/>
            </svg>{' '}
            Real loyalty is calculated and verified by the server.
          </div>
        </div>
      </section>

      <div className="business-proof-strip">
        <div className="container">
          <span>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 4 4L19 6"/>
            </svg>{' '}
            Keep your POS.
          </span>
          <span>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 4 4L19 6"/>
            </svg>{' '}
            Set your own rewards.
          </span>
          <span>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 4 4L19 6"/>
            </svg>{' '}
            Use one familiar customer account.
          </span>
        </div>
      </div>

      <ConnectionDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        destination="businessOnboardingUrl"
      />
    </>
  );
}
