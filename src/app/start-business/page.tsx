'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ConnectionDialog from '@/components/ConnectionDialog';
import { searchPlaces, getPlaceDetails, PlacePrediction } from '@/lib/places';
import { telemetry } from '@/lib/telemetry';
import { getBusinessAppBaseUrl } from '@/lib/destinations';

type ProgramType = 'visits' | 'points';
type OperatingModel = 'fixed' | 'mobile' | 'service_area';

export default function StartBusinessPage() {
  const [step, setStep] = useState<number>(1);

  // Business fields
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [operatingModel, setOperatingModel] = useState<OperatingModel>('fixed');
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  // Google Places autocomplete search state
  const [searchQuery, setSearchQuery] = useState('');
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(-1);
  const [isSearching, setIsSearching] = useState(false);
  const [showManualForm, setShowManualForm] = useState(true);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize session telemetry on mount
  useEffect(() => {
    telemetry.startSession();
  }, []);

  // Reward fields
  const [program, setProgram] = useState<ProgramType>('visits');
  const [rewardName, setRewardName] = useState('');
  const [visitThreshold, setVisitThreshold] = useState('5');
  const [spendUnit, setSpendUnit] = useState('100');
  const [pointsCost, setPointsCost] = useState('500');

  // UI status
  const [stepError, setStepError] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const [copyFallback, setCopyFallback] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [handoffUrl, setHandoffUrl] = useState('');

  // Debounced search effect
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    const trimmed = searchQuery.trim();
    if (trimmed.length < 2) {
      debounceTimerRef.current = setTimeout(() => {
        setPredictions([]);
        setActiveSuggestionIndex(-1);
        setIsSearching(false);
      }, 0);
      return;
    }

    debounceTimerRef.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const result = await searchPlaces(trimmed);
        setPredictions(result.predictions);
        setActiveSuggestionIndex(-1);
      } catch {
        setPredictions([]);
        setActiveSuggestionIndex(-1);
      } finally {
        setIsSearching(false);
      }
    }, 350);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [searchQuery]);

  const handleSelectPlace = async (prediction: PlacePrediction) => {
    setSelectedPlaceId(prediction.place_id);
    setSearchQuery(prediction.primary_text);
    setPredictions([]);
    setActiveSuggestionIndex(-1);
    setBusinessName(prediction.primary_text);
    setShowManualForm(true);

    telemetry.track('onboarding_search_selected', {
      method: 'google_autocomplete',
      place_id_present: true,
    });

    const details = await getPlaceDetails(prediction.place_id);
    if (details) {
      if (details.name) setBusinessName(details.name);
      if (details.city) setCity(details.city);
      if (details.formatted_address) setStreetAddress(details.formatted_address);
    }
  };

  const handleManualEntryToggle = () => {
    setSelectedPlaceId(null);
    setShowManualForm(true);
    telemetry.track('onboarding_search_selected', {
      method: 'manual',
      place_id_present: false,
    });
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (predictions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev < predictions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev > 0 ? prev - 1 : predictions.length - 1));
    } else if (e.key === 'Enter') {
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < predictions.length) {
        e.preventDefault();
        handleSelectPlace(predictions[activeSuggestionIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setPredictions([]);
      setActiveSuggestionIndex(-1);
    }
  };

  const handleContinueToBusiness = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    telemetry.track('onboarding_handoff_initiated', {
      operating_model: operatingModel,
      program_type: program,
    });

    try {
      const res = await fetch('/api/onboarding/draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_name: businessName,
          category,
          city: city || 'Lahore',
          street_address: streetAddress.trim() || undefined,
          place_id: selectedPlaceId || undefined,
          operating_model: operatingModel,
          program_type: program,
          reward_name: rewardName,
          visit_threshold: program === 'visits' ? Number(visitThreshold) : undefined,
          spend_unit_cents: program === 'points' ? Number(spendUnit) * 100 : undefined,
          points_cost: program === 'points' ? Number(pointsCost) : undefined,
          provenance: 'website_wizard',
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to save setup draft.');
      }

      telemetry.track('onboarding_handoff_completed', {
        status: 'success',
        duration_ms: telemetry.getDurationMs(),
      });

      const businessBase = getBusinessAppBaseUrl();
      const baseUrl = `${businessBase}/onboarding`;
      const targetUrl = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}handoff=${encodeURIComponent(
        data.handoff_token
      )}`;
      setHandoffUrl(targetUrl);
      setDialogOpen(true);
    } catch (err: unknown) {
      console.error('Draft handoff error:', err);
      const msg =
        err instanceof Error
          ? err.message
          : 'Could not save draft. You can copy your plan below.';
      setSubmitError(msg);
      telemetry.track('onboarding_handoff_failed', {
        status: 'failed',
        reason_code: 'draft_save_error',
        duration_ms: telemetry.getDurationMs(),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateStep1 = () => {
    if (!businessName.trim() || !category || !city.trim()) {
      setStepError('Please enter your business trading name, type, and city.');
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
    if (program === 'visits') {
      const v = Number(visitThreshold);
      if (!v || v < 2) {
        setStepError('Visit threshold must be at least 2.');
        return false;
      }
    } else if (program === 'points') {
      const unit = Number(spendUnit);
      const cost = Number(pointsCost);
      if (!unit || unit < 10 || !cost || cost < 50) {
        setStepError('Points require at least Rs 10 per point and 50 points to redeem.');
        return false;
      }
    }
    setStepError('');
    return true;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) {
        if (!selectedPlaceId) {
          telemetry.track('onboarding_search_selected', {
            method: 'manual',
            place_id_present: false,
          });
        }
        setStep(2);
      }
    } else if (step === 2) {
      if (validateStep2()) {
        telemetry.track('onboarding_reward_configured', {
          program_type: program,
        });
        setStep(3);
      }
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
Operating Model: ${operatingModel}
City: ${city.trim() || 'Unspecified'}
Programme: ${program}
${ruleSummary}
${rewardDetail}
Planning only. Real activation happens in Loyal Duck Business.`;

  const handleCopy = async () => {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(generatedSummaryText);
      setCopyStatus('Plan copied to clipboard. You can paste it into your notes.');
      setCopyFallback(false);
    } catch {
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
            Your business.<br />
            <span className="cobalt">Your first reward.</span>
          </h1>
          <p className="lead">
            Find your business or add it yourself. Choose a simple reward, confirm your details and start your programme.
          </p>
          <p className="fineprint">
            No Google listing required. No card needed to start.
          </p>
        </div>

        {/* Setup Card Wizard */}
        <div className="setup-card" id="setup">
          <div className="paper-top">
            <span className="eyebrow">PLAN YOUR FIRST PROGRAMME</span>
            <span className="pill">STARTER SETUP</span>
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
            {/* Step 1: Your place */}
            {step === 1 && (
              <fieldset data-step="1">
                <legend>Your place. The basics.</legend>

                {/* Google Places Search with Autocomplete */}
                <div className="field" style={{ position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <label htmlFor="google-search">Search on Google (Optional)</label>
                    <button
                      type="button"
                      className="inline-link"
                      style={{ fontSize: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      onClick={handleManualEntryToggle}
                    >
                      Not on Google? Add your business
                    </button>
                  </div>
                  <input
                    id="google-search"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded={predictions.length > 0}
                    aria-controls="google-search-predictions"
                    aria-activedescendant={
                      activeSuggestionIndex >= 0 ? `place-suggestion-${activeSuggestionIndex}` : undefined
                    }
                    placeholder="Search by business name or area..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    autoComplete="off"
                  />
                  {isSearching && (
                    <span className="fineprint" style={{ color: 'var(--cobalt)', marginTop: '4px' }}>
                      Searching Google Places...
                    </span>
                  )}

                  {predictions.length > 0 && (
                    <div
                      id="google-search-predictions"
                      role="listbox"
                      aria-label="Google Places suggestions"
                      style={{
                        position: 'relative',
                        zIndex: 10,
                        background: 'white',
                        border: '1px solid var(--line)',
                        borderRadius: '10px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                        marginTop: '4px',
                        marginBottom: '16px',
                        maxHeight: '220px',
                        overflowY: 'auto',
                      }}
                    >
                      {predictions.map((p, idx) => (
                        <button
                          key={p.place_id}
                          id={`place-suggestion-${idx}`}
                          role="option"
                          aria-selected={activeSuggestionIndex === idx}
                          type="button"
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '10px 14px',
                            minHeight: '48px',
                            border: 'none',
                            borderBottom: '1px solid var(--line)',
                            background: activeSuggestionIndex === idx ? 'var(--paper)' : 'transparent',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '2px',
                          }}
                          onClick={() => handleSelectPlace(p)}
                        >
                          <strong style={{ fontSize: '14px', color: 'var(--ink)' }}>{p.primary_text}</strong>
                          <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{p.secondary_text}</span>
                        </button>
                      ))}
                      <div style={{ padding: '6px 14px', fontSize: '11px', color: 'var(--muted)', textAlign: 'right' }}>
                        Powered by Google
                      </div>
                    </div>
                  )}
                </div>

                {/* Merchant-Owned Business Details */}
                {showManualForm && (
                  <>
                    <div className="field">
                      <label htmlFor="business-name">Trading Name *</label>
                      <input
                        id="business-name"
                        name="business_name"
                        autoComplete="organization"
                        maxLength={90}
                        required
                        placeholder="The name above your door or truck"
                        value={businessName}
                        onChange={(e) => { setBusinessName(e.target.value); setStepError(''); }}
                      />
                    </div>

                    <div className="field-pair">
                      <div className="field">
                        <label htmlFor="business-category">Category *</label>
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
                        <label htmlFor="business-city">City or Area *</label>
                        <input
                          id="business-city"
                          name="city"
                          maxLength={80}
                          autoComplete="address-level2"
                          required
                          placeholder="e.g. Lahore, Gulberg"
                          value={city}
                          onChange={(e) => { setCity(e.target.value); setStepError(''); }}
                        />
                      </div>
                    </div>

                    {/* Operating Model Selector */}
                    <div className="field">
                      <label>Operating Model *</label>
                      <div className="choice-pair" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                        <label className="choice-tile" style={{ padding: '10px 8px' }}>
                          <input
                            type="radio"
                            name="operating_model"
                            value="fixed"
                            checked={operatingModel === 'fixed'}
                            onChange={() => setOperatingModel('fixed')}
                          />
                          <span>
                            <strong style={{ fontSize: '13px' }}>Fixed</strong>
                            Storefront
                          </span>
                        </label>
                        <label className="choice-tile" style={{ padding: '10px 8px' }}>
                          <input
                            type="radio"
                            name="operating_model"
                            value="mobile"
                            checked={operatingModel === 'mobile'}
                            onChange={() => setOperatingModel('mobile')}
                          />
                          <span>
                            <strong style={{ fontSize: '13px' }}>Mobile</strong>
                            Food truck
                          </span>
                        </label>
                        <label className="choice-tile" style={{ padding: '10px 8px' }}>
                          <input
                            type="radio"
                            name="operating_model"
                            value="service_area"
                            checked={operatingModel === 'service_area'}
                            onChange={() => setOperatingModel('service_area')}
                          />
                          <span>
                            <strong style={{ fontSize: '13px' }}>Service</strong>
                            On-site / Home
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="field">
                      <label htmlFor="street-address">
                        {operatingModel === 'fixed'
                          ? 'Street Address / Landmark (Optional)'
                          : 'Operating Base / Landmark (Optional)'}
                      </label>
                      <input
                        id="street-address"
                        name="street_address"
                        maxLength={120}
                        placeholder="e.g. Shop 4, Commercial Market"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                      />
                    </div>
                  </>
                )}

                {stepError && <p className="inline-error" role="alert">{stepError}</p>}

                <button type="button" className="button button-primary" onClick={handleNext}>
                  Choose my reward →
                </button>
              </fieldset>
            )}

            {/* Step 2: Your reward */}
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
                  <label htmlFor="reward-name">What is the reward? *</label>
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
                        min="10"
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
                        min="50"
                        max="1000000"
                        value={pointsCost}
                        onChange={(e) => setPointsCost(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <p className="fineprint">
                  Setup rules are validated by the server upon activation. You can adjust limits in Settings anytime.
                </p>

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

            {/* Step 3: Ready & Connected Handoff */}
            {step === 3 && (
              <fieldset data-step="3">
                <legend>Simple looks good on you.</legend>
                <div className="setup-preview">
                  <span className="eyebrow">{category ? `YOUR ${category.toUpperCase()}` : 'YOUR BUSINESS'}</span>
                  <h3>{businessName.trim() || 'Your place'}</h3>
                  <p>{city.trim() || 'Your city'} {operatingModel !== 'fixed' && `(${operatingModel})`}</p>
                  <div className="ticket-rule"></div>
                  <strong className="programme-summary">{ruleSummary}</strong>
                  <p>{rewardDetail}</p>
                </div>

                <div style={{ marginTop: '1.25rem' }}>
                  <span className="eyebrow" style={{ color: 'var(--cobalt)' }}>READY TO START</span>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', marginTop: '4px', marginBottom: '8px' }}>
                    Your setup is ready. Confirm your details to start.
                  </h4>
                  <p className="fineprint">
                    Your setup plan is saved securely as a 72-hour draft so you can finish in Loyal Duck Business without retyping. Read our{' '}
                    <Link href="/privacy" className="inline-link">privacy information</Link>.
                  </p>
                </div>

                <div className="form-buttons">
                  <button type="button" className="button button-quiet" onClick={handlePrev} disabled={isSubmitting}>
                    ← Edit
                  </button>
                  <button type="button" className="button button-dark" onClick={handleCopy}>
                    Copy my plan
                  </button>
                </div>

                {submitError && (
                  <p className="inline-error" role="alert" style={{ marginTop: '0.75rem' }}>
                    {submitError}
                  </p>
                )}

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
                  disabled={isSubmitting}
                  onClick={handleContinueToBusiness}
                >
                  {isSubmitting
                    ? 'Saving your plan...'
                    : 'Continue to Business onboarding'}
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
          <p>We explain the responsibilities before you start. Your authorised owner or representative confirms authority; cashiers accept their short conduct policy.</p>
        </div>
        <div className="editorial-steps">
          <article>
            <span className="step-no">01</span>
            <div>
              <h3>Plan your basic reward.</h3>
              <p>Search your business or add it manually. Choose visits or points, set a starter reward, and preview your customer card.</p>
            </div>
          </article>
          <article>
            <span className="step-no">02</span>
            <div>
              <h3>Confirm your account.</h3>
              <p>Continue into Loyal Duck Business with your saved draft. Sign in with one verified contact and confirm your representative authority.</p>
            </div>
          </article>
          <article>
            <span className="step-no">03</span>
            <div>
              <h3>Serve your first customer.</h3>
              <p>Your counter is live immediately upon confirmation. Scan customer Duck IDs, issue stamps, and invite your staff.</p>
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
        handoffUrl={handoffUrl}
        businessName={businessName}
      />
    </div>
  );
}
