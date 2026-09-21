'use client';

import React from 'react';
import Link from 'next/link';
import { getDestinations } from '@/lib/destinations';

export default function Footer() {
  const destinations = getDestinations();

  return (
    <footer id="connect" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-intro">
            <span className="eyebrow">YOUR USUALS. WITH BENEFITS.</span>
            <p>
              One account.<br />
              <strong>Good things all over the place.</strong>
            </p>
            <p className="operator">
              loyalduck.pk is operated by<br />
              <strong>COOPON PVT LTD, Pakistan.</strong>
            </p>
          </div>

          <div className="footer-column">
            <h2>The good stuff</h2>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/offers">Offers & nearby</Link>
            <Link href="/get-started">Get Loyal Duck</Link>
            <a href={destinations.customerAppUrl}>Customer app &amp; wallet</a>
            <Link href="/about">About the Duck</Link>
          </div>

          <div className="footer-column">
            <h2>For business</h2>
            <Link href="/business">Become a partner</Link>
            <Link href="/start-business">Start here</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/campaigns">Offers & campaigns</Link>
            <Link href="/staff-guide">Staff quick guide</Link>
          </div>

          <div className="footer-column">
            <h2>Here to help</h2>
            <Link href="/help">Help centre</Link>
            <Link href="/contact">Talk to us</Link>
            <Link href="/trust">Trust & your data</Link>
            <Link href="/delete-account">Delete account</Link>
          </div>

          <div className="footer-column">
            <h2>The serious bit</h2>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms of service</Link>
            <Link href="/merchant-terms">Merchant agreement guide</Link>
          </div>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          loyal duck<span>.</span>
        </div>

        <div className="footer-bottom">
          <span>© 2026 COOPON PVT LTD</span>
          <span>Serious loyalty. Questionable mascot.</span>
          <a href="#top" className="back-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
