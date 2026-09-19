import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Merchant Terms of Service \u00b7 Business Partner Agreement",
  description: "Standard terms and conditions for businesses participating in the Loyal Duck network.",
  alternates: {
    canonical: "/merchant-terms",
  },
  openGraph: {
    title: "Merchant Terms of Service \u00b7 Business Partner Agreement",
    description: "Standard terms and conditions for businesses participating in the Loyal Duck network.",
    url: 'https://loyalduck.pk/merchant-terms',
  },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
