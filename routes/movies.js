const router = require('express').Router();

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const { validateId, validateMovie } = require('../middlewares/validations');

router.delete('/:id', validateId, deleteMovie);
router.get('/', getMovies);
router.post('/', validateMovie, createMovie);

module.exports = router;
