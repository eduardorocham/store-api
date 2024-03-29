class ErrorBase extends Error {
  constructor(message='Server internal error', status=500) {
    super();
    this.message = message,
    this.status= status;
  }

  sendResponse(res) {
    res.status(this.status).send({
      message: this.message,
      status: this.status
    });
  }
}

module.exports = ErrorBase;