const {
  server: { status },
} = require('../utils/http-request');

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = status;
  }
}

module.exports = ServerError;
