const mongoose = require('mongoose');
const validator = require('validator');

const { invalidLink } = require('../utils/http-request');

const movieSchema = new mongoose.Schema(
  {
    movieId: {
      required: true,
      type: String,
    },
    owner: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    nameRU: {
      required: true,
      type: String,
    },
    nameEN: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    country: {
      required: true,
      type: String,
    },
    year: {
      required: true,
      type: Date,
    },
    duration: {
      required: true,
      type: Number,
    },
    director: {
      required: true,
      type: String,
    },
    trailerLink: {
      required: true,
      type: String,
      validate: {
        validator: (link) => validator.isURL(link),
        message: invalidLink,
      },
    },
    image: {
      required: true,
      type: String,
      validate: {
        validator: (link) => validator.isURL(link),
        message: invalidLink,
      },
    },
    thumbnail: {
      required: true,
      type: String,
      validate: {
        validator: (link) => validator.isURL(link),
        message: invalidLink,
      },
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('movie', movieSchema);
