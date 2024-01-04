const express = require('express');
const router = express.Router(); 
const CommentsUsers = require('../controllers/CommentsUsers.controllers');

router
    .get('/', CommentsUsers.get )
    .get('/:id', CommentsUsers.getById )
    .post('/', CommentsUsers.create )
    .put('/:id', CommentsUsers.update )
    .delete('/:id', CommentsUsers._delete );

module.exports = router;
