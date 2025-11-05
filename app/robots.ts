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
    // Next.js 15 serves sitemaps at /sitemap.xml automatically from sitemap.ts
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
