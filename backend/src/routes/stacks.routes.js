const express = require('express');
const stacksController = require('../controllers/Stacks.controller');

const stacksRouter = express.Router();

stacksRouter.get('/', stacksController.getAllStacks);
stacksRouter.post('/', stacksController.createStack);
stacksRouter.put('/:id', stacksController.updateStack);
stacksRouter.delete('/:id', stacksController.deleteStack);

module.exports = {
  stacksRouter,
};