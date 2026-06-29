const express = require('express');
const logger = require('./middlewares/logger'); //Importing middleware
const errorRoute = require('./middlewares/errorRoute');
const notesRouter = require('./routes/notesRouter');
const app = express();
//use middleware
app.use(logger);
app.use('/', notesRouter);
app.use(errorRoute);

module.exports = app;