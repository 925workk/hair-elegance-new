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
  title: "Hair Elegance - Where Beauty Meets Excellence",
  description: "A South Jordan Favorite Since 2008.",
  other: {
    'google-site-verification': 'your-verification-code',
  },
  openGraph: {
    title: "Hair Elegance - Where Beauty Meets Excellence",
    description: "A South Jordan Favorite Since 2008.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair Elegance - Where Beauty Meets Excellence",
    description: "A South Jordan Favorite Since 2008.",
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
        {/* Preload critical resources */}
        <link rel="preload" href="/images/salonimage.jpg" as="image" type="image/jpeg" fetchPriority="high" />
        <link rel="preload" href="/images/reception-area.png" as="image" type="image/png" />
        <link rel="preload" href="/images/hair color.png" as="image" type="image/png" />
        <link rel="preload" href="/images/cuts and styling.png" as="image" type="image/png" />
        <link rel="preload" href="/images/nails.png" as="image" type="image/png" />
        
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
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
