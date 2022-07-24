const  { Stack } = require('../database/models');

const getAllStacks = async () => {
  const stacks = await Stack.findAll();

  if (!stacks) {
    return null;
  }

  return stacks.map(stack => stack);
};

const createStack = async ({
  title,
  description,
  imageUrl,
  stackDocsUrl,
  stackUrl,
}) => {
  const newStack = await Stack.create({
    title,
    description,
    imageUrl,
    stackDocsUrl,
    stackUrl,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  if (!newStack) {
    return null;
  }

  console.log(newStack);

  return newStack;
};

module.exports = {
  getAllStacks,
  createStack,
};