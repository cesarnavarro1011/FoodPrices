const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'accounts_verified';

class AccountsVerified extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'AccountsVerified',
            timestamps: false,
        }
    }
} 

const AccountsVerifiedSchema = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: 'compositeIndex' 
    },
    fk_users: {
      type: DataTypes.INTEGER,
    } 
  }

module.exports = { AccountsVerified, AccountsVerifiedSchema };