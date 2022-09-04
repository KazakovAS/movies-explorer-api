const {
  badRequest: { status },
} = require('../utils/http-request');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = status;
  }
}

module.exports = BadRequestError;
