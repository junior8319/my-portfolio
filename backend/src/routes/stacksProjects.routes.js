const express = require('express');
const stacksProjectsController = require('../controllers/StacksProjects.controller');

const stacksProjectsRouter = express.Router();

stacksProjectsRouter.get('/', stacksProjectsController.getAllStacksProjects);

module.exports = {
  stacksProjectsRouter,
};