const ErrorBase = require("./ErrorBase.js");

class IncorrectRequest extends ErrorBase {
  constructor(message = "One or more data sent is incorrrect") {
    super(message, 400);
  }
}

module.exports = IncorrectRequest;
