const express = require('express');
const router = express.Router(); 
const publicationsController = require('../controllers/publications.controllers');

router
    .get('/', publicationsController.get )
    .get('/:id', publicationsController.getById )
    .post('/', publicationsController.create )
    .put('/:id', publicationsController.update )
    .delete('/:id', publicationsController._delete );

module.exports = router;
