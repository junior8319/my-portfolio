const express = require('express');
const stacksProjectsController = require('../controllers/StacksProjects.controller');

const stacksProjectsRouter = express.Router();

stacksProjectsRouter.get('/', stacksProjectsController.getAllStacksProjects);
stacksProjectsRouter.get('/:stackId/:projectId', stacksProjectsController.getStackProjectByPk);

module.exports = {
  stacksProjectsRouter,
};