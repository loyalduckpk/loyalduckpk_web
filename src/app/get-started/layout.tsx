import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get Started \u00b7 Download & Join Loyal Duck",
  description: "Register once with your phone number and start earning rewards immediately at participating businesses across Pakistan.",
  alternates: {
    canonical: "/get-started",
  },
  openGraph: {
    title: "Get Started \u00b7 Download & Join Loyal Duck",
    description: "Register once with your phone number and start earning rewards immediately at participating businesses across Pakistan.",
    url: 'https://loyalduck.pk/get-started',
  },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
