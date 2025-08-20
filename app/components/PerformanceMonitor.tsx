'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Simple performance monitoring - don't overcomplicate
    const delay = 2000; // Simple 2s delay for all devices
    
    const timer = setTimeout(() => {
      if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') return;
      
      // Only run in development
      if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') return;
      
      // Monitor Core Web Vitals only in development
      if ('PerformanceObserver' in window) {
        try {
          // Monitor LCP (Largest Contentful Paint)
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              console.log(`🎯 LCP: ${Math.round(lastEntry.startTime)}ms`);
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Monitor FCP (First Contentful Paint)  
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.entryType === 'first-contentful-paint') {
                console.log(`🎨 FCP: ${Math.round(entry.startTime)}ms`);
              }
            });
          });
          fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });
          
          // Cleanup after 10 seconds to free memory
          setTimeout(() => {
            lcpObserver.disconnect();
            fcpObserver.disconnect();
          }, 10000);
        } catch {
          // Silently fail if Performance Observer not supported
        }
      }
    }, delay); // Variable delay based on device type
    
    return () => clearTimeout(timer);
  }, []);

  return null;
} 