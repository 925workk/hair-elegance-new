'use client';

import { useEffect } from 'react';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      parameters?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        page_title?: string;
        page_location?: string;
        custom_parameter?: string;
        description?: string;
        fatal?: boolean;
        name?: string;
      }
    ) => void;
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitals monitoring
    let lcpObserver: PerformanceObserver | undefined;
    let fidObserver: PerformanceObserver | undefined;
    let clsObserver: PerformanceObserver | undefined;
    let fcpObserver: PerformanceObserver | undefined;
    
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint)
      lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime);
          // Send to analytics
                     if (typeof window.gtag !== 'undefined') {
             window.gtag('event', 'web_vitals', {
               event_category: 'Web Vitals',
               event_label: 'LCP',
               value: Math.round(lastEntry.startTime),
             });
           }
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
                 entries.forEach((entry) => {
           const fidEntry = entry as PerformanceEntry & { processingStart?: number };
           if (fidEntry.processingStart && fidEntry.startTime) {
             console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
             if (typeof window.gtag !== 'undefined') {
               window.gtag('event', 'web_vitals', {
                 event_category: 'Web Vitals',
                 event_label: 'FID',
                 value: Math.round(fidEntry.processingStart - fidEntry.startTime),
               });
             }
           }
         });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
                 entries.forEach((entry) => {
           const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
           if (!clsEntry.hadRecentInput && clsEntry.value) {
             clsValue += clsEntry.value;
           }
         });
                 console.log('CLS:', clsValue);
         if (typeof window.gtag !== 'undefined') {
           window.gtag('event', 'web_vitals', {
             event_category: 'Web Vitals',
             event_label: 'CLS',
             value: Math.round(clsValue * 1000) / 1000,
           });
         }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FCP (First Contentful Paint)
      fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstEntry = entries[0];
        if (firstEntry) {
                   console.log('FCP:', firstEntry.startTime);
         if (typeof window.gtag !== 'undefined') {
           window.gtag('event', 'web_vitals', {
             event_category: 'Web Vitals',
             event_label: 'FCP',
             value: Math.round(firstEntry.startTime),
           });
         }
        }
      });
      fcpObserver.observe({ entryTypes: ['first-contentful-paint'] });

      // TTFB (Time to First Byte)
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
               console.log('TTFB:', ttfb);
       if (typeof window.gtag !== 'undefined') {
         window.gtag('event', 'web_vitals', {
           event_category: 'Web Vitals',
           event_label: 'TTFB',
           value: Math.round(ttfb),
         });
       }
      }
    }

    // SEO-friendly error tracking
         window.addEventListener('error', (event) => {
       console.error('JavaScript Error:', event.error);
       if (typeof window.gtag !== 'undefined') {
         window.gtag('event', 'exception', {
           description: event.error?.message || 'Unknown error',
           fatal: false,
         });
       }
     });

    // Track page visibility for better analytics
    let hidden = 'hidden';
    let visibilityChange = 'visibilitychange';
    
    if (typeof document.hidden !== 'undefined') {
      hidden = 'hidden';
      visibilityChange = 'visibilitychange';
    } else if (typeof (document as Document & { msHidden?: boolean }).msHidden !== 'undefined') {
      hidden = 'msHidden';
      visibilityChange = 'msvisibilitychange';
    } else if (typeof (document as Document & { webkitHidden?: boolean }).webkitHidden !== 'undefined') {
      hidden = 'webkitHidden';
      visibilityChange = 'webkitvisibilitychange';
    }

    const handleVisibilityChange = () => {
             if (document[hidden as keyof Document]) {
         // Page is hidden
         if (typeof window.gtag !== 'undefined') {
           window.gtag('event', 'page_view', {
             page_title: document.title,
             page_location: window.location.href,
             custom_parameter: 'page_hidden',
           });
         }
       } else {
         // Page is visible
         if (typeof window.gtag !== 'undefined') {
           window.gtag('event', 'page_view', {
             page_title: document.title,
             page_location: window.location.href,
             custom_parameter: 'page_visible',
           });
         }
       }
    };

    document.addEventListener(visibilityChange, handleVisibilityChange, false);

         // Track user engagement
     const startTime = Date.now();
     let maxScrollDepth = 0;

    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
      
      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage;
        
                 // Track significant scroll milestones
         if (maxScrollDepth >= 25 && maxScrollDepth < 50) {
           if (typeof window.gtag !== 'undefined') {
             window.gtag('event', 'scroll', {
               event_category: 'Engagement',
               event_label: '25%_scroll',
               value: maxScrollDepth,
             });
           }
         } else if (maxScrollDepth >= 50 && maxScrollDepth < 75) {
           if (typeof window.gtag !== 'undefined') {
             window.gtag('event', 'scroll', {
               event_category: 'Engagement',
               event_label: '50%_scroll',
               value: maxScrollDepth,
             });
           }
         } else if (maxScrollDepth >= 75) {
           if (typeof window.gtag !== 'undefined') {
             window.gtag('event', 'scroll', {
               event_category: 'Engagement',
               event_label: '75%_scroll',
               value: maxScrollDepth,
             });
           }
         }
      }
    };

    window.addEventListener('scroll', trackScrollDepth, { passive: true });

         // Track time on page
     const trackTimeOnPage = () => {
       const timeOnPage = Date.now() - startTime;
       if (typeof window.gtag !== 'undefined') {
         window.gtag('event', 'timing_complete', {
           name: 'page_load',
           value: timeOnPage,
         });
       }
     };

    window.addEventListener('beforeunload', trackTimeOnPage);

         // Track form interactions for SEO insights
     const forms = document.querySelectorAll('form');
     forms.forEach((form) => {
       form.addEventListener('submit', () => {
         if (typeof window.gtag !== 'undefined') {
           window.gtag('event', 'form_submit', {
             event_category: 'Engagement',
             event_label: 'contact_form',
           });
         }
       });
     });

     // Track phone number clicks
     const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
     phoneLinks.forEach((link) => {
       link.addEventListener('click', () => {
         if (typeof window.gtag !== 'undefined') {
           window.gtag('event', 'phone_click', {
             event_category: 'Engagement',
             event_label: 'phone_call',
           });
         }
       });
     });

     // Track social media clicks
     const socialLinks = document.querySelectorAll('a[href*="instagram"], a[href*="facebook"]');
     socialLinks.forEach((link) => {
       link.addEventListener('click', () => {
         const platform = link.getAttribute('href')?.includes('instagram') ? 'instagram' : 'facebook';
         if (typeof window.gtag !== 'undefined') {
           window.gtag('event', 'social_click', {
             event_category: 'Engagement',
             event_label: platform,
           });
         }
       });
     });

     // Cleanup function
     return () => {
       if (typeof lcpObserver !== 'undefined') lcpObserver.disconnect();
       if (typeof fidObserver !== 'undefined') fidObserver.disconnect();
       if (typeof clsObserver !== 'undefined') clsObserver.disconnect();
       if (typeof fcpObserver !== 'undefined') fcpObserver.disconnect();
       document.removeEventListener(visibilityChange, handleVisibilityChange);
       window.removeEventListener('scroll', trackScrollDepth);
       window.removeEventListener('beforeunload', trackTimeOnPage);
     };
  }, []);

  return null;
} 