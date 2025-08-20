'use client';

export default function CriticalCSS() {
  return (
            <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for above-the-fold content - Inline to prevent render blocking */
              :root {
                --font-playfair-display: 'Playfair Display', serif;
                --font-montserrat: 'Montserrat', sans-serif;
              }
          
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            padding: 0;
            font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #fafafa;
          }
          
          /* Critical hero section styles */
          .hero-section {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          
          .hero-bg {
            position: absolute;
            inset: 0;
            object-fit: cover;
            scale: 1.05;
          }
          
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.5), transparent);
          }
          
          .hero-overlay-bottom {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.6), transparent, transparent);
          }
          
          .hero-content {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 0 1rem;
            max-width: 80rem;
            margin: 0 auto;
          }
          
          .hero-title {
            font-family: var(--font-playfair-display), serif;
            font-weight: 700;
            font-size: 3rem;
            color: white;
            line-height: 1.1;
            margin: 0;
          }
          
          .hero-title span {
            display: block;
          }
          
          .hero-title .text-soft-cream {
            color: #f5f5dc;
          }
          
          .hero-divider {
            width: 6rem;
            height: 0.25rem;
            background-color: #b71c1c;
            margin: 2rem auto;
          }
          
          .hero-subtitle {
            font-family: var(--font-montserrat), sans-serif;
            color: #e5e5e5;
            max-width: 48rem;
            margin: 0 auto;
            line-height: 1.6;
          }
          
          .hero-description {
            font-family: var(--font-montserrat), sans-serif;
            color: #d1d5db;
            max-width: 42rem;
            margin: 0 auto;
            line-height: 1.6;
          }
          
          .hero-buttons {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;
            align-items: center;
            padding-top: 2rem;
          }
          
          .btn-primary {
            display: inline-flex;
            align-items: center;
            padding: 1rem 2.5rem;
            background-color: #b71c1c;
            color: white;
            font-family: var(--font-montserrat), sans-serif;
            font-weight: 600;
            font-size: 1.125rem;
            border-radius: 9999px;
            text-decoration: none;
            transition: background-color 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          
          .btn-primary:hover {
            background-color: #991b1b;
            transform: scale(1.05);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .btn-secondary {
            display: inline-flex;
            align-items: center;
            padding: 1rem 2.5rem;
            background-color: transparent;
            border: 2px solid white;
            color: white;
            font-family: var(--font-montserrat), sans-serif;
            font-weight: 600;
            font-size: 1.125rem;
            border-radius: 9999px;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          
          .btn-secondary:hover {
            background-color: white;
            color: #b71c1c;
            transform: scale(1.05);
          }
          
          /* Critical layout styles */
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          
          .bg-off-white {
            background-color: #fafafa;
          }
          
          .bg-white {
            background-color: white;
          }
          
          .bg-soft-cream {
            background-color: #f5f5dc;
          }
          
          .bg-primary-red {
            background-color: #b71c1c;
          }
          
          .text-white {
            color: white;
          }
          
          .text-dark-gray {
            color: #1f2937;
          }
          
          .text-text-color {
            color: #4b5563;
          }
          
          .text-primary-red {
            color: #b71c1c;
          }
          
          /* Critical responsive styles */
          @media (min-width: 640px) {
            .hero-buttons {
              flex-direction: row;
            }
            
            .hero-title {
              font-size: 3.75rem !important;
            }
            
            .hero-subtitle {
              font-size: 1.5rem;
            }
            
            .hero-description {
              font-size: 1.125rem;
            }
          }
          
          @media (min-width: 768px) {
            .hero-content {
              padding: 0 1.5rem;
            }
            
            .hero-title {
              font-size: 4.5rem !important;
            }
          }
          
          @media (min-width: 1024px) {
            .hero-title {
              font-size: 5.25rem !important;
            }
            
            .hero-subtitle {
              font-size: 1.875rem;
            }
          }
          
          @media (min-width: 1280px) {
            .hero-title {
              font-size: 6rem !important;
            }
          }
          
          /* Critical accessibility styles */
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
          
          .sr-only:focus {
            position: static;
            width: auto;
            height: auto;
            padding: 0.5rem 1rem;
            margin: 0;
            overflow: visible;
            clip: auto;
            white-space: normal;
            background-color: #b71c1c;
            color: white;
            border-radius: 0.25rem;
            z-index: 50;
          }
        `
      }}
    />
  );
}
