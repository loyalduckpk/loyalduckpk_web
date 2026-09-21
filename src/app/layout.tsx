import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RouteScrollManager from '@/components/RouteScrollManager';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  preload: true,
});

const criticalTypography = `
:root {
  --canvas: #F3F3F1;
  --paper: #FFFFFF;
  --ink: #17181A;
  --muted: #5F6168;
  --cobalt: #3155FF;
  --gold: #FFC83D;
  --sans: var(--font-jakarta), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
html { scroll-padding-top: 112px; -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
body {
  margin: 0;
  background: #F3F3F1;
  color: #17181A;
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.55;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1 { font-size: clamp(60px, 6.55vw, 98px); font-weight: 780; line-height: 1.015; letter-spacing: -0.066em; }
h2 { font-size: clamp(36px, 4.1vw, 60px); font-weight: 740; line-height: 1.06; letter-spacing: -0.055em; }
h3 { font-size: 25px; font-weight: 700; line-height: 1.17; letter-spacing: -0.035em; }
.brand-strip { font-size: 9px; letter-spacing: 0.12em; font-weight: 600; line-height: 1.3; }
.eyebrow { font-size: 11px; font-weight: 750; letter-spacing: 0.15em; text-transform: uppercase; }
.desktop-nav a { font-size: 13px; font-weight: 580; }
.button { font-size: 14px; font-weight: 680; letter-spacing: -0.012em; line-height: 1.4; }
.button-small { font-size: 12px; }
.fineprint { font-size: 12px; line-height: 1.75; }
.quiet-note { font-size: 13px; line-height: 1.65; }
.micro-label { font-size: 9px; font-weight: 750; letter-spacing: 0.08em; }
.pill { font-size: 9px; font-weight: 750; letter-spacing: 0.055em; line-height: 1.3; }
.stage-caption { font-size: 9px; letter-spacing: 0.09em; font-weight: 650; }
`;


const siteUrl = 'https://loyalduck.pk';
const siteTitle = 'Loyal Duck — One account for all business loyalty';
const siteDescription =
  'Register with Loyal Duck once. Then your identity works at participating cafés, restaurants, salons, shops, and car washes across Pakistan without separate apps or pooled rewards.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s · Loyal Duck',
  },
  description: siteDescription,
  applicationName: 'Loyal Duck',
  authors: [{ name: 'COOPON PVT LTD', url: siteUrl }],
  creator: 'COOPON PVT LTD',
  publisher: 'COOPON PVT LTD',
  keywords: [
    'loyalty program pakistan',
    'customer rewards app',
    'digital stamp card',
    'cafe loyalty program',
    'restaurant loyalty rewards',
    'one account for all business loyalty',
    'lahore loyalty card',
    'karachi loyalty card',
    'islamabad loyalty card',
    'customer retention software',
    'loyal duck',
    'loyalduck.pk',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description:
      'One account for all business loyalty. Register once, use at your favourite cafés, salons, and shops. Zero separate apps.',
    url: siteUrl,
    siteName: 'Loyal Duck',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://loyalduck.pk/og-image-v2.png?v=20260920',
        width: 1200,
        height: 630,
        alt: 'Loyal Duck — One account for all business loyalty',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description:
      'One account for all business loyalty. Register once, use at your favourite cafés, salons, and shops. Zero separate apps.',
    images: ['https://loyalduck.pk/og-image-v2.png?v=20260920'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://loyalduck.pk/#organization',
      name: 'Loyal Duck',
      legalName: 'COOPON PVT LTD',
      url: 'https://loyalduck.pk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://loyalduck.pk/icon-512.png',
        width: 512,
        height: 512,
      },
      description:
        'The unified customer loyalty network where users sign up once and earn rewards across participating businesses while keeping balances separate.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://loyalduck.pk/#website',
      url: 'https://loyalduck.pk',
      name: 'Loyal Duck',
      publisher: {
        '@id': 'https://loyalduck.pk/#organization',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <style
          id="critical-typography"
          dangerouslySetInnerHTML={{ __html: criticalTypography }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body id="top" className={`${jakarta.className} font-sans antialiased min-h-screen flex flex-col`}>
        <RouteScrollManager />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
