const  { Stack } = require('../database/models');

const getAllStacks = async () => {
  const stacks = await Stack.findAll();

  if (!stacks) {
    return null;
  }

  return stacks.map(stack => stack);
};

module.exports = {
  getAllStacks,
};