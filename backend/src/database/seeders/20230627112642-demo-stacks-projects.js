'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('stacksProjects', [
      {
        stack_id: 3,
        project_id: 1,
      },
      {
        stack_id: 4,
        project_id: 1,
      },  
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('stacksProjects', null, {});
  }
};
