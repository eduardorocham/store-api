const ErrorBase = require('../errors/ErrorBase.js');

const errorsManipulator = (error, req, res, next) => {
  if (error instanceof ErrorBase) {
    error.sendResponse(res);
  }
};

module.exports = errorsManipulator;