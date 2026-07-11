/*
 * Service Worker - SABER PRO
 * Permite usar la app sin conexión una vez visitada.
 * Estrategia: "cache-first con actualización en segundo plano" para los
 * archivos propios (mismo origen). Los recursos externos (CDNs, YouTube,
 * Firebase) NO se cachean para no servir datos desactualizados.
 *
 * Sube el número de versión (CACHE) cuando publiques cambios para forzar
 * que se descarguen los archivos nuevos.
 */
const CACHE = 'saberpro-v1';

self.addEventListener('install', (event) => {
  // Activa de inmediato la nueva versión sin esperar a cerrar pestañas.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  let url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }

  // Solo gestionamos recursos del mismo origen.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      // Devuelve la copia en caché al instante (si existe) y actualiza por detrás.
      return cached || network;
    })
  );
});
