const express = require('express');
const routerCommentaires = express.Router();
const commentairesController = require('../controllers/commentaires.controller');


routerCommentaires.get("", commentairesController.getAll);
routerCommentaires.get("/add", commentairesController.getAddForm);
routerCommentaires.post("/add", commentairesController.getPost);

module.exports = routerCommentaires;

