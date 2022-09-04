const Movie = require('../models/movie');

const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');
const NotFoundError = require('../errors/NotFoundError');

const {
  created: { status: createdStatus },
  badRequest: { defaultMessage: badRequestDefaultMessage },
  forbidden: { defaultMessage: forbiddenDefaultMessage },
  notFound: { movie: movieNotFound },
} = require('../utils/http-request');

const getMovies = (req, res, next) => {
  Movie.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const owner = req.user._id;
  const {
    movieId,
    nameRU,
    nameEN,
    description,
    country,
    year,
    duration,
    trailerLink,
    image,
    thumbnail,
  } = req.body;

  Movie.create({
    movieId,
    owner,
    nameRU,
    nameEN,
    description,
    country,
    year,
    duration,
    trailerLink,
    image,
    thumbnail,
  })
    .then((movie) => res.status(createdStatus).send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(badRequestDefaultMessage));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  const userId = req.user._id;
  const { id } = req.params;

  Movie.findById(id)
    .orFail(() => new NotFoundError(movieNotFound))
    .then((movie) => {
      if (!movie.owner.equals(userId)) {
        return next(new ForbiddenError(forbiddenDefaultMessage));
      }

      return Movie.deleteOne(movie)
        .then(() => res.send(movie))
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
