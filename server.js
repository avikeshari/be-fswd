/*const http = require('http');
const server = http.createServer((request,response) => {
    response.end('Hello World!');
});
server.listen(3001,'localhost',() => {
    console.log("Running");
});*/
const express = require('express');
const app = express();
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
app.listen(3001, 'localhost', (error) => {
    if (error) {
        console.log('Error in running the server');
        console.log(error.message);
        return;
    }
    console.log("Server running at localhost:3001");
});