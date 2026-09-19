import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

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
        url: '/og-image.png',
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
    images: ['/og-image.png'],
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
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body id="top" className="font-sans antialiased min-h-screen flex flex-col">
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
