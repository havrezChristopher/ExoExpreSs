const dbConnection = require('./db');
const mssql = require('mssql');

const commentairesModels = {

    getAll: async () => {

        const db = await dbConnection.getDbConnection();
        let result = await db.query('SELECT * FROM Commentaires ');
        db.close();
        return result.recordset;
    },

    getAdd: async (CommentData) => {
        try {
            console.log('model Comment');
            const db = await dbConnection.getDbConnection();
            const sqlQuery = new mssql.PreparedStatement(db);
            console.log('PreparedStatement');
            sqlQuery.input('Prenom', mssql.NVarChar, CommentData.Prenom);
            sqlQuery.input('Nom', mssql.NVarChar, CommentData.Nom);
            sqlQuery.input('Note', mssql.NVarChar, CommentData.Note);
            sqlQuery.input('Email', mssql.NVarChar, CommentData.Email);
            sqlQuery.input('Message', mssql.NVarChar, CommentData.Message);
            await sqlQuery.prepare('INSERT INTO Commentaires (Prenom, Nom, Note, Email, Message) VALUES (@Prenom,@Nom ,@Note ,@Email,  @Message)');
            console.log('Prepare');
            await sqlQuery.execute(CommentData);
            console.log('execute');
            db.close();
        } catch (error) {
            console.error(error);
        }
    },

    updateCom: async () => {
        const db = await dbConnection.getDbConnection();
    },

    deleteCom: async () => {
        const db = await dbConnection.getDbConnection();
    }
};


module.exports = commentairesModels;
