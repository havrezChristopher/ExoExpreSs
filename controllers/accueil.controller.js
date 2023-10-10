 
const accueilController = {

    // Méthode pour obtenir la liste de tous les utilisateurs
    getAccueil: async (req, res) => {
        res.render("index.ejs", { page: "pages/acceuil/acceuil.ejs" });
        
    },

};

// Exportation du contrôleur des utilisateurs
module.exports = accueilController;