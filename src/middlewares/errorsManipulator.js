const ErrorBase = require("../errors/ErrorBase.js");
const ValidationError = require("../errors/ValidationError.js");

const errorsManipulator = (error, req, res, next) => {
  if ((error.name = "SequelizeValidationError")) {
    new ValidationError(error).sendResponse(res);
  } else {
    new ErrorBase().sendResponse(res);
  }
};

module.exports = errorsManipulator;
