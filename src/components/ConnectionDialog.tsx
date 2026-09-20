'use client';

import React, { useEffect, useRef, useState } from 'react';

export type DestinationType = 'customerAppUrl' | 'businessOnboardingUrl' | 'businessLoginUrl';

interface ConnectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  destination?: DestinationType;
  handoffUrl?: string;
  businessName?: string;
}

/**
 * Whitelist check to prevent open redirects
 */
function isAllowedHandoffUrl(urlStr: string): boolean {
  try {
    if (urlStr.startsWith('/') && !urlStr.startsWith('//')) {
      return true;
    }
    const parsed = new URL(urlStr);
    const allowedHosts = [
      'localhost',
      '127.0.0.1',
      'app.loyalduck.com',
      'business.loyalduck.pk',
      'loyalduckpk.com',
      'loyalduck.pk'
    ];
    if (allowedHosts.includes(parsed.hostname)) {
      return true;
    }
    if (parsed.protocol === 'loyalduck-business:' || parsed.protocol === 'loyalduck:') {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export default function ConnectionDialog({
  isOpen,
  onClose,
  handoffUrl,
  businessName
}: ConnectionDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    if (!handoffUrl) return;
    try {
      await navigator.clipboard.writeText(handoffUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback if clipboard API is blocked
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
        document.body.classList.add('dialog-open');
      }
    } else {
      if (dialog.open) {
        dialog.close();
        document.body.classList.remove('dialog-open');
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasValidHandoff = handoffUrl && isAllowedHandoffUrl(handoffUrl);

  return (
    <dialog
      ref={dialogRef}
      id="connection-dialog"
      aria-labelledby="connection-title"
      onClick={(e) => {
        const rect = dialogRef.current?.getBoundingClientRect();
        if (
          rect &&
          (e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom)
        ) {
          onClose();
        }
      }}
    >
      <form method="dialog" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        <button className="dialog-close icon-button" type="button" onClick={onClose} aria-label="Close dialog">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18"/>
          </svg>
        </button>
      </form>

      {hasValidHandoff ? (
        <>
          <span className="eyebrow">DRAFT SAVED (72 HOURS)</span>
          <h2 id="connection-title">Your setup is ready.<br />Confirm your details to start.</h2>
          <p id="connection-copy">
            Your setup draft has been stored securely for {businessName || 'your business'}. Continue to Loyal Duck Business to confirm your representative authority and activate your counter.
          </p>
          <p className="dialog-note">
            Your anonymous handoff link is single-use and expires in 72 hours. No information is activated until confirmed in the app.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem' }}>
            <a
              href={handoffUrl}
              target="_self"
              rel="noreferrer"
              className="button button-primary"
              style={{ textAlign: 'center', textDecoration: 'none' }}
            >
              Open Loyal Duck Business
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6"/>
              </svg>
            </a>

            <button
              className="button button-dark"
              type="button"
              onClick={handleCopyLink}
              style={{ textAlign: 'center', cursor: 'pointer' }}
            >
              {copied ? '✓ Setup Link Copied!' : 'Copy Setup Link (72h)'}
            </button>

            <button className="button button-quiet" type="button" onClick={onClose}>
              Stay on this page
            </button>
          </div>
        </>
      ) : (
        <>
          <span className="eyebrow">SETUP SESSION</span>
          <h2 id="connection-title">Link unavailable<br />or expired.</h2>
          <p id="connection-copy">
            This setup session could not be verified or has expired. Please restart your setup to generate a fresh, secure handoff link.
          </p>
          <p className="dialog-note">
            Loyal Duck handoffs are single-use and valid for 72 hours to protect your business information.
          </p>
          
          <form method="dialog" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <button className="button button-primary" type="button" onClick={onClose}>
              Restart setup 
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6"/>
              </svg>
            </button>
          </form>
        </>
      )}
    </dialog>
  );
}
