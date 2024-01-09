const express = require('express');
const router = express.Router(); 
const postFavoritesController = require('../controllers/postFavorites.controllers');

router
    .get('/', postFavoritesController.get )
    .get('/:id', postFavoritesController.getById )
    .post('/', postFavoritesController.create )
    .put('/:id', postFavoritesController.update )
    .delete('/:id', postFavoritesController._delete );

module.exports = router;
