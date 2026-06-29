/*const http = require('http');
const server = http.createServer((request,response) => {
    response.end('Hello World!');
});
server.listen(3001,'localhost',() => {
    console.log("Running");
});*/
const app = require('./app');
app.listen(3001, 'localhost', (error) => {
    if (error) {
        console.log('Error in running the server');
        console.log(error.message);
        return;
    }
    console.log("Server running at localhost:3001");
});