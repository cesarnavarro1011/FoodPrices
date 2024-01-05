const express = require('express');
const router = express.Router(); 
const commentsUsersController = require('../controllers/commentsUsers.controllers');

router
    .get('/', commentsUsersController.get )
    .get('/:id', commentsUsersController.getById )
    .post('/', commentsUsersController.create )
    .put('/:id', commentsUsersController.update )
    .delete('/:id', commentsUsersController._delete );

module.exports = router;
