const stacksService = require('../services/Stacks.service');

const getAllStacks = async (_req, res) => {
  try {
    const stacks = await stacksService.getAllStacks();

    if (!stacks) {
      return res.status(404).json({
        message: 'Stacks not found',
      });
    }

    return res.status(200).json(stacks);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const createStack = async (req, res) => {
  try {
    const newStack = await stacksService.createStack(req.body);

    if (!newStack) {
      return res.status(400).json({
        message: 'Invalid request, please check your data',
      });
    }

    return res.status(200).json({ message: 'Stack created', stack: newStack });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getAllStacks,
  createStack,
};