const dbConnection = require('./db');
const mssql = require('mssql');

const menuModels = {

    getAll: async () => {
        const db = await dbConnection.getDbConnection();
        let result = await db.query('SELECT * FROM Plats');
        
            db.close();
            
            return result.recordset;
    },

    getOne: async (id) => {

        try {

            const db = await dbConnection.getDbConnection();

            const result = await db.request().query(`SELECT * FROM Plats WHERE ID = ${id}`);

            return result.recordset;

        } catch (error) {

            console.error('Plats=GetOne',error);
            res.status(500).send("Erreur serveur");

        }

    }

};
module.exports = menuModels;
