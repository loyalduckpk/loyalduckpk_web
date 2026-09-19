'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ConnectionDialog, { DestinationType } from './ConnectionDialog';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogDestination, setDialogDestination] = useState<DestinationType>('customerAppUrl');
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isBusiness = pathname === '/business';

  const openDialog = (destination: DestinationType) => {
    setDialogDestination(destination);
    setDialogOpen(true);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="brand-strip">
        {isBusiness ? (
          <>
            <span>YOUR REWARDS. YOUR REGULARS. ONE VERY USEFUL DUCK.</span>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5"/>
            </svg>
            <span className="strip-note">BUILT TO WORK BESIDE YOUR POS</span>
          </>
        ) : (
          <>
            <span>LESS SIGNING UP. MORE SHOWING UP.</span>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5"/>
            </svg>
            <span className="strip-note">FREE FOR CUSTOMERS. ALWAYS YOUR KIND OF PLACE.</span>
          </>
        )}
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="wordmark" aria-label="Loyal Duck home">
            loyal duck<span className="wordmark-stop" aria-hidden="true">.</span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/#rewards">The rewards</Link>
            {isBusiness ? (
              <Link href="/business" aria-current="page">For business</Link>
            ) : (
              <Link href="/business">For business</Link>
            )}
          </nav>

          <div className="nav-actions">
            <button
              className="button button-small button-dark"
              type="button"
              onClick={() => openDialog(isBusiness ? 'businessLoginUrl' : 'customerAppUrl')}
            >
              {isBusiness ? 'Business login' : 'Get Loyal Duck'}
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 18 18 6M6 6h12v12"/>
              </svg>
            </button>

            <button
              ref={menuButtonRef}
              className="menu-toggle icon-button"
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 8h16M4 16h16"/>
              </svg>
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          className="mobile-nav container"
          aria-label="Mobile navigation"
          hidden={!mobileMenuOpen}
        >
          <Link href="/#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it works</Link>
          <Link href="/#rewards" onClick={() => setMobileMenuOpen(false)}>The rewards</Link>
          <Link href="/business" onClick={() => setMobileMenuOpen(false)}>For business</Link>
        </nav>
      </header>

      <ConnectionDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
        destination={dialogDestination}
      />
    </>
  );
}
