'use client';

import React from 'react';
import { Search, FileText, UserCog } from 'lucide-react';

export default function BusinessOperations() {
  return (
    <section className="operations-section marketing-scope">
      <div className="container operations-layout">
        <div>
          <span className="eyebrow">04 / THE QUIETLY IMPORTANT STUFF</span>
          <h2>Funny name.<br /> Serious about<br /> your counter.</h2>
        </div>
        <div className="operations-list">
          <article className="hover:bg-white/5 p-4 -mx-4 rounded-2xl transition-colors duration-300">
            <Search className="icon w-[21px] h-[21px]" />
            <div>
              <h3>Find them. Reward them. Next.</h3>
              <p>Duck ID, personal QR or phone lookup. Staff sees the customer’s rewards at your business—not everyone else’s.</p>
            </div>
          </article>
          <article className="hover:bg-white/5 p-4 -mx-4 rounded-2xl transition-colors duration-300">
            <FileText className="icon w-[21px] h-[21px]" />
            <div>
              <h3>A record you can reconcile.</h3>
              <p>Check activity, review redemptions and export transaction reports. Mistakes get a traceable manager reversal.</p>
            </div>
          </article>
          <article className="hover:bg-white/5 p-4 -mx-4 rounded-2xl transition-colors duration-300">
            <UserCog className="icon w-[21px] h-[21px]" />
            <div>
              <h3>The right access for each person.</h3>
              <p>Owners and managers handle setup and teams. Staff focuses on serving customers.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
