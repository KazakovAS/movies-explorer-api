const {
  forbidden: { status },
} = require('../utils/http-request');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = status;
  }
}

module.exports = ForbiddenError;
