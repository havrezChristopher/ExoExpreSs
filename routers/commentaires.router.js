// Import d'Express.js
const express = require('express');
// Création d'un routeur Express spécifique à "routerUser"
const routerCommentaires = express.Router();
// Import du contrôleur "usersController"
const commentairesController = require('../controllers/commentaires.controller');

// Route pour obtenir la liste de tous les utilisateurs
routerCommentaires.get("", commentairesController.getAllCommentaires);

// Route pour obtenir un utilisateur spécifique par son ID
routerCommentaires.get("/:id", commentairesController.getCommentaires);

// Route pour ajouter un nouvel utilisateur
routerCommentaires.post("", commentairesController.addCommentaires);

// Route pour mettre à jour un utilisateur par son ID
routerCommentaires.patch("/:id", commentairesController.updateCommentaires);

// Route pour supprimer un utilisateur par son ID
routerCommentaires.delete("/:id", commentairesController.deleteCommentaires);

// Export du routeur "routerUser"
module.exports = routerCommentaires;

//! Les commentaires expliquent le but de chaque route dans le routeur routerUser. 
//! Vous utilisez un contrôleur (usersController) pour gérer les actions associées à ces routes, 
//! telles que la récupération de la liste des utilisateurs, l'ajout d'un utilisateur, 
//! la mise à jour d'un utilisateur et la suppression d'un utilisateur. 
//! Vous devrez ajouter la logique appropriée dans le contrôleur (usersController) 
//! pour gérer ces actions spécifiques.