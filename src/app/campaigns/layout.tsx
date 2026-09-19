import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Campaigns & Retention \u00b7 For Business",
  description: "Re-engage quiet regulars, announce limited-time seasonal perks, and drive foot traffic without spam.",
  alternates: {
    canonical: "/campaigns",
  },
  openGraph: {
    title: "Campaigns & Retention \u00b7 For Business",
    description: "Re-engage quiet regulars, announce limited-time seasonal perks, and drive foot traffic without spam.",
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
