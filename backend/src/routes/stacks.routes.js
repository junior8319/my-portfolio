const express = require('express');
const stacksController = require('../controllers/Stacks.controller');

const stacksRouter = express.Router();

stacksRouter.get('/', stacksController.getAllStacks);
stacksRouter.post('/', stacksController.createStack);

module.exports = {
  stacksRouter,
};