const { AllPublications, AllPublicationsSchema } = require('./AllPublications.model');
const { CommentsUsers, CommentsUsersSchema } = require('./CommentsUsers.model');
const { PostCreate, PostCreateSchema } = require('./PostCreate.model');
const { Publications, PublicationsSchema } = require('./Publications.model');
const { Users, UsersSchema } = require('./Users.model');
const { UsersVerified, UsersVerifiedSchema } = require('./UsersVerified.model');


function setupModels(sequelize) {
    AllPublications.init(AllPublicationsSchema, AllPublications.config(sequelize));
    CommentsUsers.init(CommentsUsersSchema, CommentsUsers.config(sequelize));
    PostCreate.init(PostCreateSchema, PostCreate.config(sequelize));
    Publications.init(PublicationsSchema, Publications.config(sequelize));
    Users.init(UsersSchema, Users.config(sequelize));
    UsersVerified.init(UsersVerifiedSchema, UsersVerified.config(sequelize));
}

module.exports = setupModels;
