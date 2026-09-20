'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDestinations } from '@/lib/destinations';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const destinations = getDestinations();

  const isBusiness = pathname.startsWith('/business') || 
                     pathname.startsWith('/start-business') || 
                     pathname.startsWith('/staff-guide') || 
                     pathname.startsWith('/merchant-terms') ||
                     pathname.startsWith('/campaigns');

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
            <span className="strip-note">ONE ACCOUNT. GOOD THINGS ALL OVER THE PLACE.</span>
          </>
        )}
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="wordmark" aria-label="Loyal Duck home">
            loyal duck<span className="wordmark-stop" aria-hidden="true">.</span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="/how-it-works" aria-current={pathname === '/how-it-works' ? 'page' : undefined}>
              How it works
            </Link>
            <Link href="/business" aria-current={pathname === '/business' ? 'page' : undefined}>
              For business
            </Link>
            <Link href="/help" aria-current={pathname === '/help' ? 'page' : undefined}>
              Help
            </Link>
          </nav>

          <div className="nav-actions">
            {isBusiness ? (
              <a
                className="button button-small button-dark"
                href={destinations.businessLoginUrl}
              >
                Business login
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 18 18 6M6 6h12v12"/>
                </svg>
              </a>
            ) : (
              <Link className="button button-small button-dark" href="/get-started">
                Get Loyal Duck
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6"/>
                </svg>
              </Link>
            )}

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
          <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)}>How it works</Link>
          <Link href="/business" onClick={() => setMobileMenuOpen(false)}>For business</Link>
          <Link href="/help" onClick={() => setMobileMenuOpen(false)}>Help</Link>
          {isBusiness ? (
            <>
              <Link href="/start-business" onClick={() => setMobileMenuOpen(false)}>Start your business</Link>
              <a href={destinations.businessLoginUrl} onClick={() => setMobileMenuOpen(false)}>Business login</a>
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link href="/campaigns" onClick={() => setMobileMenuOpen(false)}>Offers & campaigns</Link>
              <Link href="/staff-guide" onClick={() => setMobileMenuOpen(false)}>Staff quick guide</Link>
            </>
          ) : (
            <>
              <Link href="/offers" onClick={() => setMobileMenuOpen(false)}>Offers & nearby</Link>
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
