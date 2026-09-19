'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BusinessInvite() {
  return (
    <section className="business-invite container marketing-scope" aria-labelledby="business-invite-title">
      <div className="invite-copy">
        <span className="eyebrow">RUN A PLACE PEOPLE LOVE?</span>
        <h2 id="business-invite-title">
          You bring the regulars.<br /> We’ll bring the Duck.
        </h2>
        <p>Your own rewards. A simple counter app. Offers worth coming back for.</p>
        <Link className="button button-light shadow-lg hover:shadow-xl" href="/business">
          Meet Loyal Duck Business <ArrowRight className="icon w-[18px] h-[18px]" />
        </Link>
      </div>
      <div className="invite-note" aria-hidden="true">
        <span>THIS PLACE</span>
        <strong>GIVES<br /> A DUCK.</strong>
        <span>YOURS COULD, TOO. ↗</span>
      </div>
    </section>
  );
}
