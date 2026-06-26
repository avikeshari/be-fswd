const http = require('http');
const server = http.createServer((request,response) => {
    response.write("Hello!");
    response.end();
});
server.listen(3001,'localhost',() => {
    console.log("Running");
});