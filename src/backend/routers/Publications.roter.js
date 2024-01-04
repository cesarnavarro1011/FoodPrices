const express = require('express');
const router = express.Router(); 
const Publications = require('../controllers/Publications.controllers');

router
    .get('/', Publications.get )
    .get('/:id', Publications.getById )
    .post('/', Publications.create )
    .put('/:id', Publications.update )
    .delete('/:id', Publications._delete );

module.exports = router;
