const  { Stack } = require('../database/models');

const getAllStacks = async () => {
  const stacks = await Stack.findAll();

  if (!stacks) {
    return null;
  }

  return stacks.map(stack => stack);
};

const createStack = async (stack) => {
  const newStack = await Stack.create(stack);
  if (!newStack) {
    return null;
  }

  return newStack;
};

module.exports = {
  getAllStacks,
  createStack,
};