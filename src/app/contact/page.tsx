'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [reference, setReference] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [busy, setBusy] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [isError, setIsError] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;

    if (honeypot) {
      setIsError(true);
      setStatusText('We could not submit this request. Please try again.');
      return;
    }

    if (!email.trim() || !topic || !message.trim() || message.trim().length < 10) {
      setIsError(true);
      setStatusText('Please check the highlighted fields before sending (message must be at least 10 characters).');
      return;
    }

    setBusy(true);
    setIsError(false);
    setStatusText('Sending your request…');

    // Simulate safe local handling in preview mode with deterministic reference
    setTimeout(() => {
      setBusy(false);
      // In preview mode:
      const generatedRef = `LD-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(generatedRef);
      setStatusText(
        `Website preview notice: this demo form is not connected to a live support endpoint. In production, your request would be confirmed with Reference: ${generatedRef}. Use Help in the Loyal Duck app for immediate support.`
      );
    }, 700);
  };

  return (
    <div className="support-page">
      {/* Page Hero */}
      <section className="container page-hero contact-hero">
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="label-dash"></span>HUMANS, BEHIND THE DUCK
          </span>
          <h1>
            Let’s sort<br />
            <span className="cobalt">it out.</span>
          </h1>
          <p className="lead">
            A missing reward, a business question, an offer that needs checking. Give us the useful details—not your life story.
          </p>
          <div className="hero-buttons">
            <Link className="button button-quiet" href="/help">
              Check the help centre
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
          <p className="fineprint">loyalduck.pk is operated by COOPON PVT LTD, Pakistan.</p>
        </div>

        {/* Support Form */}
        <form className="support-form" id="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="paper-top">
            <span className="eyebrow">TALK TO LOYAL DUCK</span>
            <span className="pill">NO OTPs. NO PASSWORDS.</span>
          </div>

          <div className="field-pair">
            <div className="field">
              <label htmlFor="contact-name">
                Your name <span>(optional)</span>
              </label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Reply email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="contact-topic">What is this about?</label>
            <select
              id="contact-topic"
              name="topic"
              required
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="">Choose a topic</option>
              <option value="account">Account access</option>
              <option value="rewards">Points, visits or rewards</option>
              <option value="offers">Offer issue</option>
              <option value="business">Business onboarding</option>
              <option value="campaign">Campaign or payment query</option>
              <option value="privacy">Privacy question</option>
              <option value="security">Report a security concern</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="contact-reference">
              Business or reference <span>(optional)</span>
            </label>
            <input
              id="contact-reference"
              name="reference"
              maxLength={160}
              placeholder="Business name, transaction or campaign reference"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="contact-message">What happened?</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              maxLength={2000}
              required
              aria-describedby="message-warning"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span id="message-warning" className="field-help">
              Do not include passwords, SMS codes, full card numbers or identity documents. Maximum 2,000 characters.
            </span>
          </div>

          {/* Honeypot */}
          <div className="bot-field" aria-hidden="true" style={{ display: 'none' }}>
            <label htmlFor="company-website">Leave this empty</label>
            <input
              id="company-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <p className="fineprint">
            We use these details to respond to this request, as described in the{' '}
            <Link className="inline-link" href="/privacy">
              Privacy Policy
            </Link>
            . This is not a marketing signup.
          </p>

          <button className="button button-primary" type="submit" id="contact-submit" disabled={busy}>
            {busy ? 'Sending…' : 'Send request →'}
          </button>

          {statusText && (
            <p
              className="form-status"
              id="contact-status"
              role="status"
              aria-live="polite"
              data-error={String(isError)}
            >
              {statusText}
            </p>
          )}

          {!submittedRef && (
            <p className="integration-note" data-preview-only>
              Preview: this form is not connected to support yet. No request will be sent until your existing support endpoint is configured.
            </p>
          )}
        </form>
      </section>

      {/* Support Links */}
      <section className="container section support-links">
        <Link className="link-card" href="/delete-account">
          <span className="eyebrow">NEED TO DELETE YOUR ACCOUNT?</span>
          <h3>No support queue required.</h3>
          <p>Use the dedicated deletion route and verify that the account is yours.</p>
          <span className="link-arrow">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </span>
        </Link>
        <Link className="link-card" href="/staff-guide">
          <span className="eyebrow">STANDING AT THE COUNTER?</span>
          <h3>Start with the reference.</h3>
          <p>The business, branch, time and transaction reference help the right team check what happened.</p>
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
