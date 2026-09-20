import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customer Terms of Service",
  description: "Terms and conditions governing use of the Loyal Duck customer app, customer rewards, and account.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Customer Terms of Service",
    description: "Terms and conditions governing use of the Loyal Duck customer app, customer rewards, and account.",
    url: 'https://loyalduck.pk/terms',
  },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
