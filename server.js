// Import des bibliothèques nécessaires
require("dotenv").config(); // Gestion des variables d'environnement
const testDb = require("./models/db"); // Import du module de test de la base de données
const express = require("express"); // Import d'Express.js
const app = express(); // Création de l'application Express
const bodyParser = require("body-parser"); // Middleware pour traiter les données de formulaire

// Gestion de la base de données : Test de la connexion
testDb.testDbConnection();


// Configuration des middlewares d'entrées

// Configuration du moteur de vue EJS
app.set("view engine", "ejs");
app.set("views", "./views");

//Utilisation de middleware pour gérer les données JSON dans les requêtes entrantes
app.use(express.json());

// Utilisation de bodyParser pour analyser les données de formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Routage

// Import du routeur principal
const routerBase = require("./routers/base.router");

// Utilisation du routeur principal pour gérer les chemins de base
app.use("", routerBase);

// Gestion des erreurs 404
app.all("*", (req, res) => {
    res.status(404).send("Not Found");
});

// Gestion des erreurs globales
app.use((error, req, res, next) => {
    console.log("Error URL : ", req.url);
    console.log("Error Message : ", error.message);
    res.status(500); // Réponse avec un code de statut 500 pour une erreur interne du serveur
    res.send("Internal Server Error"); // Réponse indiquant une erreur interne du serveur
});

// Démarrage du serveur en écoutant sur le port spécifié dans les variables d'environnement

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

//? Configuration du Serveur :

// Il importe les bibliothèques nécessaires

// dotenv pour la gestion des variables d'environnement, 
// testDb pour tester la connexion à la base de données, 
// express pour la création du serveur web, 
// body-parser pour traiter les données entrantes.

//? Gestion de la Base de Données :

// Il appelle la fonction testDbConnection pour tester la connexion à la base de données.

//? Middlewares d'Entrées :

// Il configure des middlewares pour le traitement des entrées et des vues.
// Il utilise le moteur de modèle EJS ("view engine") pour rendre les vues et définit le dossier des vues.
// Il utilise express.json() pour gérer les données JSON dans les requêtes entrantes.
// Il utilise bodyParser.urlencoded({extended: true}) pour analyser les données de formulaire provenant des requêtes.

//? Routage :

// Il importe le routeur principal appelé routerBase depuis le fichier de routage base.router.js.
// Il utilise ce routeur principal avec app.use pour gérer les chemins de base.
// Gestion des Erreurs 404 :

// Si aucune route correspondante n'est trouvée, il renvoie une réponse "Not Found" avec un code de statut 404.

//? Gestion des Erreurs Globales :

// Il définit un middleware pour gérer les erreurs globales. Si une erreur se produit 
// à n'importe quel endroit de l'application, elle est gérée ici.
// Il affiche l'URL et le message d'erreur dans la console.
// Il renvoie une réponse "Internal Server Error" avec un code de statut 500 pour indiquer une erreur interne du serveur.

//? Démarrage du Serveur :

// Il écoute sur le port spécifié dans les variables d'environnement (process.env.PORT) 
// et affiche un message indiquant que le serveur fonctionne.
// Ce code configure un serveur Express.js, gère les routes, traite les erreurs, 
// et écoute les demandes entrantes sur un port spécifié. 
// Il est prêt à être étendu avec des routes et des fonctionnalités supplémentaires pour votre application web. 