const bcrypt = require('bcrypt');
const User = require('../models/user');

const BadRequestError = require('../errors/BadRequestError');
const UnauthorizedError = require('../errors/UnauthorizedError');
const NotFoundError = require('../errors/NotFoundError');
const ConflictError = require('../errors/ConflictError');

const {
  created: { status: createdStatus },
  badRequest: { userData, userId },
  unauthorized: { userDoesNotExist, incorrectAuthData },
  notFound: { user: notFoundUser },
  conflict: { emailIsUsed },
} = require('../utils/http-request');
const {
  MONGO_DUPLICATE_ERROR_CODE,
  SALT_ROUNDS,
} = require('../utils/constants');
const { generateToken } = require('../utils/jwt');

const getCurrentUser = (req, res, next) => {
  const id = req.user._id;

  User.findById(id)
    .orFail(() => new NotFoundError(notFoundUser))
    .then((user) => res.send(user))
    .catch(next);
};

const updateCurrentUser = (req, res, next) => {
  const id = req.user._id;
  const { name, email } = req.body;

  User.findByIdAndUpdate(
    id,
    { name, email },
    { new: true, runValidators: true },
  )
    .orFail(() => new NotFoundError(notFoundUser))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(userId));
      } else {
        next(err);
      }
    });
};

const createUser = (req, res, next) => {
  const { name, email, password } = req.body;

  bcrypt
    .hash(password, SALT_ROUNDS)
    .then((hash) => {
      return User.create({
        name,
        email,
        password: hash,
      })
    })
    .then((user) => {
      return res.status(createdStatus).send({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.name === 'ValidationError') {
        next(new BadRequestError(userData));
      } else if (err.code === MONGO_DUPLICATE_ERROR_CODE) {
        next(new ConflictError(emailIsUsed));
      } else {
        console.log(MONGO_DUPLICATE_ERROR_CODE);
        next(err);
      }
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError(userDoesNotExist);
      }

      return Promise.all([user, bcrypt.compare(password, user.password)]);
    })
    .then(([user, isPasswordCorrect]) => {
      if (!isPasswordCorrect) {
        throw new UnauthorizedError(incorrectAuthData);
      }

      return generateToken({ _id: user._id }, '7d');
    })
    .then((token) => res.send({ token }))
    .catch(next);
};

module.exports = {
  getCurrentUser,
  updateCurrentUser,
  createUser,
  login,
};
