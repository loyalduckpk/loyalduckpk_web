import React from 'react';

export default function CategoryBand() {
  return (
    <div className="category-band">
      <div className="container category-inner">
        <span className="category-intro">A DUCK WALKS INTO…</span>
        <span>
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h1a3 3 0 0 1 0 6h-1M7 3v2m4-2v2m4-2v2"/>
          </svg>{' '}
          A café
        </span>
        <span>
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 3v7m3-7v7M3 3v5a3 3 0 0 0 6 0V3M6 11v10M17 3c-3 4-4 8 0 9h3V3h-3Zm3 9v9"/>
          </svg>{' '}
          A restaurant
        </span>
        <span>
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="6" cy="6" r="3"/>
            <circle cx="6" cy="18" r="3"/>
            <path d="m8.5 7.5 12 12m-12-3 12-12M14 10l-4 4"/>
          </svg>{' '}
          A salon
        </span>
        <span>
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 10h18l-2-6H5l-2 6Zm1 0v10h16V10M9 20v-7h6v7M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/>
          </svg>{' '}
          A shop
        </span>
        <span>
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m3 11 2-6h14l2 6M3 11h18v8H3v-8Zm2 8v2m14-2v2M6 15h2m8 0h2"/>
          </svg>{' '}
          A car wash
        </span>
      </div>
    </div>
  );
}
