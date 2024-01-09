const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'post_favorites';

class PostFavorites extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'PostFavorites',
            timestamps: false
        }
    }
} 

const PostFavoritesSchema = {
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
    fk_allPublications: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    myFavorites: {
      type: DataTypes.BOOLEAN,
    }
  }

module.exports = { PostFavorites, PostFavoritesSchema };