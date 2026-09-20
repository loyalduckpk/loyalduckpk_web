import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Center & FAQs · Customer & Merchant Support',
  description:
    'Got questions? Find answers on how to join Loyal Duck, record visits, redeem rewards, and manage your account with zero hassle.',
  alternates: {
    canonical: '/help',
  },
  openGraph: {
    title: 'Loyal Duck Help Center — Answers & Support',
    description:
      'Got questions? Find answers on how to join Loyal Duck, record visits, redeem rewards, and manage your account.',
    url: 'https://loyalduck.pk/help',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I join Loyal Duck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the customer app or scan a participating business’s merchant QR. Enter your phone number, verify the SMS code and use that same account at other Loyal Duck businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an account at every business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. One Loyal Duck account holds your separate merchant relationships. You use one identity everywhere, but your rewards with each shop stay separate.',
      },
    },
    {
      '@type': 'Question',
      name: 'My SMS code has not arrived. What now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check the phone number and country code. Wait for the resend control in the app, then retry. Never share a code with staff or support. Contact support if access remains blocked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why did scanning a QR not add points?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A merchant QR opens that business. Staff must record a qualifying purchase or visit before loyalty is added. The scan alone does not prove a purchase.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I move points between businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Each business runs its own programme. Your café’s visits and your salon’s points are kept completely separate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use a reward?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Select the available reward in your app and follow the confirmation flow with staff. The business supplies the reward and the final confirmation updates your balance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I delete my account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the customer app settings or use the public account deletion request page at https://loyalduck.pk/delete-account.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a Google listing required for my business to start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Google listing is completely optional. Unlisted shops, food stalls, home businesses and mobile food trucks can start basic loyalty without a Google Place ID or upfront payment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I set up a programme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic loyalty setup starts online and activates immediately when you confirm your representative authority in Loyal Duck Business. No setup payment or manual review delays.',
      },
    },
  ],
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
