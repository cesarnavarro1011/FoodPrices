const { Model, DataTypes, Sequelize } = require('sequelize');
const { CommentsUsers } = require('./commentsUsers.model');
const { AccountsVerified } = require('./accountsVerified.model');

const PERSON_TABLE = 'users';

class Users extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Users',
            timestamps: false
        }
    }
} 

const UsersSchema = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: 'compositeIndex' 
    },
    img_perfil: {
      type: DataTypes.STRING,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    phone: {
      type: DataTypes.REAL(),
    },
    userVerified: {
      type: DataTypes.BOOLEAN,
    },
    fk_post_favorites: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  };

// Users.hasOne(AccountsVerified, {
//   foreinkey: "fk_user",
//   sourceKey: "id",
// });


// Users.UsersVerified = Users.hasOne(UsersVerified);

// Users.hasMany(CommentsUsers, {
//   foreinkey: "fk_users",
//   sourceKey: "id",
// });

// Users.hasMany(PostCreate, {
//   foreinkey: "fk_users",
//   sourceKey: "id",
// });
// Task.belongsTo(Project, { foreinkey: "projectId", targetId: "id" });

module.exports = { Users, UsersSchema };