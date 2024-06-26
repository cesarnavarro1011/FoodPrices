const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'comments_users';

class CommentsUsers extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'CommentsUsers',
            timestamps: false
        }
    }
} 
const CommentsUsersSchema = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: 'compositeIndex' 
    },
    fk_users: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_comment: {
      type: DataTypes.STRING,
    },
    ratings: {
      type: DataTypes.STRING,
    },
  };

// CommentsUsers.hasMany(Publications, {
//   foreinkey: "id_comments",
//   sourceKey: "id",
// });

module.exports = { CommentsUsers, CommentsUsersSchema };
