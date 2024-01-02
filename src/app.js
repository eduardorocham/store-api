const express = require('express');
const rotes = require('./routes/index.js');
const manipulator404 = require('./middlewares/manipulator404.js');
const errorsManipulator = require('./middlewares/errorsManipulator.js');

const app = express();

rotes(app);

app.use(manipulator404);
app.use(errorsManipulator);

module.exports = app;