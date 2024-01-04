const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'publications';

class Publications extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'publications',
            timestamps: false
        }
    }
} 

const PublicationsSchema = {

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
    ratings: {
      type: DataTypes.INTEGER,
    },
    prices: {
      type: DataTypes.INTEGER,
    },
    id_comments: {
      type: DataTypes.STRING,
    },
};

// Project.hasMany(Task, {
//   foreinkey: "projectId",
//   sourceKey: "id",
// });
// Task.belongsTo(Project, { foreinkey: "projectId", targetId: "id" });

module.exports = { Publications, PublicationsSchema };

