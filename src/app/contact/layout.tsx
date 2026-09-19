import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us \u00b7 Customer & Merchant Operations",
  description: "Get in touch with the Loyal Duck team at COOPON PVT LTD. Direct assistance for business onboarding, account help, and inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us \u00b7 Customer & Merchant Operations",
    description: "Get in touch with the Loyal Duck team at COOPON PVT LTD. Direct assistance for business onboarding, account help, and inquiries.",
    url: 'https://loyalduck.pk/contact',
  },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
