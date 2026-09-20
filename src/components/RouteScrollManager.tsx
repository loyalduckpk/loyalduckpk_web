'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * RouteScrollManager
 * 
 * Ensures every client-side page transition starts in a clean, scrollable state:
 * 1. Strips any modal lock classes (e.g. 'dialog-open') from document.body.
 * 2. Restores document.body.style.overflow to default.
 * 3. Closes any stray native dialogs left in the DOM.
 * 4. Ensures instant top scroll without fighting smooth-scroll animations.
 */
export default function RouteScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Remove modal and scroll-lock classes
    if (typeof document !== 'undefined') {
      document.body.classList.remove('dialog-open');
      document.body.style.overflow = '';
      
      // Close any orphaned open dialogs
      const openDialogs = document.querySelectorAll('dialog[open]');
      openDialogs.forEach((dialog) => {
        try {
          (dialog as HTMLDialogElement).close();
        } catch {
          // Ignored if already closed
        }
      });

      // 2. Deterministic instant scroll reset to top on route change
      // (Unless the URL contains an anchor hash)
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }
  }, [pathname]);

  return null;
}
