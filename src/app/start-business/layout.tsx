import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Start for Business \u00b7 Merchant Launch Application",
  description: "Apply to launch Loyal Duck at your business. Setup digital stamp cards, customer retention, and automated rewards.",
  alternates: {
    canonical: "/start-business",
  },
  openGraph: {
    title: "Start for Business \u00b7 Merchant Launch Application",
    description: "Apply to launch Loyal Duck at your business. Setup digital stamp cards, customer retention, and automated rewards.",
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
