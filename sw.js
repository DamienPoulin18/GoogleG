self.addEventListener('fetch', (event) => {
    // Permet de valider les critères de Chrome pour afficher le bouton "Installer"
    event.respondWith(
        fetch(event.request).catch(() => new Response("Mode hors-ligne disponible"))
    );
});
