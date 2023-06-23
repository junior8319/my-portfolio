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

module.exports = {
  getAllProjects,
  getProjectById,
};