import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Campaigns & Retention · For Business",
  description: "Tell your own eligible, opted-in customers about reviewed promotions. Respectful marketing with zero customer spam.",
  alternates: {
    canonical: "/campaigns",
  },
  openGraph: {
    title: "Campaigns & Retention · For Business",
    description: "Tell your own eligible, opted-in customers about reviewed promotions. Respectful marketing with zero customer spam.",
    url: 'https://loyalduck.pk/campaigns',
  },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
