const express = require('express');
const router = express.Router(); 
const AllPublications = require('../controllers/AllPublications.controllers');

router
    .get('/', AllPublications.get )
    .get('/:id', AllPublications.getById )
    .post('/', AllPublications.create )
    .put('/:id', AllPublications.update )
    .delete('/:id', AllPublications._delete );

module.exports = router;
