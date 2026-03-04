/* =====================================================
   CoolButtons Service Worker (Optimized + Safe)
   ===================================================== */

const CACHE_NAME = 'coolbuttons-v2';
const OFFLINE_PAGE = '/offline';

// Only cache your own critical pages
const STATIC_ASSETS = [
  '/',
  '/index.html',
  OFFLINE_PAGE
];

/* ================= INSTALL ================= */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );

  self.skipWaiting();
});


/* ================= ACTIVATE ================= */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});


/* ================= FETCH ================= */
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GET
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  /* =====================================================
     🚨 MOST IMPORTANT FIX
     Skip ALL third-party domains
     (Google Tag Manager, Analytics, fonts, cdn, esm, etc)
     ===================================================== */
  if (url.origin !== self.location.origin) {
    return;
  }

  /* =================
     HTML Navigation
     Network-first
     ================= */
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          return res;
        })
        .catch(async () => {
          return (
            (await caches.match(req)) ||
            (await caches.match(OFFLINE_PAGE))
          );
        })
    );
    return;
  }

  /* =================
     Static Assets
     Cache-first
     ================= */
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;

      return fetch(req).then((res) => {
        if (!res || res.status !== 200) return res;

        const copy = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        return res;
      });
    })
  );
});


/* ================= MESSAGES ================= */
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
