const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'users_verified';

class UsersVerified extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'users-verified',
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

  
  
  // UsersVerified.hasMany(Users, {
    //   foreinkey: "projectId",
    //   sourceKey: "id",
    // });
    // Task.belongsTo(Project, { foreinkey: "projectId", targetId: "id" });
    
    module.exports = { UsersVerified, UsersVerifiedSchema };