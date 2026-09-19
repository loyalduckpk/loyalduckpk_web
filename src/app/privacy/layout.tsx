import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy \u00b7 Data Protection & Transparency",
  description: "How Loyal Duck handles information across the customer app, Business app, and website. We never sell your personal data.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy \u00b7 Data Protection & Transparency",
    description: "How Loyal Duck handles information across the customer app, Business app, and website. We never sell your personal data.",
    url: 'https://loyalduck.pk/privacy',
  },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
