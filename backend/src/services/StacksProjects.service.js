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

const updateStackProject = async (prevRegister, newRegister) => {
  const stackProjectToUpdate = await StackProject.findByPk(prevRegister);
  if (!stackProjectToUpdate) return null;

  const updatedStackProject = await StackProject.update(
    newRegister,
    {
      where: {
        stackId: prevRegister.stackId,
        projectId: prevRegister.projectId,
      },
    },
  );

  if (!updatedStackProject) return null;

  return updatedStackProject;
};

module.exports = {
  getAll,
  createStackProject,
  updateStackProject,
};