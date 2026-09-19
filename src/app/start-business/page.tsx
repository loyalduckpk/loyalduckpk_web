'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ConnectionDialog from '@/components/ConnectionDialog';

type ProgramType = 'visits' | 'points';

export default function StartBusinessPage() {
  const [step, setStep] = useState<number>(1);
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [program, setProgram] = useState<ProgramType>('visits');
  const [rewardName, setRewardName] = useState('');
  const [visitThreshold, setVisitThreshold] = useState('5');
  const [spendUnit, setSpendUnit] = useState('100');
  const [pointsCost, setPointsCost] = useState('500');

  const [stepError, setStepError] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const [copyFallback, setCopyFallback] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const validateStep1 = () => {
    if (!businessName.trim() || !category || !city.trim()) {
      setStepError('Please complete all fields with valid details.');
      return false;
    }
    setStepError('');
    return true;
  };

  const validateStep2 = () => {
    if (!rewardName.trim()) {
      setStepError('Please enter what reward customers receive.');
      return false;
    }
    if (program === 'points') {
      const unit = Number(spendUnit);
      const cost = Number(pointsCost);
      if (!unit || unit < 1 || !cost || cost < 1) {
        setStepError('Please specify valid amounts for points calculation.');
        return false;
      }
    }
    setStepError('');
    return true;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      if (validateStep2()) setStep(3);
    }
  };

  const handlePrev = () => {
    setStepError('');
    setStep((prev) => Math.max(1, prev - 1));
  };

  const ruleSummary =
    program === 'visits'
      ? `${visitThreshold} qualifying visits → ${rewardName.trim() || 'Your reward'}`
      : `Rs ${Number(spendUnit || 100).toLocaleString('en-PK')} = 1 point`;

  const rewardDetail =
    program === 'visits'
      ? 'Staff confirms qualifying visits. Reward redemption is a separate action.'
      : `${Number(pointsCost || 500).toLocaleString('en-PK')} points → ${rewardName.trim() || 'Your reward'}`;

  const generatedSummaryText = `Loyal Duck programme draft
Business: ${businessName.trim() || 'Your place'}
Category: ${category || 'Unspecified'}
City: ${city.trim() || 'Unspecified'}
Programme: ${program}
${ruleSummary}
${rewardDetail}
Planning only. Not submitted or activated.`;

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(generatedSummaryText);
      setCopyStatus('Plan copied. Paste it into your own notes or onboarding. Nothing was submitted.');
      setCopyFallback(false);
    } catch (_) {
      setCopyStatus('Clipboard access is unavailable. Select and copy this plan:');
      setCopyFallback(true);
    }
  };

  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero setup-hero">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>START YOUR FIRST LOCATION
          </span>
          <h1>
            Five-minute setup.<br />
            <span className="cobalt">Properly simple.</span>
          </h1>
          <p className="lead">
            That’s the target for configuring a straightforward programme once you’re approved. Pick how customers earn, choose a reward and get your team ready.
          </p>
          <p className="fineprint">
            Business application review, agreement signing and activation happen separately. Setup time varies with your details.
          </p>
        </div>

        {/* Setup Card Wizard */}
        <div className="setup-card" id="setup">
          <div className="paper-top">
            <span className="eyebrow">PLAN YOUR FIRST PROGRAMME</span>
            <span className="pill">LOCAL PREVIEW</span>
          </div>

          <div className="wizard-progress" aria-label="Setup progress">
            <span data-step-mark="1" aria-current={step === 1 ? 'step' : undefined}>
              1. Your place
            </span>
            <span data-step-mark="2" aria-current={step === 2 ? 'step' : undefined}>
              2. Your reward
            </span>
            <span data-step-mark="3" aria-current={step === 3 ? 'step' : undefined}>
              3. Ready
            </span>
          </div>

          <form id="setup-form" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
            {/* Step 1 */}
            {step === 1 && (
              <fieldset data-step="1">
                <legend>Your place. The basics.</legend>
                <div className="field">
                  <label htmlFor="business-name">Business name</label>
                  <input
                    id="business-name"
                    name="business_name"
                    autoComplete="organization"
                    maxLength={90}
                    required
                    placeholder="The name above your door"
                    value={businessName}
                    onChange={(e) => { setBusinessName(e.target.value); setStepError(''); }}
                  />
                </div>

                <div className="field-pair">
                  <div className="field">
                    <label htmlFor="business-category">Type of business</label>
                    <select
                      id="business-category"
                      name="category"
                      required
                      value={category}
                      onChange={(e) => { setCategory(e.target.value); setStepError(''); }}
                    >
                      <option value="">Choose one</option>
                      <option>Café</option>
                      <option>Restaurant</option>
                      <option>Salon / barber</option>
                      <option>Retail</option>
                      <option>Car wash</option>
                      <option>Bakery / dessert</option>
                      <option>Other service</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="business-city">City</label>
                    <input
                      id="business-city"
                      name="city"
                      maxLength={80}
                      autoComplete="address-level2"
                      required
                      placeholder="Your city"
                      value={city}
                      onChange={(e) => { setCity(e.target.value); setStepError(''); }}
                    />
                  </div>
                </div>

                {stepError && <p className="inline-error" role="alert">{stepError}</p>}

                <button type="button" className="button button-primary" onClick={handleNext}>
                  Choose my reward →
                </button>
              </fieldset>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <fieldset data-step="2">
                <legend>How do you reward regulars?</legend>
                <div className="choice-pair">
                  <label className="choice-tile">
                    <input
                      type="radio"
                      name="program"
                      value="visits"
                      checked={program === 'visits'}
                      onChange={() => setProgram('visits')}
                    />
                    <span>
                      <strong>Visits</strong>
                      Count qualifying visits.
                    </span>
                  </label>
                  <label className="choice-tile">
                    <input
                      type="radio"
                      name="program"
                      value="points"
                      checked={program === 'points'}
                      onChange={() => setProgram('points')}
                    />
                    <span>
                      <strong>Points</strong>
                      Reward qualifying spend.
                    </span>
                  </label>
                </div>

                <div className="field">
                  <label htmlFor="reward-name">What is the reward?</label>
                  <input
                    id="reward-name"
                    name="reward_name"
                    maxLength={80}
                    required
                    placeholder="For example, a free coffee"
                    value={rewardName}
                    onChange={(e) => { setRewardName(e.target.value); setStepError(''); }}
                  />
                </div>

                {program === 'visits' ? (
                  <div className="field">
                    <label htmlFor="visit-threshold">Qualifying visits before the reward</label>
                    <select
                      id="visit-threshold"
                      name="visit_threshold"
                      value={visitThreshold}
                      onChange={(e) => setVisitThreshold(e.target.value)}
                    >
                      <option value="5">5 qualifying visits</option>
                      <option value="6">6 qualifying visits</option>
                      <option value="8">8 qualifying visits</option>
                      <option value="10">10 qualifying visits</option>
                    </select>
                  </div>
                ) : (
                  <div className="field-pair">
                    <div className="field">
                      <label htmlFor="spend-unit">Rs spent for 1 point</label>
                      <input
                        id="spend-unit"
                        name="spend_unit"
                        inputMode="numeric"
                        type="number"
                        min="1"
                        max="100000"
                        value={spendUnit}
                        onChange={(e) => setSpendUnit(e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="points-cost">Points for this reward</label>
                      <input
                        id="points-cost"
                        name="points_cost"
                        inputMode="numeric"
                        type="number"
                        min="1"
                        max="1000000"
                        value={pointsCost}
                        onChange={(e) => setPointsCost(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {stepError && <p className="inline-error" role="alert">{stepError}</p>}

                <div className="form-buttons">
                  <button type="button" className="button button-quiet" onClick={handlePrev}>
                    ← Back
                  </button>
                  <button type="button" className="button button-primary" onClick={handleNext}>
                    Preview my programme →
                  </button>
                </div>
              </fieldset>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <fieldset data-step="3">
                <legend>Simple looks good on you.</legend>
                <div className="setup-preview">
                  <span className="eyebrow">{category ? `YOUR ${category.toUpperCase()}` : 'YOUR BUSINESS'}</span>
                  <h3>{businessName.trim() || 'Your place'}</h3>
                  <p>{city.trim() || 'Your city'}</p>
                  <div className="ticket-rule"></div>
                  <strong className="programme-summary">{ruleSummary}</strong>
                  <p>{rewardDetail}</p>
                </div>

                <p className="fineprint">
                  This is a planning preview—not a submitted application or an active programme. No information is saved or sent. Copy your plan, then continue through the existing Business onboarding flow.
                </p>

                <div className="form-buttons">
                  <button type="button" className="button button-quiet" onClick={handlePrev}>
                    ← Edit
                  </button>
                  <button type="button" className="button button-dark" onClick={handleCopy}>
                    Copy my plan
                  </button>
                </div>

                {copyStatus && (
                  <p className="form-status" role="status" aria-live="polite">
                    {copyStatus}
                  </p>
                )}

                {copyFallback && (
                  <textarea
                    id="copy-fallback"
                    readOnly
                    rows={8}
                    aria-label="Your local programme draft"
                    value={generatedSummaryText}
                    style={{ width: '100%', marginTop: '0.75rem' }}
                    onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                  />
                )}

                <button
                  type="button"
                  className="button button-primary"
                  style={{ marginTop: '1.25rem' }}
                  onClick={() => setDialogOpen(true)}
                >
                  Continue to Business onboarding
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </button>
              </fieldset>
            )}
          </form>

          <p className="fineprint">
            No password, ID document, signature or payment is collected on this page.
          </p>
        </div>
      </section>

      {/* Editorial Steps */}
      <section className="section container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">CLEAR TERMS. SMALL STEPS.</span>
            <h2>A proper agreement.<br />Not a paperwork maze.</h2>
          </div>
          <p>We explain the responsibilities before you sign. Your authorised owner or representative completes the merchant agreement; cashiers accept their own short use policy.</p>
        </div>
        <div className="editorial-steps">
          <article>
            <span className="step-no">01</span>
            <div>
              <h3>Apply with your business details.</h3>
              <p>Your name, location, business type and an authorised contact are the starting point. Follow the existing application for any required verification.</p>
            </div>
          </article>
          <article>
            <span className="step-no">02</span>
            <div>
              <h3>Review and sign.</h3>
              <p>Loyal Duck reviews the application. Your authorised signatory reads and signs the agreement. A website preview does not activate a business.</p>
            </div>
          </article>
          <article>
            <span className="step-no">03</span>
            <div>
              <h3>Set the reward. Invite the team.</h3>
              <p>Once activated, choose points or visits, set your own reward, and invite staff. Put your merchant QR where customers can see it.</p>
            </div>
          </article>
        </div>
        <Link className="text-link" href="/merchant-terms">
          Read the plain-language agreement guide
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </section>

      {/* Closing Strip */}
      <section className="closing-strip">
        <div className="container closing-inner">
          <div>
            <span className="eyebrow">NO NEW POS. NO NEW SOFTWARE PROJECT.</span>
            <h2>A good reward.<br />A good place to start.</h2>
          </div>
          <Link className="button button-dark" href="/staff-guide">
            See the counter guide
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>

      <ConnectionDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        destination="businessOnboardingUrl"
      />
    </div>
  );
}
