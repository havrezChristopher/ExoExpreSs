const express = require('express');
// Création d'un routeur Express spécifique à "routerUser"
const routerContact = express.Router();
// Import du contrôleur "usersController"
const contactController = require('../controllers/contact.controller');


routerContact.get("", contactController.AllContact);

module.exports = routerContact;