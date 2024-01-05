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
      primaryKey: true,
      autoIncrement: true,
    },
    user_comment: {
      type: DataTypes.STRING,
    },
    id_users: {
      type: DataTypes.INTEGER,
    },
    id_publicate: {
      type: DataTypes.INTEGER,
    },
  };

// CommentsUsers.hasMany(Publications, {
//   foreinkey: "id_comments",
//   sourceKey: "id",
// });

module.exports = { CommentsUsers, CommentsUsersSchema };
