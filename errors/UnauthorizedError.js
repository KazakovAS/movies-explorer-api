const {
  unauthorized: { status },
} = require('../utils/http-request');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = status;
  }
}

module.exports = UnauthorizedError;
