const IncorrectRequest = require("./IncorrectRequest.js");

class ValidationError extends IncorrectRequest {
  constructor(error) {
    const errorMessage = Object.values(error.errors)
      .map((erro) => erro.message)
      .join("; ");

    super(`Has occurred the following errors: ${errorMessage}`);
  }
}

module.exports = ValidationError;
