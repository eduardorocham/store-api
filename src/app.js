const express = require('express');
const rotes = require('./routes/index.js');

const app = express();

rotes(app);

module.exports = app;