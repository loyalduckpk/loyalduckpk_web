'use client';

import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textDark?: boolean;
  className?: string;
}

export default function BrandLogo({
  size = 'md',
  showText = true,
  textDark = true,
  className = '',
}: BrandLogoProps) {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }[size];

  const textSize = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }[size];

  const subtextSize = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Bespoke Geometric Vector Duck Monogram */}
      <div
        className={`${iconDimensions} rounded-2xl bg-gradient-to-br from-[#3b66ff] via-[#3155ff] to-[#1e3fd6] flex items-center justify-center p-1.5 shadow-md shadow-[#3155ff]/25 border border-white/20 shrink-0 select-none`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Subtle inner shield shadow */}
          <defs>
            <linearGradient id="duckGradient" x1="6" y1="8" x2="30" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#E9EDFF" />
            </linearGradient>
            <linearGradient id="beakGradient" x1="24" y1="13" x2="32" y2="16" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFD15C" />
              <stop offset="1" stopColor="#FF9F1A" />
            </linearGradient>
          </defs>

          {/* Duck Body & Wings Silhouette */}
          <path
            d="M8.5 24.5C8.5 20.2 11.8 16.8 16.5 16.5C18.2 16.5 19.8 17 21 17.8C20.2 19.5 20.2 21.8 22 23.5C21 26.5 18 28.5 13.5 28.5C10.5 28.5 8.5 26.8 8.5 24.5Z"
            fill="url(#duckGradient)"
          />
          {/* Duck Head */}
          <circle cx="21" cy="13.5" r="5.5" fill="url(#duckGradient)" />
          {/* Duck Beak */}
          <path
            d="M25 12L31.5 14L25 16.2V12Z"
            fill="url(#beakGradient)"
          />
          {/* Duck Eye Accent */}
          <circle cx="21.5" cy="12.5" r="1.1" fill="#1E3FD6" />
          {/* Rippling Waterline Base Accent */}
          <path
            d="M7 29.5C10 28.8 13 30.5 16.5 30.5C20 30.5 23 29 26.5 29C28.5 29 30 29.5 31 30"
            stroke="#FFC83D"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-tight select-none">
          <span
            className={`${textSize} font-extrabold tracking-tight ${
              textDark ? 'text-slate-900' : 'text-white'
            }`}
          >
            Loyal Duck
          </span>
          <span
            className={`${subtextSize} font-bold tracking-wider uppercase ${
              textDark ? 'text-slate-400' : 'text-blue-200'
            }`}
          >
            One Account • Many Rewards
          </span>
        </div>
      )}
    </div>
  );
}
