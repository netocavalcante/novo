var cacheName = 'services-catalog-1.0.2';
var filesToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/vendor/jquery.min.js',
  '/js/vendor/materialize.min.js',
  '/js/distance.js',
  '/js/main.js',
  '/js/script.js',
  '/partials/emergencia.html',
  '/partials/saude.html',
  '/partials/servicos.html',
  '/partials/urgencia.html',
  '/partials/serviceContent.html',
  '/icons/MaterialIcons-Regular.ttf',
  '/img/48.png',
  '/img/72.png',
  '/img/128.png',
  '/img/144.png',
  '/img/168.png',
  '/img/192.png',
  '/img/512.png',
  ];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
    );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});