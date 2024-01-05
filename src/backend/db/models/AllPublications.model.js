const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'all_publications';

class AllPublications extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'AllPublications',
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
  };



module.exports = { AllPublications, AllPublicationsSchema };
