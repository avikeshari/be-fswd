const http = require('http');
const server = http.createServer((request,response) => {
    const parseURL = new URL(request.url, `http://${request.headers.host}`);
    const pathname = parseURL.pathname;
    const method = request.method;

    if(pathname === '/') {
        if(method === 'GET') {
            response.setHeader('Content-Type', 'application/json');
            response.write(JSON.stringify({message:'GET Root'}));
            response.end();
        }
        else if(method === 'POST') {
            response.setHeader('Content-Type', 'application/json');
            response.write(JSON.stringify({message:'POST Root'}));
            response.end();
        }
        else if(method === 'PUT') {
            response.setHeader('Content-Type', 'application/json');
            response.write(JSON.stringify({message:'PUT Root'}));
            response.end();
        }
        else if(method === 'PATCH') {
            response.setHeader('Content-Type', 'application/json');
            response.write(JSON.stringify({message:'PATCH Root'}));
            response.end();
        }
        else if(method === 'DELETE') {
            response.setHeader('Content-Type', 'application/json');
            response.write(JSON.stringify({message:'DELETE Root'}));
            response.end();
        }
    }
    else if(pathname === '/users') {
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify({message:'Users'}));
        response.end();
    }
    else if(pathname === '/products') {
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify({message:'Products'}));
        response.end();
    }
    //response.setHeader('Content-Type', 'application/json');
    //response.writeHead(201, {'Content-Type': 'text/plain'});
    //response.writeHead(201, {'Content-Type': 'application/json'});
    //response.writeHead(201, {'Content-Type': 'text/html'});
    //response.write("Hello!");
    //response.write(JSON.stringify({message:'World!'}));
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
    //response.end();
});
server.listen(3001,'localhost',() => {
    console.log("Running");
});