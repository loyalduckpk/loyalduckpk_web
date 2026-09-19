'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, ArrowUpRight, Menu, X } from 'lucide-react';
import ConnectionDialog from './ConnectionDialog';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const isBusinessPage = pathname === '/business';

  return (
    <>
      <div className="brand-strip">
        {isBusinessPage ? (
          <>
            <span>YOUR REWARDS. YOUR REGULARS. ONE VERY USEFUL DUCK.</span>
            <Sparkles className="icon text-[#FFC83D] w-3 h-3" />
            <span className="strip-note">BUILT TO WORK BESIDE YOUR POS</span>
          </>
        ) : (
          <>
            <span>LESS SIGNING UP. MORE SHOWING UP.</span>
            <Sparkles className="icon text-[#FFC83D] w-3 h-3" />
            <span className="strip-note">FREE FOR CUSTOMERS. ALWAYS YOUR KIND OF PLACE.</span>
          </>
        )}
      </div>
      
      <header className="site-header glass-panel border-b-0 sticky top-0 z-30">
        <div className="container nav-wrap">
          <Link href="/" className="wordmark" aria-label="Loyal Duck home">
            loyal duck<span className="wordmark-stop text-[#3155FF]">.</span>
          </Link>
          
          <nav className="desktop-nav" aria-label="Main navigation">
            {!isBusinessPage ? (
              <>
                <Link href="/#how-it-works">How it works</Link>
                <Link href="/#rewards">The rewards</Link>
                <Link href="/business">For business</Link>
              </>
            ) : (
              <>
                <Link href="/#how-it-works">How it works</Link>
                <Link href="/#rewards">The rewards</Link>
                <Link href="/business" aria-current="page">For business</Link>
              </>
            )}
          </nav>
          
          <div className="nav-actions">
            <button 
              onClick={() => setDialogOpen(true)}
              className="button button-small button-dark"
            >
              {isBusinessPage ? 'Business login' : 'Get Loyal Duck'}
              <ArrowUpRight className="icon w-[18px] h-[18px]" />
            </button>
            <button 
              className="menu-toggle icon-button md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open navigation" 
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="icon w-[24px] h-[24px]" />
              ) : (
                <Menu className="icon w-[24px] h-[24px]" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav container glass-panel border-x-0 border-b-0" aria-label="Mobile navigation">
            <Link href="/#how-it-works" onClick={() => setMobileMenuOpen(false)}>How it works</Link>
            <Link href="/#rewards" onClick={() => setMobileMenuOpen(false)}>The rewards</Link>
            <Link href="/business" onClick={() => setMobileMenuOpen(false)}>For business</Link>
          </nav>
        )}
      </header>

      <ConnectionDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
