const {
  notFound: { status },
} = require('../utils/http-request');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = status;
  }
}

module.exports = NotFoundError;
