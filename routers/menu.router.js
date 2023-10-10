const express = require('express')
const routerMenu=express.Router()
const menuControleur = require ('../controllers/menu.controller')


routerMenu.get("",menuControleur.getAll)
routerMenu.get('/:id',menuControleur.getOne)
module.exports = routerMenu;