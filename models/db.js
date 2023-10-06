// Import de la bibliothèque mssql pour interagir avec la base de données SQL Server
const mssql = require('mssql');

// Configuration de la connexion à la base de données à partir des variables d'environnement
const sqlConfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: process.env.DB_SERVER,
    options: {
        trustServerCertificate: true // Option de confiance du certificat du serveur (pour des connexions sécurisées)
    }
}

// Fonction pour obtenir une connexion à la base de données
const getDbConnection = async () => {
    return await mssql.connect(sqlConfig); // Établissement de la connexion avec la configuration spécifiée
}

// Fonction pour tester la connexion à la base de données
const testDbConnection = async () => {
    try {
        const db = await getDbConnection(); // Établissement de la connexion
        db.close(); // Fermeture de la connexion
        console.log(`*** Connexion sur le Port ==> (....)*** `); // Affichage d'un message de réussite
        return true; // Indication que la connexion a réussi
    } catch (error) {
        console.log("*** Connexion Not FunD ( Warning ) ***"); // Affichage d'un message d'erreur en cas d'échec
        console.error(error); // Affichage de l'erreur détaillée
        return false; // Indication que la connexion a échoué
    }
}

// Exportation des fonctions du modèle pour les utiliser ailleurs dans l'application
module.exports = {
    getDbConnection,
    testDbConnection
}
//! Ce modèle mssql gère la connexion à une base de données SQL Server. Voici ce qu'il fait :

//! Il importe la bibliothèque mssql.
//! Il configure la connexion à la base de données en utilisant des variables d'environnement 
//! telles que le nom d'utilisateur, le mot de passe, la base de données et le serveur SQL.
//! Il expose deux fonctions principales :

//! getDbConnection : Cette fonction établit une connexion à la base de données en utilisant la configuration spécifiée.
//! testDbConnection : Cette fonction tente de se connecter à la base de données, ferme la connexion si elle réussit, 
//! affiche un message de réussite et renvoie true. Si la connexion échoue, elle affiche un message d'erreur, 
//! affiche l'erreur détaillée et renvoie false.
//! Vous pouvez utiliser ce modèle pour établir des connexions à la base de données SQL Server dans votre application 
//! et effectuer des opérations de base de données. 