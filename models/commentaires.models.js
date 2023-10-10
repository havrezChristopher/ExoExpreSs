// Import du module de connexion à la base de données
const dbConnection = require('./db');
// Import de la bibliothèque mssql pour les requêtes SQL
const mssql = require('mssql');

// Définition du modèle pour les opérations sur les utilisateurs
const commentairesModel = {
    // Méthode pour obtenir la liste de tous les utilisateurs
    getAllCommentaires: async () => {
        
        const db = await dbConnection.getDbConnection(); // Obtention de la connexion à la base de données
        let result = await db.query('SELECT * FROM Commentaires '); // Exécution de la requête SQL pour obtenir tous les utilisateurs
        db.close(); // Fermeture de la connexion à la base de données
        return result.recordset; // Renvoie le résultat de la requête sous forme de tableau d'utilisateurs
    },

    // Méthode pour obtenir un utilisateur spécifique (à implémenter)
    getCommentaires: async () => {
        const db = await dbConnection.getDbConnection(); // Obtention de la connexion à la base de données
        // TODO: Ajoutez la logique pour obtenir un utilisateur spécifique par son ID ici
      
    },

    // Méthode pour ajouter un nouvel utilisateur (à implémenter)
    addCommentaires: async () => {
        const db = await dbConnection.getDbConnection(); // Obtention de la connexion à la base de données
        // TODO: Ajoutez la logique pour ajouter un nouvel utilisateur ici
    
    },

    // Méthode pour mettre à jour un utilisateur existant (à implémenter)
    updateCommentaires: async () => {
        const db = await dbConnection.getDbConnection(); // Obtention de la connexion à la base de données
        // TODO: Ajoutez la logique pour mettre à jour un utilisateur ici
    },

    // Méthode pour supprimer un utilisateur existant (à implémenter)
    deleteCommentaires: async () => {
        const db = await dbConnection.getDbConnection(); // Obtention de la connexion à la base de données
        // TODO: Ajoutez la logique pour supprimer un utilisateur ici
    }
};

// Exportation du modèle pour les opérations sur les utilisateurs
module.exports = commentairesModel;

//! Ce modèle usersModel contient des méthodes correspondant aux opérations de base sur les utilisateurs, 
//! telles que l'obtention de la liste de tous les utilisateurs (getAll), l'obtention d'un utilisateur spécifique (getOne), 
//! l'ajout d'un nouvel utilisateur (addUser), la mise à jour d'un utilisateur existant (updateUser) et la suppression 
//! d'un utilisateur existant (deleteUser).

//! Les commentaires expliquent comment chaque méthode est censée fonctionner. 
//! Vous devrez ajouter la logique spécifique à chaque méthode pour interagir avec la base de données 
//! SQL Server et effectuer les opérations sur les utilisateurs correspondantes. 