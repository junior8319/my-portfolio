const { Project } = require('../database/models');

const getAllProjects = async () => {
  const projects = await Project.findAll();

  if (!projects) {
    return null;
  }

  return projects.map(project => project);
};

const getProjectById = async (id) => {
  const project = await Project.findByPk(Number(id));

  if (!project) return null;

  return project.dataValues;
};

const createProject = async (project) => {
  const newProject = await Project.create(project);

  if (!newProject) return null;

  return newProject.dataValues;
};

const updateProject = async (id, project) => {
  const projectToUpdate = await getProjectById(id);
  if (!projectToUpdate) return null;

  const updatedProject = await Project.update(project, { where: { id } });

  if (!updatedProject) return null;

  return updatedProject;
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
};