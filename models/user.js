const mongoose = require('mongoose');
const validator = require('validator');

const { invalidLink } = require('../utils/http-request');

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      minLength: 2,
      maxLength: 30,
    },
    email: {
      required: true,
      type: String,
      unique: true,
      validate: {
        validator: (link) => validator.isURL(link),
        message: invalidLink,
      },
    },
    password: {
      required: true,
      type: String,
      select: false,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('user', userSchema);
