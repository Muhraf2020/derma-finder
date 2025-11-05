// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://dermaclinicnearme.com'
  ).replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        // Only block true API endpoints, not page URLs
        '/api/',
        '/api/*',
      ],
    },
    sitemap: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/sitemap-clinics.xml`,
    ],
    // Optional: you can safely drop "host" entirely.
    // It's not needed and sometimes confuses crawlers in multi-domain setups.
    // host: siteUrl.replace(/^https?:\/\//, ''),
  };
}
