// Définition du modèle pour les opérations sur les utilisateurs
const commentairesModel = {
    // Méthode pour obtenir la liste de tous les utilisateurs
    AllContact: async () => {
        
        const db = await dbConnection.AllContact(); // Obtention de la connexion à la base de données
        let result = await db.query('SELECT * FROM Commentaires '); // Exécution de la requête SQL pour obtenir tous les utilisateurs
        db.close(); // Fermeture de la connexion à la base de données
        return result.recordset; // Renvoie le résultat de la requête sous forme de tableau d'utilisateurs
    }}