/* var dataCacheName = 'catalog-v1';
var cacheName = 'catalogPWA-final-1';
var filesToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/vendor/jquery.min.js',
  './js/vendor/materialize.min.js',
  './js/distance.js',
  './js/main.js',
  './js/script.js',
  './partials/hospitais.html',
  './partials/saude.html',
  './partials/servicos.html',
  './partials/serviceContent.html',
  './icons/MaterialIcons-Regular.ttf',
  './img/48.png',
  './img/72.png',
  './img/128.png',
  './img/144.png',
  './img/168.png',
  './img/192.png',
  './img/512.png',
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
  
  self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== cacheName && key !== dataCacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
      );
      return self.clients.claim();
    });
    
    self.addEventListener('fetch', function(e) {
      //console.log('[Service Worker] Fetch', e.request.url);
      var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
      if (e.request.url.indexOf(dataUrl) > -1) {
        e.respondWith(
          caches.open(dataCacheName).then(async function(cache) {
            const response = await fetch(e.request);
            cache.put(e.request.url, response.clone());
            return response;
          })
          );
        } else {
          e.respondWith(
            caches.match(e.request).then(function(response) {
              return response || fetch(e.request);
            })
            );
          }
        });
         */