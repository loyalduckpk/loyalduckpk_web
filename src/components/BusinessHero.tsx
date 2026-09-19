'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import ConnectionDialog from './ConnectionDialog';

export default function BusinessHero() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [billAmount, setBillAmount] = useState('5200');
  const [statusMsg, setStatusMsg] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);

  const parsedAmount = parseInt(billAmount, 10);
  const pointsPreview = !isNaN(parsedAmount) ? Math.floor(parsedAmount / 100) : 0;

  const handleRecordDemo = () => {
    if (isNaN(parsedAmount) || parsedAmount < 100 || parsedAmount > 1000000) {
      setErrorVisible(true);
      setStatusMsg('');
    } else {
      setErrorVisible(false);
      setStatusMsg(`Demo recorded. +${pointsPreview} points added in sample.`);
    }
  };

  return (
    <>
      <section className="hero container business-hero marketing-scope" aria-labelledby="business-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="label-dash"></span> LOYAL DUCK FOR BUSINESS</div>
          <h1 id="business-title">
            A better reason<br /> to <span className="cobalt gradient-text">come back.</span>
          </h1>
          <p className="hero-description">
            Your customers. Your rewards. Without building another app or replacing your POS.
          </p>
          <p className="business-hero-detail">
            Give your regulars points or visit rewards. Let your team handle the rest from Loyal Duck Business.
          </p>
          <div className="hero-buttons">
            <button 
              className="button button-primary shadow-xl shadow-[#3155ff30]" 
              onClick={() => setDialogOpen(true)}
            >
              Become a partner <ArrowUpRight className="icon w-[18px] h-[18px]" />
            </button>
            <a className="button button-quiet" href="#counter">
              Try the counter <ArrowRight className="icon w-[18px] h-[18px]" />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="tiny-check">
              <Check className="icon w-[15px] h-[15px] text-[#17181A]" />
            </span> 
            First location free during the founding launch.
          </div>
        </div>

        <div className="counter-stage glass-card" id="counter">
          <div className="counter-header">
            <span className="counter-brand shadow-sm">ld.</span>
            <div>
              <strong>Loyal Duck Business</strong>
              <span>COUNTER / YOUR BRANCH</span>
            </div>
            <span className="counter-example border-white/20">DEMO</span>
          </div>
          
          <div className="counter-content bg-white/70">
            <div className="counter-customer">
              <span className="customer-avatar shadow-sm">A</span>
              <div>
                <strong>Alex · sample customer</strong>
                <span>420 points at your business</span>
              </div>
              <span className="micro-label">FOUND</span>
            </div>
            
            <div className="counter-rule">
              Example rule <strong>Rs 100 = 1 point</strong>
            </div>
            
            <label className="counter-label" htmlFor="bill-amount">Qualifying bill amount</label>
            <div className={`counter-input shadow-sm bg-white ${errorVisible ? 'border-red-500 ring-2 ring-red-100' : ''}`}>
              <span>Rs</span>
              <input 
                id="bill-amount" 
                type="text" 
                inputMode="decimal" 
                value={billAmount}
                onChange={(e) => {
                  setBillAmount(e.target.value);
                  setErrorVisible(false);
                  setStatusMsg('');
                }}
                maxLength={9} 
                autoComplete="off" 
                spellCheck="false" 
                aria-describedby="counter-help counter-error" 
              />
            </div>
            
            {errorVisible && (
              <p id="counter-error" className="input-error" role="alert">
                Enter a whole-rupee amount from 100 to 1,000,000.
              </p>
            )}
            
            <div className="counter-result">
              <span>Points to add</span>
              <strong>+{pointsPreview}</strong>
            </div>
            
            <button 
              className="button button-primary counter-record w-full shadow-lg shadow-[#3155ff20]" 
              type="button" 
              onClick={handleRecordDemo}
            >
              Record sample purchase <ArrowRight className="icon w-[16px] h-[16px]" />
            </button>
            
            {statusMsg && (
              <div className="counter-success animate-in slide-in-from-top-2 duration-300" role="status" aria-live="polite">
                {statusMsg}
              </div>
            )}
            
            <p id="counter-help" className="demo-disclaimer text-[#5F6168]">
              Interactive demo. No real purchase or points are recorded.
            </p>
          </div>
          
          <div className="counter-bottom">
            <ShieldCheck className="icon text-[#3155FF]" /> 
            Real loyalty is calculated and verified by the server.
          </div>
        </div>
      </section>
      
      <div className="business-proof-strip glass-panel border-x-0">
        <div className="container">
          <span><Check className="icon" /> Keep your POS.</span>
          <span><Check className="icon" /> Set your own rewards.</span>
          <span><Check className="icon" /> Use one familiar customer account.</span>
        </div>
      </div>

      <ConnectionDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
