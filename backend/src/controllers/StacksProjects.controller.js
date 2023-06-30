const stacksProjectsService = require('../services/StacksProjects.service');

const getAllStacksProjects = async (_request, response) => {
  try {
    const stacksProjectsList = await stacksProjectsService.getAll();

    if (!stacksProjectsList) {
      return response.status(404).json({
        message: 'Stacks associated with projects not found.',
      });
    }

    return response.status(200).json(stacksProjectsList);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: 'Internal server error' });
  }
};

const createStackProject = async (request, response) => {
  try {
    const newStackProject = await stacksProjectsService.createStackProject(request.body);

    if (!newStackProject) return response
      .status(400)
      .json({
        message: `Unable to associate this stackId: ${request.body.stackId} 
        with this projectId: ${request.body.projectId}`,
      });

    return response.status(201)
      .json({
        message: 'Successfully associated.',
        stackProject: newStackProject,
      });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  getAllStacksProjects,
  createStackProject,
}