const DEBUG = true
const log = function() {
  if (DEBUG) {
    console.log(...arguments);
  }
}
const staticAssets = [
  './assets/icon/favicon.png',
  // './assets/icons/icon-48x48.png',
  './assets/icons/icon-72x72.png',
  './assets/icons/icon-96x96.png',
  './assets/icons/icon-128x128.png',
  './assets/icons/icon-144x144.png',
  './assets/icons/icon-152x152.png',
  './assets/icons/icon-192x192.png',
  './assets/icons/icon-384x384.png',
  './assets/icons/icon-512x512.png',
  './assets/images/08cd5b9a281d1ba3639043768dde42ed6e65492f.png',
  './assets/images/41d9b56233db0866a5727457b46c4a6d7e12a9f1.png',
  './assets/images/3701177a738e377e36d784741d403b10d8b66e8a.png',
  './assets/images/app-banner.png',
  './assets/images/as-dos-casinos-banner.png',
  './assets/images/avatar.jpg',
  './assets/images/blue-background.png',
  './assets/images/c0ecc6992293a60bd5493e4aba5917e8f067948a.png',
  './assets/images/category-1.png',
  './assets/images/category-2.png',
  './assets/images/com-caneco-banner.png',
  './assets/images/dish-1.png',
  './assets/images/dish-2.png',
  './assets/images/f8dd653d142520d1deb7e37b985b8f0e539c1c24.png',
  './assets/images/f68b46ecf6904feeef0f79a28807b0b81805b6e9.png',
  './assets/images/facebook.png',
  './assets/images/google.png',
  './assets/images/images.jpg',
  './assets/images/recipe-background_original.png',
  './assets/images/recipe-background.png',
  './assets/images/U467ba48463b549f8a94e63ec1e76345dg.jpeg'
];


const preffix = 'flex-diet';
const version = '1.0.0';
const db = preffix + ':' + version + ':';

// ADD STUFF TO CACHE ON INSTALATION

self.addEventListener("install", function(event) {
  log('WORKER: install event in progress.');
  event.waitUntil(
    /* The caches built-in is a promise-based API that helps you cache responses,
       as well as finding and deleting them.
    */
    caches
    /* You can open a cache by name, and this method returns a promise. We use
       a versioned cache name here so that we can remove old cache entries in
       one fell swoop later, when phasing out an older service worker.
    */
    .open(db + 'fundamentals')
    .then(function(cache) {
      /* After the cache is opened, we can fill it with the offline fundamentals.
         The method below will add all resources we've indicated to the cache,
         after making HTTP requests for each of them.
      */
      return cache.addAll(staticAssets)
      /*
      return cache.addAll([
          '/assets/icon/favicon.png',
          '/assets/icons/icon-48x48.png',
          '/assets/icons/icon-72x72.png',
          '/assets/icons/icon-96x96.png',
          '/assets/icons/icon-128x128.png',
          '/assets/icons/icon-144x144.png',
          '/assets/icons/icon-152x152.png',
          '/assets/icons/icon-192x192.png',
          '/assets/icons/icon-384x284.png',
          '/assets/icons/icon-512x512.png',
          '/assets/images/08cd5b9a281d1ba3639043768dde42ed6e65492f.png',
          '/assets/images/41d9b56233db0866a5727457b46c4a6d7e12a9f1.png',
          '/assets/images/3701177a738e377e36d784741d403b10d8b66e8a.png',
          '/assets/images/app-banner.png',
          '/assets/images/as-dos-casinos-banner.png',
          '/assets/images/avatar.jpg',
          '/assets/images/blue-background.png',
          '/assets/images/c0ecc6992293a60bd5493e4aba5917e8f067948a.png',
          '/assets/images/category-1.png',
          '/assets/images/category-2.png',
          '/assets/images/com-caneco-banner.png',
          '/assets/images/dish-1.png',
          '/assets/images/dish-2.png',
          '/assets/images/f8dd653d142520d1deb7e37b985b8f0e539c1c24.png',
          '/assets/images/f68b46ecf6904feeef0f79a28807b0b81805b6e9.png',
          '/assets/images/facebook.png',
          '/assets/images/google.png',
          '/assets/images/images.png',
          '/assets/images/pihh.png',
          '/assets/images/recipe-background_original.png',
          '/assets/images/recipe-background.png',
          '/assets/images/U467ba48463b549f8a94e63ec1e76345dg.jpeg',
      ]);
      */
      return cache;
    })
    .then(function() {
      log('WORKER: install completed');
    })
    .catch(function(ex) {
      console.error(ex)
    })

  );
});

// CLEAR OLD CACHES

self.addEventListener("activate", function(event) {
  /* Just like with the install event, event.waitUntil blocks activate on a promise.
     Activation will fail unless the promise is fulfilled.
  */
  log('WORKER: activate event in progress.');

  event.waitUntil(
    caches
    /* This method returns a promise which will resolve to an array of available
       cache keys.
    */
    .keys()
    .then(function(keys) {
      // We return a promise that settles when all outdated caches are deleted.
      return Promise.all(
        keys
        .filter(function(key) {
          // Filter by keys that don't start with the latest version prefix.
          return !key.startsWith(db);
        })
        .map(function(key) {
          /* Return a promise that's fulfilled
             when each outdated cache is deleted.
          */
          return caches.delete(key);
        })
      );
    })
    .then(function() {
      log('WORKER: activate completed.');
    })
  );
});


// INTERSECT GET REQUESTS

self.addEventListener("fetch", function(event) {
  log(self.registration.scope);
  log('WORKER: fetch event in progress.');

  /* We should only cache GET requests, and deal with the rest of method in the
     client-side, by handling failed POST,PUT,PATCH,etc. requests.
  */
  // if (event.request.method !== 'GET' || event.request.url.indexOf('sockjs-node') > -1 || event.request.url.indexOf('.webmanifest') > -1 || event.request.url.indexOf('.js') > -1 || event.request.url.indexOf('.html') > -1 || event.request.url.indexOf('.css') > -1) {
  if (event.request.method !== 'GET' || event.request.url.indexOf('sockjs-node') > -1 || event.request.url.indexOf('.webmanifest') > -1 || event.request.url.indexOf('sw.js') > -1 || event.request.url.indexOf('.html') > -1) {
    /* If we don't block the event as shown below, then the request will go to
       the network as usual.
    */
    log('WORKER: fetch event ignored.', event.request.method, event.request.url);
    return;
  }
  /* Similar to event.waitUntil in that it blocks the fetch event on a promise.
     Fulfillment result will be used as the response, and rejection will end in a
     HTTP response indicating failure.
  */
  event.respondWith(
    caches
    /* This method returns a promise that resolves to a cache entry matching
       the request. Once the promise is settled, we can then provide a response
       to the fetch request.
    */
    .match(event.request)
    .then(function(cached) {
      log({
        cached
      })
      /* Even if the response is in our cache, we go to the network as well.
         This pattern is known for producing "eventually fresh" responses,
         where we return cached responses immediately, and meanwhile pull
         a network response and store that in the cache.
         Read more:
         https://ponyfoo.com/articles/progressive-networking-serviceworker
      */
      var networked = fetch(event.request)
        // We handle the network request with success and failure scenarios.
        .then(fetchedFromNetwork, unableToResolve)
        // We should catch errors on the fetchedFromNetwork handler as well.
        .catch(unableToResolve);

      /* We return the cached response immediately if there is one, and fall
         back to waiting on the network as usual.
      */
      log('WORKER: fetch event', cached ? '(cached)' : '(network)', event.request.url);
      return cached || networked;

      function fetchedFromNetwork(response) {
        /* We copy the response before replying to the network request.
           This is the response that will be stored on the ServiceWorker cache.
        */
        var cacheCopy = response.clone();

        log('WORKER: fetch response from network.', event.request.url);

        caches
          // We open a cache to store the response for this request.
          .open(db + 'pages')
          .then(function add(cache) {
            /* We store the response for this request. It'll later become
               available to caches.match(event.request) calls, when looking
               for cached responses.
            */
            cache.put(event.request, cacheCopy);
          })
          .then(function() {
            log('WORKER: fetch response stored in cache.', event.request.url);
          });

        // Return the response so that the promise is settled in fulfillment.
        return response;
      }

      /* When this method is called, it means we were unable to produce a response
         from either the cache or the network. This is our opportunity to produce
         a meaningful response even when all else fails. It's the last chance, so
         you probably want to display a "Service Unavailable" view or a generic
         error response.
      */
      function unableToResolve() {
        /* There's a couple of things we can do here.
           - Test the Accept header and then return one of the offlineFundamentals
             e.g: return caches.match('/some/cached/image.png')
           - You should also consider the origin. It's easier to decide what
             "unavailable" means for requests against your origins than for requests
             against a third party, such as an ad provider
           - Generate a Response programmaticaly, as shown below, and return that
        */

        log('WORKER: fetch request failed in both cache and network.');

        /* Here we're creating a response programmatically. The first parameter is the
           response body, and the second one defines the options for the response.
        */
        return new Response('<h1>Service Unavailable</h1>', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/html'
          })
        });
      }
    })
  );
});