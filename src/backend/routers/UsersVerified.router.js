const express = require('express');
const router = express.Router(); 
const usersVerifiedController = require('../controllers/usersVerified.controllers');

router
    .get('/', usersVerifiedController.get )
    .get('/:id', usersVerifiedController.getById )
    .post('/', usersVerifiedController.create )
    .put('/:id', usersVerifiedController.update )
    .delete('/:id', usersVerifiedController._delete );

module.exports = router;
