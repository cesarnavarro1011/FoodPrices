const express = require('express');
const router = express.Router(); 
const PostCreate = require('../controllers/PostCreate.controllers');

router
    .get('/', PostCreate.get )
    .get('/:id', PostCreate.getById )
    .post('/', PostCreate.create )
    .put('/:id', PostCreate.update )
    .delete('/:id', PostCreate._delete );

module.exports = router;
