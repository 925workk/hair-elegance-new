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

    // Keep it simple - avoid requestIdleCallback complexity
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);

  // Don't render anything until we know the screen size
  if (!isLoaded) {
    return null;
  }

  // On mobile, show fallback or nothing
  if (isMobile) {
    return mobileFallback ? <>{mobileFallback}</> : null;
  }

  // On desktop, show full content
  return <>{children}</>;
} 