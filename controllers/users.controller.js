// Import du modèle de données des utilisateurs
const usersModel = require("../models/users.models");
 
// Définition du contrôleur des utilisateurs
const usersController = {

    // Méthode pour obtenir la liste de tous les utilisateurs
    getAll: async (req, res) => {
        // Utilisation de la méthode asynchrone "getAll" du modèle pour obtenir tous les utilisateurs
        let allUsers = await usersModel.getAll();
//! ****************************Teste pour afficher les utilisateur************************************************************ 
console.log("Liste des utilisateurs :",allUsers);
// allUsers.forEach(user => {
//     console.log(`ID: ${user.ID}, Nom: ${user.Nom}, Prenom: ${user.Prenom}`);
// });
//! ****************************Teste pour afficher les utilisateur************************************************************ 
        // Rendu de la page "getAll.ejs" en passant la liste des utilisateurs comme données
        res.render("index.ejs", { page: "pages/users/getAll.ejs", allUsers: allUsers });
        
    },

    // Méthode pour obtenir un utilisateur spécifique par son ID
    getOne: (req, res) => {
        // TODO: Ajoutez la logique pour obtenir un utilisateur spécifique par son ID ici
    },

    // Méthode pour ajouter un nouvel utilisateur
    addUser: (req, res) => {
        // TODO: Ajoutez la logique pour ajouter un nouvel utilisateur ici
    },

    // Méthode pour mettre à jour un utilisateur par son ID
    updateUser: (req, res) => {
        // TODO: Ajoutez la logique pour mettre à jour un utilisateur par son ID ici
    },

    // Méthode pour supprimer un utilisateur par son ID
    deleteUser: (req, res) => {
        // TODO: Ajoutez la logique pour supprimer un utilisateur par son ID ici
    }
};

// Exportation du contrôleur des utilisateurs
module.exports = usersController;

//! Ce contrôleur usersController contient des méthodes correspondant aux actions sur les utilisateurs, 
//! telles que l'obtention de la liste des utilisateurs (getAll), 
//! l'obtention d'un utilisateur spécifique par son ID (getOne), 
//! l'ajout d'un nouvel utilisateur (addUser), la mise à jour d'un utilisateur (updateUser) 
//! et la suppression d'un utilisateur (deleteUser).! 
//! Vous devrez ajouter la logique spécifique à chaque méthode pour qu'elle corresponde 
//! aux besoins de votre application, en interagissant avec votre modèle de données (usersModel) 
//! pour effectuer les opérations appropriées sur les utilisateurs.