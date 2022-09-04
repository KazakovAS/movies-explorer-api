const NotFoundError = require('../errors/NotFoundError');
const {
  notFound: { pageMessage },
} = require('../utils/http-request');

const notFoundPage = (req, res, next) => {
  next(new NotFoundError(pageMessage));
};

module.exports = notFoundPage;
