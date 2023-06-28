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

module.exports = {
  getAllStacksProjects,
}