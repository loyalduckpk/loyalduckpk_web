'use client';

import React, { useEffect, useRef } from 'react';

export type DestinationType = 'customerAppUrl' | 'businessOnboardingUrl' | 'businessLoginUrl';

interface ConnectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  destination?: DestinationType;
}

const dialogCopy: Record<DestinationType, string> = {
  customerAppUrl: 'This button will open your existing Loyal Duck customer app. The standalone website preview has no customer-app URL configured yet.',
  businessOnboardingUrl: 'This button will open your existing business application and agreement flow. The standalone website preview does not submit a merchant application.',
  businessLoginUrl: 'This button will open your existing Loyal Duck Business login. The standalone website preview does not authenticate anyone.'
};

export default function ConnectionDialog({ isOpen, onClose, destination = 'customerAppUrl' }: ConnectionDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

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

      <span className="eyebrow">DESIGN PREVIEW</span>
      <h2 id="connection-title">The next stop<br /> is your app.</h2>
      <p id="connection-copy">{dialogCopy[destination] || dialogCopy.customerAppUrl}</p>
      <p className="dialog-note">No information has been sent or saved. The production button is connected through site-config.js.</p>
      
      <form method="dialog" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        <button className="button button-primary" type="button" onClick={onClose}>
          Back to the good stuff 
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6"/>
          </svg>
        </button>
      </form>
    </dialog>
  );
}
