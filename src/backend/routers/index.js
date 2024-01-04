const express = require('express'); 

const AllPublicationsRouter = require('./AllPublications.router');
const CommentsUsersRouter = require('./CommentsUsers.router');
const PostCreateRouter = require('./PostCreate.router');
const PublicationsRouter = require('./Publications.roter');
const UsersRouter = require('./Users.router');
const UsersVerifiedRouter = require('./UsersVerified.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/all-publications', AllPublicationsRouter);
  router.use('/comments-users', CommentsUsersRouter);
  router.use('/post-create', PostCreateRouter);
  router.use('/publications', PublicationsRouter);
  router.use('/users', UsersRouter);
  router.use('/users-verified', UsersVerifiedRouter);
}

module.exports = routerApi;
