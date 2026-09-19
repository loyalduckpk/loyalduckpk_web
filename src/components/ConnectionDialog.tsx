'use client';

import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface ConnectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectionDialog({ isOpen, onClose }: ConnectionDialogProps) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-[#17181a80] backdrop-blur-sm z-40 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      <dialog 
        open 
        className="fixed inset-0 z-50 flex items-center justify-center bg-transparent m-auto w-full h-full max-w-lg px-4"
        aria-labelledby="connection-title"
      >
        <div className="glass-card w-full rounded-[23px] p-8 md:p-[42px] relative shadow-2xl">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-[14px] md:right-[14px] bg-white w-[35px] h-[35px] rounded-lg border border-[#DDDED9] flex items-center justify-center hover:bg-slate-50 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-[17px] h-[17px] text-[#17181A]" />
          </button>
          
          <span className="mt-[7px] text-[9px] font-[750] tracking-[0.15em] text-[#3155FF] uppercase block">
            DESIGN PREVIEW
          </span>
          
          <h2 id="connection-title" className="text-[35px] md:text-[39px] font-[740] leading-[1.06] tracking-[-0.055em] mt-[18px] text-[#17181A]">
            The next stop<br /> is your app.
          </h2>
          
          <p id="connection-copy" className="text-[14px] md:text-[15px] leading-[1.75] mt-[21px] text-[#5F6168]">
            This preview is not connected to a live application.
          </p>
          
          <p className="text-[11px] border-t border-[#DDDED9] pt-[17px] mt-[20px] text-[#5F6168]">
            No information has been sent or saved. The production button is connected through site-config.js.
          </p>
          
          <button 
            onClick={onClose}
            className="button button-primary w-full md:w-auto mt-[22px] text-[12px] shadow-lg shadow-[#3155ff20]"
          >
            Back to the good stuff <ArrowRight className="w-[18px] h-[18px]" />
          </button>
        </div>
      </dialog>
    </>
  );
}
