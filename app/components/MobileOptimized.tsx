'use client';

import { useEffect, useState } from 'react';

interface MobileOptimizedProps {
  children: React.ReactNode;
  mobileFallback?: React.ReactNode;
  breakpoint?: number;
}

export default function MobileOptimized({ 
  children, 
  mobileFallback, 
  breakpoint = 768 
}: MobileOptimizedProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
      setIsLoaded(true);
    };

    // Use requestIdleCallback for better performance on mobile
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(checkScreenSize, { timeout: 100 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(checkScreenSize, 0);
    }
    
    const debouncedResize = () => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          setIsMobile(window.innerWidth < breakpoint);
        }, { timeout: 100 });
      } else {
        setTimeout(() => {
          setIsMobile(window.innerWidth < breakpoint);
        }, 100);
      }
    };
    
    window.addEventListener('resize', debouncedResize, { passive: true });
    
    return () => window.removeEventListener('resize', debouncedResize);
  }, [breakpoint]);

  // Show skeleton/loading state on mobile for better perceived performance
  if (!isLoaded) {
    return (
      <div className="animate-pulse bg-gray-200 h-32 rounded-lg" 
           style={{ display: 'none' }} // Hidden by default to prevent flash
      />
    );
  }

  // On mobile, show fallback or nothing
  if (isMobile) {
    return mobileFallback ? <>{mobileFallback}</> : null;
  }

  // On desktop, show full content
  return <>{children}</>;
} 