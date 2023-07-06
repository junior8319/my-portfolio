'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StackProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Stack.belongsToMany(models.Project, { through: models.StackProject });
      models.Project.belongsToMany(models.Stack, { through: models.StackProject });
    }
  }
  StackProject.init({
    stackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  }, {
    sequelize,
    modelName: 'StackProject',
    tableName: 'stacksProjects',
    underscored: true,
    timestamps: false,
  });
  return StackProject;
};