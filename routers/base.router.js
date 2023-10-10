// Import d'Express.js
const express = require('express');
// Création d'un routeur Express
const router = express.Router();

// Import des différents routeurs
const routerAcceuil = require("./acceuil.router");
const routerCommentaires = require("./commentaires.router");    // Routeur pour les utilisateurs
const routerMenu = require("./menu.router");
const routerContact = require("./contact.router");
// const routerPageInfo = require("./pageInfo.router");



// Utilisation des routeurs importés avec des préfixes de route
router.use("/acceuil", routerAcceuil);
router.use("/commentaires", routerCommentaires);         // Toutes les routes sous /commentaires sont gérées par routerUser
router.use("/menu", routerMenu);
router.use("/contact", routerContact);
// router.use("/pageInfo", routerPageInfo );


// Export du routeur principal
module.exports = router;

//! Ce code crée un routeur principal qui utilise d'autres routeurs modulaires 
//! (routerUser, routerOther, routerMessage, routerAuth) 
//! pour gérer différentes parties de votre application. 
//! Les commentaires expliquent comment chaque routeur est utilisé pour gérer des préfixes de route spécifiques.

//! En utilisant cette structure modulaire, vous pouvez organiser votre application Express.js de manière plus propre et maintenable, en divisant les fonctionnalités en modules distincts.Chaque routeur peut gérer ses propres routes et logique de traitement.


