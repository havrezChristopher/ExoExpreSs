// Import du modèle de données des utilisateurs
const commentairesModel = require("../models/commentaires.models");
 
// Définition du contrôleur des utilisateurs
const commentairesController = {

    // Méthode pour obtenir la liste de tous les utilisateurs
    getAllCommentaires: async (req, res) => {
        // Utilisation de la méthode asynchrone "getAll" du modèle pour obtenir tous les utilisateurs
        let allcommentaires = await commentairesModel.getAllCommentaires();
        // Rendu de la page "getAll.ejs" en passant la liste des utilisateurs comme données
        res.render("index.ejs", { page: "pages/commentaires/getAllCommentaires.ejs", allcommentaires: allcommentaires });
        
    },

    // Méthode pour obtenir un utilisateur spécifique par son ID
    getCommentaires: async (req, res) => {
        // TODO: Ajoutez la logique pour obtenir un utilisateur spécifique par son ID ici

    },

    // Méthode pour ajouter un nouvel utilisateur
    addCommentaires: (req, res) => {
        // TODO: Ajoutez la logique pour ajouter un nouvel utilisateur ici
    },

    // Méthode pour mettre à jour un utilisateur par son ID
    updateCommentaires: (req, res) => {
        // TODO: Ajoutez la logique pour mettre à jour un utilisateur par son ID ici
    },

    // Méthode pour supprimer un utilisateur par son ID
    deleteCommentaires: (req, res) => {
        // TODO: Ajoutez la logique pour supprimer un utilisateur par son ID ici
    }
};

// Exportation du contrôleur des utilisateurs
module.exports = commentairesController;

//! Ce contrôleur usersController contient des méthodes correspondant aux actions sur les utilisateurs, 
//! telles que l'obtention de la liste des utilisateurs (getAll), 
//! l'obtention d'un utilisateur spécifique par son ID (getOne), 
//! l'ajout d'un nouvel utilisateur (addUser), la mise à jour d'un utilisateur (updateUser) 
//! et la suppression d'un utilisateur (deleteUser).! 
//! Vous devrez ajouter la logique spécifique à chaque méthode pour qu'elle corresponde 
//! aux besoins de votre application, en interagissant avec votre modèle de données (usersModel) 
//! pour effectuer les opérations appropriées sur les utilisateurs.