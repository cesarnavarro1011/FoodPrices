const express = require('express');
const router = express.Router(); 
const UsersController = require('../controllers/users.controllers');

router
    .get('/', UsersController.get )
    .get('/:id', UsersController.getById )
    .post('/', UsersController.create )
    .put('/:id', UsersController.update )
    .delete('/:id', UsersController._delete );

module.exports = router;
