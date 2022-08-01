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

const findStackById = async (id) => {
  const stack = await Stack.findByPk(id);

  if (!stack) {
    return null;
  }

  return stack;
};

const updateStack = async (id, stack) => {
  const stackToUpdate = await findStackById(id);

  const updatedStack = await stackToUpdate.update(stack);

  if (!updatedStack) {
    return null;
  }

  return updatedStack;
};

const deleteStack = async (id) => {
  const stackToDelete = await findStackById(id);

  const deletedStack = await stackToDelete.destroy();

  if (!deletedStack) {
    return null;
  }

  return deletedStack;
};

module.exports = {
  getAllStacks,
  createStack,
  findStackById,
  updateStack,
  deleteStack,
};