// Service Worker básico para suporte a PWA
const CACHE_NAME = 'altar-v1';

self.addEventListener('install', (e) => {
    console.log('SW instalado');
});

self.addEventListener('fetch', (e) => {
    // Estratégia básica de rede
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});