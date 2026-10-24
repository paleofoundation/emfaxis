/* Only the public offline notice is cached. Research, notes, API and sign-in
   responses always use the network and are never written to Cache Storage. */
const CACHE = 'emf-axis-offline-v1';
const FALLBACK = '/offline.html';
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll([FALLBACK, '/offline-retry.js'])));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys
    .filter(key => key.startsWith('emf-axis-offline-') && key !== CACHE)
    .map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const {request} = event;
  const url = new URL(request.url);
  if(request.method !== 'GET' || url.origin !== self.location.origin) return;
  if(url.pathname === '/offline-retry.js') {
    event.respondWith(caches.open(CACHE).then(cache => cache.match('/offline-retry.js')).then(cached => cached || fetch(request)));
    return;
  }
  if(request.mode !== 'navigate' || /^\/(api(?:\/|$)|login(?:\/|$)|signin|signout|auth|callback|\.well-known)/.test(url.pathname)) return;
  event.respondWith(fetch(request).catch(async () => {
    const cache = await caches.open(CACHE);
    return await cache.match(FALLBACK) || new Response('You are offline. Reconnect and try again.', {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
  }));
});
