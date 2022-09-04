const UnauthorizedError = require('../errors/UnauthorizedError');
const { checkToken } = require('../utils/jwt');
const {
  unauthorized: { defaultMessage },
} = require('../utils/http-request');

const authorization = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    next(new UnauthorizedError(defaultMessage));
  }

  let payload;
  const token = auth.replace('Bearer ', '');

  try {
    payload = checkToken(token);
  } catch (err) {
    next(new UnauthorizedError(defaultMessage));
  }

  req.user = payload;
  next();
};

module.exports = authorization;
