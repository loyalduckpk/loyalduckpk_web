'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <p>
            One account.<br />
            <strong>Good things all over the place.</strong>
          </p>
          <div className="footer-links">
            <Link href="/">For customers</Link>
            <Link href="/business">For business</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/delete-account">Delete account</Link>
          </div>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          loyal duck<span>.</span>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Loyal Duck</span>
          <span>Serious loyalty. Questionable mascot.</span>
          <a href="#top" className="back-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
