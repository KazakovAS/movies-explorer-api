const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');

const { MONGO_DB, ALLOWED_DOMAINS } = require('./utils/constants');
const routes = require('./routes');
const limiter = require('./middlewares/limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

mongoose.connect(MONGO_DB);

app.use(requestLogger);
app.use(helmet());
app.use(limiter);
// app.use(cors({ origin: ALLOWED_DOMAINS }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

module.exports = app;
