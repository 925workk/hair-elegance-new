import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PerformanceMonitor from "./components/PerformanceMonitor";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
  preload: true,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Hair Elegance Salon - Premium Hair & Beauty Services in South Jordan",
  description: "Hair Elegance: South Jordan's premier hair salon since 2008. Expert hair cuts, color, styling, nails & beauty services. Located at 11516 District Main Drive. Call (801) 727-4247.",
  keywords: "hair salon South Jordan, hair cuts South Jordan Utah, hair color, nail salon, beauty services, District Main Drive, 84095, hair stylist, manicure pedicure",
  authors: [{ name: "Hair Elegance Salon" }],
  creator: "Hair Elegance Salon",
  publisher: "Hair Elegance Salon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.haireleganceutah.com'),
  alternates: {
    canonical: '/',
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
  openGraph: {
    title: "Hair Elegance Salon - Premium Hair & Beauty Services in South Jordan",
    description: "Hair Elegance: South Jordan's premier hair salon since 2008. Expert hair cuts, color, styling, nails & beauty services. Located at 11516 District Main Drive.",
    url: 'https://www.haireleganceutah.com',
    siteName: 'Hair Elegance Salon',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/salonimage.jpg',
        width: 1200,
        height: 630,
        alt: 'Hair Elegance Salon Interior - South Jordan Utah',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair Elegance Salon - Premium Hair & Beauty Services in South Jordan",
    description: "Hair Elegance: South Jordan's premier hair salon since 2008. Expert hair cuts, color, styling, nails & beauty services.",
    images: ['/images/salonimage.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Critical resource hints for faster loading */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Reduce unused CSS with media queries */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" media="all" />
        
        {/* Mobile-first critical resource loading */}
        <link rel="preload" href="/images/salonimage.jpg" as="image" type="image/jpeg" fetchPriority="high" imageSrcSet="/images/salonimage.jpg?w=640 640w, /images/salonimage.jpg?w=750 750w, /images/salonimage.jpg?w=828 828w" imageSizes="100vw" />
        
        {/* Defer non-critical images on mobile */}
        <link rel="prefetch" href="/images/reception-area.png" as="image" type="image/png" media="(min-width: 768px)" />
        <link rel="prefetch" href="/images/hair color.png" as="image" type="image/png" media="(min-width: 768px)" />
        <link rel="prefetch" href="/images/cuts and styling.png" as="image" type="image/png" media="(min-width: 768px)" />
        <link rel="prefetch" href="/images/nails.png" as="image" type="image/png" media="(min-width: 768px)" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to external domains - high priority for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        
        {/* JSON-LD Structured Data for Local Business SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              "name": "Hair Elegance",
              "description": "Premier hair salon in South Jordan, Utah offering expert hair cuts, color, styling, nails and beauty services since 2008.",
              "url": "https://www.haireleganceutah.com",
              "telephone": "+1-801-727-4247",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "11516 So. District Main Drive Ste 200",
                "addressLocality": "South Jordan",
                "addressRegion": "UT",
                "postalCode": "84095",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.5423001,
                "longitude": -111.98097229999999
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "$$",
              "image": [
                "https://www.haireleganceutah.com/images/salonimage.jpg",
                "https://www.haireleganceutah.com/images/reception-area.png"
              ],
              "sameAs": [
                "https://www.instagram.com/hairelegance.utah"
              ],
              "founder": {
                "@type": "Person",
                "name": "Hanh Truong"
              },
              "employee": [
                {
                  "@type": "Person",
                  "name": "Hanh Truong",
                  "jobTitle": "Owner/Stylist"
                },
                {
                  "@type": "Person", 
                  "name": "Haley Claybaugh",
                  "jobTitle": "Nail Technician"
                },
                {
                  "@type": "Person",
                  "name": "Emery Nelson", 
                  "jobTitle": "Stylist"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Hair & Beauty Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hair Cuts & Styling",
                      "description": "Professional hair cuts and styling services"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hair Color",
                      "description": "Expert hair coloring services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Nail Services",
                      "description": "Professional manicure and pedicure services"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50+"
              }
            })
          }}
        />
        
        {/* Mobile-optimized Service Worker - Longer delay on mobile */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                // Longer delay on mobile for better performance
                const isMobile = window.innerWidth <= 768;
                const delay = isMobile ? 3000 : 1000;
                
                setTimeout(function() {
                  if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.register('/sw.js')
                      .then(function(registration) {
                        if (!isMobile) console.log('SW registered: ', registration);
                      })
                      .catch(function(registrationError) {
                        if (!isMobile) console.log('SW registration failed: ', registrationError);
                      });
                  }
                }, delay);
              });
            `,
          }}
        />
      </head>
      <body className={`${playfairDisplay.variable} ${montserrat.variable} font-sans`}>
        <PerformanceMonitor />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-red text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
