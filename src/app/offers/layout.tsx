import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Browse Offers & Perks \u00b7 Discover Participating Brands",
  description: "Explore local caf\u00e9s, salons, restaurants, and retail shops offering rewards on Loyal Duck.",
  alternates: {
    canonical: "/offers",
  },
  openGraph: {
    title: "Browse Offers & Perks \u00b7 Discover Participating Brands",
    description: "Explore local caf\u00e9s, salons, restaurants, and retail shops offering rewards on Loyal Duck.",
    url: 'https://loyalduck.pk/offers',
  },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
