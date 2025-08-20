import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PerformanceMonitor from "./components/PerformanceMonitor";
import StructuredData from "./components/StructuredData";
import CriticalCSS from "./components/CriticalCSS";

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
  title: {
    default: "Hair Elegance Salon - Best Hair Salon in South Jordan, Utah | Haircuts, Color & Nails",
    template: "%s | Hair Elegance Salon - South Jordan, Utah"
  },
  description: "Premier hair salon in South Jordan, Utah offering expert haircuts, hair coloring, styling, and nail services. Book your appointment today at Hair Elegance - where beauty meets excellence since 2008.",
  keywords: [
    "hair salon South Jordan",
    "hair salon Utah",
    "haircuts South Jordan",
    "hair color South Jordan",
    "nail salon South Jordan",
    "hair styling South Jordan",
    "balayage South Jordan",
    "highlights South Jordan",
    "Brazilian blowout South Jordan",
    "manicure South Jordan",
    "pedicure South Jordan",
    "hair salon near me",
    "best hair salon South Jordan",
    "Hair Elegance",
    "hair salon District Main Drive"
  ],
  authors: [{ name: "Hair Elegance Salon" }],
  creator: "Hair Elegance Salon",
  publisher: "Hair Elegance Salon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://haireleganceutah.com'),
  alternates: {
    canonical: 'https://haireleganceutah.com',
  },
  openGraph: {
    title: "Hair Elegance Salon - Best Hair Salon in South Jordan, Utah",
    description: "Premier hair salon in South Jordan, Utah offering expert haircuts, hair coloring, styling, and nail services. Book your appointment today!",
    url: 'https://haireleganceutah.com',
    siteName: 'Hair Elegance Salon',
    images: [
      {
        url: '/images/salonimage.jpg',
        width: 1200,
        height: 630,
        alt: 'Hair Elegance Salon interior - South Jordan, Utah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Elegance Salon - Best Hair Salon in South Jordan, Utah',
    description: 'Premier hair salon in South Jordan, Utah offering expert haircuts, hair coloring, styling, and nail services.',
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
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'google-site-verification': 'your-verification-code',
    'geo.region': 'US-UT',
    'geo.placename': 'South Jordan',
    'geo.position': '40.5423001;-111.9809723',
    'ICBM': '40.5423001, -111.9809723',
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
        {/* Critical CSS - Inline for immediate rendering */}
        <CriticalCSS />
        
        {/* Preload critical resources - mobile optimized */}
        <link rel="preload" href="/images/salonimage.jpg" as="image" type="image/jpeg" fetchPriority="high" />
        
        {/* Conditional preload for larger screens only */}
        <link rel="preload" href="/images/reception-area.png" as="image" type="image/png" media="(min-width: 768px)" />
        <link rel="preload" href="/images/hair color.png" as="image" type="image/png" media="(min-width: 768px)" />
        <link rel="preload" href="/images/cuts and styling.png" as="image" type="image/png" media="(min-width: 768px)" />
        <link rel="preload" href="/images/nails.png" as="image" type="image/png" media="(min-width: 768px)" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//www.instagram.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for Local Business */}
        <StructuredData type="localBusiness" />
        
        {/* Deferred CSS Loading - Load non-critical styles after page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Load non-critical CSS after page load
              function loadDeferredCSS() {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '/globals.css';
                link.media = 'print';
                link.onload = function() {
                  this.media = 'all';
                };
                document.head.appendChild(link);
              }
              
              // Load CSS after page load or immediately if already loaded
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', loadDeferredCSS);
              } else {
                loadDeferredCSS();
              }
              
              // Service Worker Registration
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
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
