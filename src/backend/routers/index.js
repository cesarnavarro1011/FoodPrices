const express = require('express'); 

const commentsUsersRouter = require('./commentsUsers.router');
const postFavoritesRouter = require('./postFavorites.router');
const publicationsRouter = require('./publications.router');
const usersRouter = require('./Users.router');
const AccountsVerifiedRouter = require('./accountsVerified.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/comments-users', commentsUsersRouter);
  router.use('/post-favorites', postFavoritesRouter);
  router.use('/publications', publicationsRouter);
  router.use('/users', usersRouter);
  router.use('/users-verified', AccountsVerifiedRouter);
}

module.exports = routerApi;
