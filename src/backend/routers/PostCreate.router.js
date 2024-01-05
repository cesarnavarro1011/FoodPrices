const express = require('express');
const router = express.Router(); 
const postCreateController = require('../controllers/postCreate.controllers');

router
    .get('/', postCreateController.get )
    .get('/:id', postCreateController.getById )
    .post('/', postCreateController.create )
    .put('/:id', postCreateController.update )
    .delete('/:id', postCreateController._delete );

module.exports = router;
