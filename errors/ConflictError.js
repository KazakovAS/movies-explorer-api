const {
  conflict: { status },
} = require('../utils/http-request');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = status;
  }
}

module.exports = ConflictError;
