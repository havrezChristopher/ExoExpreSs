// // Import d'Express.js
// const express = require('express');
// // Création d'un routeur Express
// const router = express.Router();

// // Import des différents routeurs
// const routerUser = require("./users.router");    // Routeur pour les utilisateurs
// const routerOther = require("./other.router");    // Routeur pour d'autres fonctionnalités
// const routerMessage = require("./message.router"); // Routeur pour les messages
// const routerAuth = require("./auth.router");       // Routeur pour l'authentification

// // Utilisation des routeurs importés avec des préfixes de route
// router.use("/users", routerUser);         // Toutes les routes sous /users sont gérées par routerUser
// router.use("/messages", routerMessage);   // Toutes les routes sous /messages sont gérées par routerMessage
// router.use("/auth", routerAuth);         // Toutes les routes sous /auth sont gérées par routerAuth
// router.use("/", routerOther);           // Toutes les autres routes sont gérées par routerOther

// // Export du routeur principal
// module.exports = router;

// //! Ce code crée un routeur principal qui utilise d'autres routeurs modulaires 
// //! (routerUser, routerOther, routerMessage, routerAuth) 
// //! pour gérer différentes parties de votre application. 
// //! Les commentaires expliquent comment chaque routeur est utilisé pour gérer des préfixes de route spécifiques.

// //! En utilisant cette structure modulaire, vous pouvez organiser votre application Express.js de manière plus propre et maintenable, en divisant les fonctionnalités en modules distincts.Chaque routeur peut gérer ses propres routes et logique de traitement.


