const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'users';

class Users extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'users',
            timestamps: false
        }
    }
} 

const UsersSchema = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    img_perfil: {
      type: DataTypes.STRING,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
  };

// UsersVerified.hasMany(Users, {
//   foreinkey: "projectId",
//   sourceKey: "id",
// });
// Task.belongsTo(Project, { foreinkey: "projectId", targetId: "id" });

module.exports = { Users, UsersSchema };