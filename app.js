// Ligne 1 : Configuration et initialisation d'Ably
const realtime = new Ably.Realtime({
    key: 'VOTRE_CLE_API_ABLY', // <-- Mettez votre vraie clé ici
    transports: ['xhr_polling'] // Pour contourner le Wi-Fi de l'école
});

// Ligne 7 : Le reste de votre code (bouton Entrée, canaux, etc.)
const channel = realtime.channels.get('annonces-globales');

// Vérification dans la console
realtime.connection.on('connected', () => {
    console.log("Connexion réussie à Ably depuis le Chromebook !");
});
