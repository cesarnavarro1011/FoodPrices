const express = require('express'); 

const allPublicationsRouter = require('./allPublications.router');
const commentsUsersRouter = require('./commentsUsers.router');
const postCreateRouter = require('./postCreate.router');
const publicationsRouter = require('./publications.roter');
const usersRouter = require('./Users.router');
const usersVerifiedRouter = require('./usersVerified.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/all-publications', allPublicationsRouter);
  router.use('/comments-users', commentsUsersRouter);
  router.use('/post-create', postCreateRouter);
  router.use('/publications', publicationsRouter);
  router.use('/users', usersRouter);
  router.use('/users-verified', usersVerifiedRouter);
}

module.exports = routerApi;
