const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'users_verified';

class UsersVerified extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'UsersVerified',
            timestamps: false
        }
    }
} 

const UsersVerifiedSchema = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  }

    module.exports = { UsersVerified, UsersVerifiedSchema };