const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'post_create';

class PostCreate extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'post-create',
            timestamps: false
        }
    }
} 

const PostCreateSchema = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imageurl: {
      type: DataTypes.STRING,
    },
    categories: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    prices: {
      type: DataTypes.INTEGER,
    },
    id_creator: {
      type: DataTypes.INTEGER,
    },
  };


// Project.hasMany(Task, {
//   foreinkey: "projectId",
//   sourceKey: "id",
// });
// Task.belongsTo(Project, { foreinkey: "projectId", targetId: "id" });

module.exports = { PostCreate, PostCreateSchema };
