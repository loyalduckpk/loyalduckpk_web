import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Counter Staff Guide \u00b7 How to Scan & Reward Customers",
  description: "Step-by-step training for counter staff: scanning customer passes, awarding stamps, and processing redemptions.",
  alternates: {
    canonical: "/staff-guide",
  },
  openGraph: {
    title: "Counter Staff Guide \u00b7 How to Scan & Reward Customers",
    description: "Step-by-step training for counter staff: scanning customer passes, awarding stamps, and processing redemptions.",
    url: 'https://loyalduck.pk/staff-guide',
  },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
