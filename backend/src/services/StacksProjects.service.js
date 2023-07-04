const { StackProject, Stack, Project } = require('../database/models');

const getAll = async () => {
  const stacksProjectsList = await StackProject.findAll();

  if (!stacksProjectsList) return null;
  
  let stacks = await Stack.findAll();
  stacks = stacks.map((stack) => {
    return {
      id: stack.dataValues.id,
      title: stack.dataValues.title,
    };
  });

  let projects = await Project.findAll();
  projects = projects.map((project) => {
    return {
      id: project.dataValues.id,
      title: project.dataValues.title,
    };
  });

  return stacksProjectsList.map(stackProject => {
    const filteredStacks = stacks.filter((stack) => {
      if (stackProject.dataValues.stackId === stack.id) return stack.title;
    });

    const filteredProjects = projects.filter((project) => {
      if (stackProject.dataValues.projectId === project.id) {
        return project.title;
      }
    });

    let objectToReturn = stackProject.dataValues;

    if (filteredStacks.length > 0) objectToReturn = {
      ...objectToReturn,
      stacks: filteredStacks
    };

    if (filteredProjects.length > 0) objectToReturn = {
      ...objectToReturn,
      projects: filteredProjects
    };

    return objectToReturn;
  });
};

const getStackProjectByPk = async ({ stackId, projectId }) => {
  const stackProject = await StackProject.findByPk(Number(stackId), {
    where: {
      projectId: Number(projectId),
    },
  });
  if (!stackProject) return null;

  return stackProject.dataValues;
};

const createStackProject = async (stackProject) => {
  const newStackProject = await StackProject.create(stackProject);

  if (!newStackProject) return null;

  return newStackProject.dataValues;
};

const updateStackProject = async (prevRegister, newRegister) => {
  const { stackId, projectId } = prevRegister;
  const stackProjectToUpdate = await StackProject.findByPk(
    Number(stackId),
    {
      where: {
        projectId: Number(projectId),
      }
    }
  );
  if (!stackProjectToUpdate) return null;

  const updatedStackProject = await StackProject.update(
    newRegister,
    {
      where: {
        stackId: Number(stackId),
        projectId: Number(projectId),
      },
    },
  );

  if (!updatedStackProject) return null;

  return updatedStackProject;
};

const deleteStackProject = async (stackProject) => {
  const { stackId, projectId } = stackProject;
  const stackProjectToDelete = await StackProject
  .findByPk(
    Number(stackId),
    {
      where: {
        projectId: Number(projectId),
      },
    }
  );
  if (!stackProjectToDelete) return null;

  const deletedStackProject = await StackProject.destroy({
    where: {
      stackId: Number(stackId),
      projectId: Number(projectId),
    },
  });

  if (!deletedStackProject) return null;

  return deletedStackProject;
};

module.exports = {
  getAll,
  createStackProject,
  updateStackProject,
  deleteStackProject,
  getStackProjectByPk,
};