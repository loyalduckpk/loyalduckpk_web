import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Delete Account \u00b7 Self-Service Privacy Request",
  description: "Submit a request to permanently delete your Loyal Duck customer or business account and all associated data.",
  alternates: {
    canonical: "/delete-account",
  },
  openGraph: {
    title: "Delete Account \u00b7 Self-Service Privacy Request",
    description: "Submit a request to permanently delete your Loyal Duck customer or business account and all associated data.",
    url: 'https://loyalduck.pk/delete-account',
  },
};

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
