'use strict';

const express = require('express');
const { json } = require('body-parser');
const { join } = require('path');
const morgan = require('morgan');

const { name, description } = require('../package.json');
const { logger } = require('./logger');

const host = 'localhost';
const port = process.env.PORT || 3333;
const url = `http://${host}:${port}/`;

const app = express();

app.use(json());
app.disable('x-powered-by');
app.use(morgan('short', logger));

logger.info(`Starting ${name}`);
logger.info(description);

const server = new Promise(resolve => app.listen(port, () => {
  logger.info(`Listening on: ${url}`);
  resolve();
}));

app.use(express.static(join(__dirname, '..', 'frontend')));

module.exports = { server, url };
