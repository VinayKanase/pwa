console.log("OK");
self.addEventListener("install", e => {
    e.waitUntil(
        chaches.open("static").then(chache => chache.addAll("./", "./app.css", "./assets/192.png"))
    );
});

self.addEventListener("fetch", e =>{
    e.responseWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    )
    console.log(`Fecting from ${e.request.url}`);
})