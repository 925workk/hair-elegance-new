'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    // Check if mobile for performance optimization
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add slight delay on mobile to reduce blocking
          if (isMobile) {
            setTimeout(() => setIsVisible(true), 50);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: isMobile ? 0.05 : 0.1, // Lower threshold on mobile
        rootMargin: isMobile ? '20px' : '50px', // Smaller margin on mobile
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all ${
        typeof window !== 'undefined' && window.innerWidth <= 768 
          ? 'duration-500' // Faster animations on mobile
          : 'duration-700'
      } ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
} 