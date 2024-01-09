const express = require('express');
const router = express.Router(); 
const accountsVerifiedController = require('../controllers/accountsVerified.controllers');

router
    .get('/', accountsVerifiedController.get )
    .get('/:id', accountsVerifiedController.getById )
    .post('/', accountsVerifiedController.create )
    .put('/:id', accountsVerifiedController.update )
    .delete('/:id', accountsVerifiedController._delete );

module.exports = router;
