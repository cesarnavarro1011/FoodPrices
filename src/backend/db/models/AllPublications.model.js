const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'all_publications';

class AllPublications extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'all-publications',
            timestamps: false
        }
    }
} 

const AllPublicationsSchema = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_publicate: {
      type: DataTypes.INTEGER,
    },
    id_postcreate: {
      type: DataTypes.INTEGER,
    }
  };

// Project.hasMany(Task, {
//   foreinkey: "projectId",
//   sourceKey: "id",
// });
// Task.belongsTo(Project, { foreinkey: "projectId", targetId: "id" });

module.exports = { AllPublications, AllPublicationsSchema };
