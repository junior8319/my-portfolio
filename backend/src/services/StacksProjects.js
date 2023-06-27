const { StackProject, Stack, Project } = require('../database/models');

const getAll = async () => {
  const stacksProjectsList = await StackProject.findAll({
    include: [Stack, Project],
  });

  if (!stacksProjectsList) return null;

  return stacksProjectsList.map(stackProject => stackProject);
};

module.exports = {
  getAll,
};