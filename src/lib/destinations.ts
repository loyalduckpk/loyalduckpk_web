/**
 * Loyal Duck — Central Typed Destination Configuration
 * 
 * Provides authoritative destinations for all marketing website CTAs,
 * ensuring all merchant-start actions unify on /start-business, business logins
 * route to the real Business app, and customer actions go to verified product info
 * without requiring fake app-store badges or APK links.
 */

export interface LegalDestinations {
  privacy: string;
  terms: string;
  merchantTerms: string;
  deletion: string;
}

export interface AppDestinations {
  /** Unifies all merchant-start CTAs to the connected self-service draft flow */
  businessStartUrl: string;
  /** Authoritative Business app login destination */
  businessLoginUrl: string;
  /** Dedicated customer portal explaining multi-merchant rewards & registration */
  customerInfoUrl: string;
  /** Direct link to how the one-account loyalty model works */
  howItWorksUrl: string;
  /** Browse perks and participating merchants */
  offersUrl: string;
  /** Verified legal and privacy routes */
  legal: LegalDestinations;
}

/**
 * Returns the resolved base URL for the Loyal Duck Business application.
 * Respects NEXT_PUBLIC_BUSINESS_APP_URL and falls back cleanly across environments.
 */
export function getBusinessAppBaseUrl(): string {
  // Check browser-injected or environment override
  const envUrl = process.env.NEXT_PUBLIC_BUSINESS_APP_URL;
  if (envUrl && envUrl.trim().length > 0) {
    // Strip trailing /onboarding or trailing slash
    return envUrl.trim().replace(/\/onboarding.*$/, '').replace(/\/+$/, '');
  }

  // Check optional window.LOYAL_DUCK_SITE override if present in browser
  if (typeof window !== 'undefined') {
    const siteConfig = (window as unknown as { LOYAL_DUCK_SITE?: { businessLoginUrl?: string } }).LOYAL_DUCK_SITE;
    if (siteConfig && typeof siteConfig.businessLoginUrl === 'string' && siteConfig.businessLoginUrl.startsWith('http')) {
      return siteConfig.businessLoginUrl.replace(/\/login.*$/, '').replace(/\/+$/, '');
    }
  }

  // Safe defaults based on environment
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:45678';
  }

  return 'https://business.loyalduck.pk';
}

/**
 * Resolves the complete typed destination map for marketing components.
 */
export function getDestinations(): AppDestinations {
  const businessBase = getBusinessAppBaseUrl();

  return {
    businessStartUrl: '/start-business',
    businessLoginUrl: `${businessBase}/login`,
    customerInfoUrl: '/get-started',
    howItWorksUrl: '/how-it-works',
    offersUrl: '/offers',
    legal: {
      privacy: '/privacy',
      terms: '/terms',
      merchantTerms: '/merchant-terms',
      deletion: '/delete-account',
    },
  };
}
