'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ConnectionDialog from './ConnectionDialog';

interface ClosingStripProps {
  variant?: 'customer' | 'business';
}

export default function ClosingStrip({ variant = 'customer' }: ClosingStripProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const isBusiness = variant === 'business';

  return (
    <>
      <section className={`closing-strip marketing-scope ${isBusiness ? 'business-close' : ''}`} id="connect">
        <div className="container closing-inner">
          <div>
            <span className="eyebrow">
              {isBusiness ? 'SAME COUNTER. BETTER REASONS TO RETURN.' : 'YOU WERE GOING THERE ANYWAY.'}
            </span>
            <h2>
              {isBusiness ? 'Let’s make you a Duck spot.' : 'Might as well get the perks.'}
            </h2>
          </div>
          <button 
            className="button button-dark shadow-xl" 
            onClick={() => setDialogOpen(true)}
          >
            {isBusiness ? 'Become a partner' : 'Get your Duck'} 
            <ArrowUpRight className="icon w-[18px] h-[18px]" />
          </button>
        </div>
      </section>

      <ConnectionDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
