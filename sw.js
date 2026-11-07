// Present only so Chrome on Android treats the launcher as installable; it caches nothing and passes every request through.
self.addEventListener('fetch', function () {});
