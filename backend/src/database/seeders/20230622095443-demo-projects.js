'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(
      'projects',
      [
        {
          title: 'Business Flow',
          snapshot: '',
          description: '',
          projectUrl: '',
          startDate: '',
          finishDate: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
