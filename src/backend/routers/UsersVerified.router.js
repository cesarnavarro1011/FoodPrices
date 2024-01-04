const express = require('express');
const router = express.Router(); 
const UsersVerified = require('../controllers/UsersVerified.controllers');

router
    .get('/', UsersVerified.get )
    .get('/:id', UsersVerified.getById )
    .post('/', UsersVerified.create )
    .put('/:id', UsersVerified.update )
    .delete('/:id', UsersVerified._delete );

module.exports = router;
