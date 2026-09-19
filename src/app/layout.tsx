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

export const metadata: Metadata = {
  metadataBase: new URL('https://loyalduck.com'),
  title: 'Loyal Duck — One account. Many separate rewards.',
  description:
    'Register with Loyal Duck once. Then your identity works at participating restaurants, cafés, salons, shops, car washes and more without pooling anyone\'s rewards.',
  keywords: [
    'loyalty program',
    'customer rewards',
    'stamp card',
    'coffee loyalty',
    'digital punch card',
    'local business loyalty',
    'Lahore cafes',
    'Karachi restaurants',
    'Loyal Duck',
  ],
  authors: [{ name: 'Loyal Duck Technologies' }],
  openGraph: {
    title: 'Loyal Duck — One account. Many separate rewards.',
    description:
      'The unified customer loyalty network where you sign up once, and rewards stay separate with each business.',
    url: 'https://loyalduck.com',
    siteName: 'Loyal Duck',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Loyal Duck — One account. Many separate rewards.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loyal Duck — One account. Many separate rewards.',
    description:
      'The unified customer loyalty network where you sign up once, and rewards stay separate with each business.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#F3F3F1] text-[#17181A] selection:bg-[#3155FF] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
