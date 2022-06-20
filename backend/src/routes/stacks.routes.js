const express = require('express');
const stacksController = require('../controllers/Stacks.controller');

const stacksRouter = express.Router();

stacksRouter.get('/', stacksController.getAllStacks);

module.exports = {
  stacksRouter,
};