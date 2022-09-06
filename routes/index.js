const router = require('express').Router();

const userRouter = require('./users');
const movieRouter = require('./movies');
const authorization = require('../middlewares/authorization');
const {
  validateAuthorization,
  validateUser,
} = require('../middlewares/validations');
const notFoundPage = require('../middlewares/notFoundPage');
const { createUser, login } = require('../controllers/users');

router.post('/signup', validateUser, createUser);
router.post('/signin', validateAuthorization, login);

router.use(authorization);
router.use('/movies', movieRouter);
router.use('/users', userRouter);
router.use(notFoundPage);

module.exports = router;
