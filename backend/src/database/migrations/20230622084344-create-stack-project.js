'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('stacksProjects',
      {
        stackId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: {
              tableName: 'stacks',
            },
            key: 'id',
          },
        },
        projectId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: {
              tableName: 'projects',
            },
            key: 'id',
          },
        },
      },
    );
  },

  async down (queryInterface) {
    await queryInterface.dropTable('stacksProjects');
  }
};
