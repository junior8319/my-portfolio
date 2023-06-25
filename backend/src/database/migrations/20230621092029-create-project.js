'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      snapshot: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      projectUrl: {
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      finishDate: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      stackId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'stacks',
          },
          key: 'id'
        },
        allowNull: true,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('projects');
  }
};