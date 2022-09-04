const {
  server: { defaultMessage },
} = require('../utils/http-request');

const errorHandler = (err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    res.status(err.statusCode).send({ message: defaultMessage });
  }

  next();
};

module.exports = errorHandler;
