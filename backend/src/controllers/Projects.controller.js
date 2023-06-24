const ProjectsService = require('../services/Projects.service');

const getAllProjects = async (_request, response) => {
  try {
    const projects = ProjectsService.getAllProjects();

    if (!projects) {
      return response.status(404).json({
        message: 'Projects not found',
      });
    }

    return response.status(200).json(projects);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const getProjectById = async (request, response) => {
  try {
    const project = ProjectsService.getProjectById(request.params.id);

    if (!project) {
      return response.status(404).json({
        message: 'Project not found',
      });
    }

    return response.status(200).json(project);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
};