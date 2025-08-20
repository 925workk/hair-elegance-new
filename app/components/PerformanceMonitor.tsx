'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Simple, non-intrusive performance monitoring
    if (typeof window === 'undefined') return;
    
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Monitor LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry && process.env.NODE_ENV === 'development') {
          console.log(`🎯 LCP: ${Math.round(lastEntry.startTime)}ms`);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor FCP (First Contentful Paint)  
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-contentful-paint' && process.env.NODE_ENV === 'development') {
            console.log(`🎨 FCP: ${Math.round(entry.startTime)}ms`);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });
      
      return () => {
        lcpObserver.disconnect();
        fcpObserver.disconnect();
      };
    }
  }, []);

  return null;
} 