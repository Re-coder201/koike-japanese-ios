const CACHE='koike-shell-v0.2.0';
const ASSETS=['./','./index.html','./style.css','./data.js','./core.js','./app.js','./manifest.webmanifest','./icon.svg','./icon-180.png','./icon-192.png','./icon-512.png','./articles.json','./example-library.js','./offline-reading.js'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('koike-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin)return;
 if(url.pathname.endsWith('/articles.json')){event.respondWith((async()=>{const cache=await caches.open(CACHE),key=new URL('./articles.json',self.registration.scope).href;try{const r=await fetch(event.request);if(r.ok)await cache.put(key,r.clone());if(r.ok)return r;throw Error();}catch{return await cache.match(key)||new Response('{"items":[]}',{headers:{'Content-Type':'application/json'}});}})());return;}
 event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).catch(()=>event.request.mode==='navigate'?caches.match('./index.html'):Response.error())));
});
