// use a cacheName for cache versioning
var cacheName = 'v1.0.1';

// during the install phase you usually want to cache static assets
self.addEventListener('install', function(e) {
  // once the SW is installed, go ahead and fetch the resources to make this work offline
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        './',
        './assets/built/style.css',
        './assets/js/goldsguide.js',
				'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,100..900,0..100,0..1&family=Fraunces:ital,opsz,wght,SOFT,WONK@1,9..144,100..900,0..100,0..1&display=swap'
      ]).then(function() {
        self.skipWaiting();
      });
    })
  );
});

// when the browser fetches a url
self.addEventListener('fetch', function(event) {
  // either respond with the cached object or go ahead and fetch the actual url
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        // retrieve from cache
        return response;
      }
      // fetch as normal
      return fetch(event.request);
    })
  );
});