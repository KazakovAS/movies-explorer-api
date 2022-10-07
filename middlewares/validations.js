const { Joi, celebrate } = require('celebrate');
const { ObjectId } = require('mongoose').Types;

const { invalidId } = require('../utils/http-request');

const urlRegExp =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
const isLatinSymbols = /^[-?!,&*:—.A-Za-z0-9\s]+$/;
const isCyrillicSymbols = /^[-?!,&*:—.A-Za-zа-яА-ЯёЁ0-9\s]+$/;

const validateAuthorization = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateId = celebrate({
  params: Joi.object().keys({
    id: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (ObjectId.isValid(value)) {
          return value;
        }
        return helpers.message(invalidId);
      }),
  }),
});

const validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateUserInfo = celebrate({
  body: {
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  },
});

const validateMovie = celebrate({
  body: Joi.object().keys({
    movieId: Joi.number().required(),
    nameRU: Joi.string().required().pattern(isCyrillicSymbols),
    nameEN: Joi.string().required().pattern(isLatinSymbols),
    description: Joi.string().required(),
    country: Joi.string().required(),
    year: Joi.date().required(),
    duration: Joi.number().required(),
    director: Joi.string().required(),
    trailerLink: Joi.string().required().pattern(urlRegExp),
    image: Joi.string().required().pattern(urlRegExp),
    thumbnail: Joi.string().required().pattern(urlRegExp),
  }),
});

module.exports = {
  validateAuthorization,
  validateId,
  validateUser,
  validateUserInfo,
  validateMovie,
};
