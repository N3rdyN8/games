const CACHE = "action-poker-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./spades-svgrepo-com.svg"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
