const express = require('express');
const logger = require('./middlewares/logger'); //Importing middleware
const errorRoute = require('./middlewares/errorRoute');
const app = express();
//use middleware
app.use(logger);
app.get('/', (request, response) => {
    response.json({message: 'Express GET'});
});
app.post('/', (request, response) => {
    response.json({message: 'Express POST'});
});
app.put('/', (request, response) => {
    response.json({message: 'Express PUT'});
});
app.patch('/', (request, response) => {
    response.json({message: 'Express PATCH'});
});
app.delete('/', (request, response) => {
    response.json({message: 'Express DELETE'});
});
app.get('/products', (request, response) => {
    response.json({message: 'Express GET PRODUCTS'});
});
app.use(errorRoute);

module.exports = app;