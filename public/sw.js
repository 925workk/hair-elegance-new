const CACHE_NAME = 'hair-elegance-mobile-v3';

// Mobile-optimized cache strategy - prioritize critical resources
const criticalResources = [
  '/',
  '/images/salonimage.jpg', // LCP image
];

const secondaryResources = [
  '/about',
  '/services', 
  '/contact',
  '/images/reception-area.png',
];

const desktopOnlyResources = [
  '/stylists',
  '/gallery',
  '/careers',
  '/images/hair color.png',
  '/images/cuts and styling.png',
  '/images/nails.png',
  '/images/stylist-1.png',
  '/images/stylist-2.png',
  '/images/stylist-3.png',
];

// Detect if mobile for selective caching
const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Always cache critical resources
        const promises = [cache.addAll(criticalResources)];
        
        // Add secondary resources with lower priority
        promises.push(cache.addAll(secondaryResources));
        
        // Only cache desktop resources if not on mobile
        if (!isMobileUA) {
          promises.push(cache.addAll(desktopOnlyResources));
        }
        
        return Promise.all(promises);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
}); 