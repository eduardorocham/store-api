const DontFound = require('../errors/DontFound.js');

const manipulator404 = (req, res, next) => {
  const error404 = new DontFound();
  next(error404);
};

module.exports = manipulator404;