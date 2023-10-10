const menuModels = require("../models/menu.models");

const menuControleur = {
    
    getAll: async (reg, res) => {

        try {

        let allMenu = await menuModels.getAll();

        res.render("index.ejs", { page: "pages/menu/menu.ejs", allMenu: allMenu });

    } catch (error) {

        res.status(500).send("Erreur serveur (getAll)");
    }
    },

    getOne: async (req, res) => {

        try {

            let id = req.params.id;

            const OneMenu = await menuModels.getOne(id);

            res.render("index", { page: "pages/menu/menuPlats.ejs", OneMenu: OneMenu });

        } catch (error) {

            console.error("Erreur lors de la récupération de (id) pour les plats ", error);

            
        }
    }

};
module.exports = menuControleur;

