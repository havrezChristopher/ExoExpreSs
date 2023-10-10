const { diskStorage } = require("multer");
const multer = require('multer');
const path = require('path');
const commentairesModels = require("../models/commentaires.models");
const commentairesSchemas = require('../schemas/commentairesShemas');

// const storage = diskStorage({
//     destination: './uploads',
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({storage: storage})
// Définition du contrôleur des utilisateurs
const commentairesController = {
    
    getAddForm: (req, res) => {

        res.render("index.ejs", { page: "pages/commentaires/getAdd.ejs" });
    
      },
    // Méthode pour obtenir la liste de tous les utilisateurs
    getAll: async (req, res) => {
        // Utilisation de la méthode asynchrone "getAll" du modèle pour obtenir tous les utilisateurs
        let allcommentaires = await commentairesModels.getAll();
        // Rendu de la page "getAll.ejs" en passant la liste des utilisateurs comme données
        res.render("index.ejs", { page: "pages/commentaires/getAllCommentaires.ejs", allcommentaires: allcommentaires });
        
    },



    getOne : (req, res) => {

    },

    getPost: async (req, res) => {
        try {
            console.log('Validata==>    Ok REdirect');
            const validatedData = await commentairesSchemas.validate(req.body);
            // validatedData.imagePath = req.file.path;
            await commentairesModels.getAdd(validatedData);
            console.log('Validata==>',validatedData);
            // res.json('User is correctly registered');
            res.redirect('/commentaires')
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    },

}

// const uploadMiddleware = upload.single('image');

module.exports = commentairesController