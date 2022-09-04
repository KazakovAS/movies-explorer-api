require('dotenv').config();

const { MONGO_DB, PORT, JWT_SECRET } = process.env;
const MONGO_DUPLICATE_ERROR_CODE = 11000;
const SALT_ROUNDS = 10;

const ALLOWED_DOMAINS = [
  /https?:\/\/localhost:3000/,
  /https?:\/\/lerush.nomoredomains.sbs/,
];

module.exports = {
  MONGO_DB,
  PORT,
  JWT_SECRET,
  MONGO_DUPLICATE_ERROR_CODE,
  SALT_ROUNDS,
  ALLOWED_DOMAINS,
};
