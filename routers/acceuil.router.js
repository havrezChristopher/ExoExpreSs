// Import d'Express.js
const express = require('express');
// Création d'un routeur Express spécifique à "routerUser"
const routerAccueil = express.Router();
// Import du contrôleur "usersController"
const accueilController = require('../controllers/accueil.controller');

// Route pour obtenir la liste de tous les utilisateurs
routerAccueil.get("", accueilController.getAccueil);

// Export du routeur "routerUser"
module.exports = routerAccueil;

//! Les commentaires expliquent le but de chaque route dans le routeur routerUser. 
//! Vous utilisez un contrôleur (usersController) pour gérer les actions associées à ces routes, 
//! telles que la récupération de la liste des utilisateurs, l'ajout d'un utilisateur, 
//! la mise à jour d'un utilisateur et la suppression d'un utilisateur. 
//! Vous devrez ajouter la logique appropriée dans le contrôleur (usersController) 
//! pour gérer ces actions spécifiques.