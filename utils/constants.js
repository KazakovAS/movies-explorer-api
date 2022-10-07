require('dotenv').config();

const {
  MONGO_DB = 'mongodb://localhost:27017/moviesdb',
  PORT = 3000,
  JWT_SECRET = 'WABBA_LABA_DUB_DUB',
} = process.env;
const MONGO_DUPLICATE_ERROR_CODE = 11000;
const SALT_ROUNDS = 10;

const ALLOWED_DOMAINS = [
  /https?:\/\/localhost:3000/,
  /https?:\/\/localhost:3001/,
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
