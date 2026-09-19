import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Loyal Duck',
    short_name: 'Loyal Duck',
    description: 'One account for all business loyalty across Pakistan.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F3F3F1',
    theme_color: '#3155FF',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
