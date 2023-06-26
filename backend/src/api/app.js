const express = require('express');
const cors = require('cors');
const { stacksRouter, projectsRouter } = require('../routes/index.routes');
const app = express();

app.use(express.json()); // for parsing application/json
app.use(cors()); // allow all origins

app.use('/stacks', stacksRouter);
app.use('/projects', projectsRouter);

module.exports = app;