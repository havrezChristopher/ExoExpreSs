// Import d'Express.js
const express = require('express');
// Création d'un routeur Express spécifique à "routerUser"
const routerUser = express.Router();
// Import du contrôleur "usersController"
const usersController = require('../controllers/users.controller');

// Route pour obtenir la liste de tous les utilisateurs
routerUser.get("", usersController.getAll);

// Route pour obtenir un utilisateur spécifique par son ID
routerUser.get("/:id", usersController.getOne);

// Route pour ajouter un nouvel utilisateur
routerUser.post("", usersController.addUser);

// Route pour mettre à jour un utilisateur par son ID
routerUser.patch("/:id", usersController.updateUser);

// Route pour supprimer un utilisateur par son ID
routerUser.delete("/:id", usersController.deleteUser);

// Export du routeur "routerUser"
module.exports = routerUser;

//! Les commentaires expliquent le but de chaque route dans le routeur routerUser. 
//! Vous utilisez un contrôleur (usersController) pour gérer les actions associées à ces routes, 
//! telles que la récupération de la liste des utilisateurs, l'ajout d'un utilisateur, 
//! la mise à jour d'un utilisateur et la suppression d'un utilisateur. 
//! Vous devrez ajouter la logique appropriée dans le contrôleur (usersController) 
//! pour gérer ces actions spécifiques.