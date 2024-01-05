const express = require('express');
const router = express.Router(); 
const allPublicationsController = require('../controllers/allPublications.controllers');

router
    .get('/', allPublicationsController.get )
    .get('/:id', allPublicationsController.getById )
    .post('/', allPublicationsController.create )
    .put('/:id', allPublicationsController.update )
    .delete('/:id', allPublicationsController._delete );

module.exports = router;
