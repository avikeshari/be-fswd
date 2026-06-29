/*const http = require('http');
const server = http.createServer((request,response) => {
    response.end('Hello World!');
});
server.listen(3001,'localhost',() => {
    console.log("Running");
});*/
const express = require('express');
const app = express();
//middleware to log all requests on console or log file
const logger = (request, response, next) => {
    console.log('Middleware');
    next(); //Pass request to next method
    //return response.json({message: 'Logging Requests'});
}
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
const errorRoute = (request, response, next) => {
    console.log('Error Route');
    return response.json({message: 'Route Not Found'})
}
app.use(errorRoute);
app.listen(3001, 'localhost', (error) => {
    if (error) {
        console.log('Error in running the server');
        console.log(error.message);
        return;
    }
    console.log("Server running at localhost:3001");
});