import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Start for Business · Self-Service Loyalty Setup",
  description: "Set up your basic loyalty programme on Loyal Duck. Find your business, choose visits or points, and start serving customers at your counter.",
  alternates: {
    canonical: "/start-business",
  },
  openGraph: {
    title: "Start for Business · Self-Service Loyalty Setup",
    description: "Set up your basic loyalty programme on Loyal Duck. Find your business, choose visits or points, and start serving customers at your counter.",
    url: 'https://loyalduck.pk/start-business',
  },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
