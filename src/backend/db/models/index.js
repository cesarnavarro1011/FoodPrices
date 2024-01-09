const { CommentsUsers, CommentsUsersSchema } = require('./commentsUsers.model');
const { PostFavorites, PostFavoritesSchema } = require('./postFavorites.model');
const { Publications, PublicationsSchema } = require('./publications.model');
const { Users, UsersSchema } = require('./users.model');
const { AccountsVerified, AccountsVerifiedSchema } = require('./accountsVerified.model');


function setupModels(sequelize) {
    CommentsUsers.init(CommentsUsersSchema, CommentsUsers.config(sequelize));
    PostFavorites.init(PostFavoritesSchema, PostFavorites.config(sequelize));
    Publications.init(PublicationsSchema, Publications.config(sequelize));
    Users.init(UsersSchema, Users.config(sequelize));
    AccountsVerified.init(AccountsVerifiedSchema, AccountsVerified.config(sequelize));
}

module.exports = setupModels;
