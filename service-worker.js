// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var CACHE_NAME = "v1";
var urlsToCache = [
  "./",
  "./index.html",
  "./js/actions.js",
  "./js/main.js",
  "./css/style.css", 
  "./img/48.png",
  "./img/72.png",
  "./img/128.png",
  "./img/144.png",
  "./img/168.png",
  
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('activate', function(event){

  console.log("[ServiceWorker] Activate");
  event.waitUntil(

      caches.keys().then(function(CACHE_NAME){
            return Promise.all(CACHE_NAME.map(function(thisCACHE_NAME){
                if (thisCACHE_NAME !== CACHE_NAME ){
                  console.log("[ServiceWorker] removing files from cache", thisCACHE_NAME);
                  return caches.delete(thisCACHE_NAME);
                }
            }))
      })

    );

});

self.addEventListener('fetch', function(event){

    console.log("[ServiceWorker] fetch");

    event.respondWith(

        caches.match(event.request).then(function(response){

            if(response){
              console.log("[ServiceWorker] Found in cache", event.request.url);
              return response;
            }

            var requestClone = event.request.clone();

            fetch(requestClone).then(function(response){
                if(!response){
                  console.log("[ServiceWorker] No response from ServiceWorker");
                  return response;
                }

                var responseClone = response.clone();

                caches.open(CACHE_NAME).then(function(cache){

                    cache.put(event.request,responseClone);
                    return responseClone;
                });
            
            })
            .catch(function(err){
              console.log("Error")
            })

        })
      )

});

