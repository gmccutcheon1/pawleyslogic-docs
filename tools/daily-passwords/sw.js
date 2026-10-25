"use strict";
// Only the application shell is precached; users download only their group's
// encrypted dataset after a successful passphrase unlock.
const STATIC_CACHE="pawleys-shell-v2";
const STATIC_FILES=["./","./index.html","./styles.css","./app.js","./config.js","./manifest.webmanifest","./icons/app.svg","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(STATIC_CACHE).then(cache=>cache.addAll(STATIC_FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith("pawleys-shell-")&&k!==STATIC_CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  const app=new URL(self.registration.scope);
  const path=url.pathname.slice(app.pathname.length);
  const isShell=url.pathname===app.pathname || ["index.html","styles.css","app.js","config.js","manifest.webmanifest","icons/app.svg","icons/icon-192.png","icons/icon-512.png"].includes(path);
  if(!isShell) return; // encrypted data is explicitly controlled by app.js
  event.respondWith((async()=>{
    try {
      const response=await fetch(event.request);
      if(response.ok) {
        const cache=await caches.open(STATIC_CACHE);
        await cache.put(event.request,response.clone());
      }
      return response;
    } catch {
      const fallback=await caches.match(event.request,{ignoreSearch:true});
      return fallback || Response.error();
    }
  })());
});
