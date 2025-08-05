const CACHE_NAME = 'hair-elegance-v1';
const urlsToCache = [
  '/',
  '/images/salonimage.jpg',
  '/images/reception-area.png',
  '/images/hair color.png',
  '/images/cuts and styling.png',
  '/images/nails.png',
  '/images/stylist-1.png',
  '/images/stylist-2.png',
  '/images/stylist-3.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
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
    })
  );
}); 