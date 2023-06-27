const { StackProject, Stack, Project } = require('../database/models');

const getAll = async () => {
  const stacksProjectsList = await StackProject.findAll({
    include: [Stack, Project],
  });

  if (!stacksProjectsList) return null;

  return stacksProjectsList.map(stackProject => stackProject);
};

const createStackProject = async (stackProject) => {
  const newStackProject = await StackProject.create(stackProject);

  if (!newStackProject) return null;

  return newStackProject.dataValues;
};

module.exports = {
  getAll,
  createStackProject,
};