const http = require('http');
const server = http.createServer((request,response) => {
    response.setHeader('Content-Type', 'application/json');
    //response.writeHead(201, {'Content-Type': 'text/plain'});
    //response.writeHead(201, {'Content-Type': 'application/json'});
    //response.writeHead(201, {'Content-Type': 'text/html'});
    response.write("Hello!");
    /*response.write(
        <!DOCTYPE html>
        <html>
            <head>
                <title>NODEJS</title>
            </head>
            <body>
                <div>
                    <h1>Hello!</h1>
                    <p>Welcome!</p>
                </div>
            </body>
        </html>
    );*/
    response.end();
});
server.listen(3001,'localhost',() => {
    console.log("Running");
});