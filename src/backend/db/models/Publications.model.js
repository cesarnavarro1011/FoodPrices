const { Model, DataTypes, Sequelize } = require('sequelize');
const { CommentsUsers } = require('./commentsUsers.model');
const { AllPublications } = require('./allPublications.model');

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

// Publications.hasMany(CommentsUsers, {
//   foreinkey: "fk_publications",
//   sourceKey: "id",
// });
// Publications.hasOne(AllPublications, {
//   foreinkey: "fk_publications",
//   sourceKey: "id",
// });
// Task.belongsTo(Project, { foreinkey: "projectId", targetId: "id" });

module.exports = { Publications, PublicationsSchema };

