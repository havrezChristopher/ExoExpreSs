
// Définition du contrôleur des utilisateurs
const contactController = {

    // Méthode pour obtenir la liste de tous les utilisateurs
    AllContact:(req, res) => {
     
        res.render("index.ejs", { page: "pages/contact/contact.ejs"});
        
    }}
 // Exportation du contrôleur des utilisateurs
module.exports = contactController;