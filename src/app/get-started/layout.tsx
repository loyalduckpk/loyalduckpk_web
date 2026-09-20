import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get Started · Customer Rewards & Business Login",
  description: "Register once with your phone number for customer rewards, or log in to Loyal Duck Business to manage your counter and rewards programme.",
  alternates: {
    canonical: "/get-started",
  },
  openGraph: {
    title: "Get Started · Customer Rewards & Business Login",
    description: "Register once with your phone number for customer rewards, or log in to Loyal Duck Business to manage your counter and rewards programme.",
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
