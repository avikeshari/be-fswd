/*const http = require('http');
const server = http.createServer((request,response) => {
    response.end('Hello World!');
});
server.listen(3001,'localhost',() => {
    console.log("Running");
});*/
const express = require('express'); //importing express
const app = express(); //creating a server application using express()
app.get('/', (request,response) => {
    response.json({message: 'Hello World!'});
});
app.use((request,response,next) => {
    response.json({message: 'Route not found'});
});
app.listen(3001, 'localhost', () => {
    console.log('Server running at http://localhost:3001');
}); //starting the server to listen for http request