const { Project } = require('../database/models');

const getAllProjects = async () => {
  const projects = await Project.findAll();

  if (!projects) {
    return null;
  }

  return projects.map(project => project);
};

module.exports = {
  getAllProjects,
};