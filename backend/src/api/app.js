const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json()); // for parsing application/json
app.use(cors()); // allow all origins

module.exports = app;