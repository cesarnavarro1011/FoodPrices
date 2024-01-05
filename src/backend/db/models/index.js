const { AllPublications, AllPublicationsSchema } = require('./allPublications.model');
const { CommentsUsers, CommentsUsersSchema } = require('./commentsUsers.model');
const { PostCreate, PostCreateSchema } = require('./postCreate.model');
const { Publications, PublicationsSchema } = require('./publications.model');
const { Users, UsersSchema } = require('./users.model');
const { UsersVerified, UsersVerifiedSchema } = require('./usersVerified.model');


function setupModels(sequelize) {
    AllPublications.init(AllPublicationsSchema, AllPublications.config(sequelize));
    CommentsUsers.init(CommentsUsersSchema, CommentsUsers.config(sequelize));
    PostCreate.init(PostCreateSchema, PostCreate.config(sequelize));
    Publications.init(PublicationsSchema, Publications.config(sequelize));
    Users.init(UsersSchema, Users.config(sequelize));
    UsersVerified.init(UsersVerifiedSchema, UsersVerified.config(sequelize));
}

module.exports = setupModels;
