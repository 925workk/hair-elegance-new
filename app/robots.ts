import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.haireleganceutah.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/cgi-bin/',
          '/*.html',
          '/*.php',
          '/ntc/',
          '/wp-admin/',
          '/wp-includes/',
          '/wp-content/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/cgi-bin/',
          '/*.html',
          '/*.php',
          '/ntc/',
          '/wp-admin/',
          '/wp-includes/',
          '/wp-content/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/cgi-bin/',
          '/*.html',
          '/*.php',
          '/ntc/',
          '/wp-admin/',
          '/wp-includes/',
          '/wp-content/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
