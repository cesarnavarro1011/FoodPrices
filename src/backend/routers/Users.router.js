const express = require('express');
const router = express.Router(); 
const usersController = require('../controllers/users.controllers');

router
    .get('/', usersController.get )
    .get('/:id', usersController.getById )
    .post('/', usersController.create )
    .put('/:id', usersController.update )
    .delete('/:id', usersController._delete );

module.exports = router;
