const staticWeLimited = "WeLimited-v1"
const assets = [
  "/",
  "/index.html",
  "/Logo.png",
  "/manifest.json",
  "/serviceWorker.js",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticWeLimited).then(cache => {
      cache.addAll(assets)
    })
  )
});


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })