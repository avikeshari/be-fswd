//middleware to log all requests on console or log file
const logger = (request, response, next) => {
    //console.log('Middleware');
    console.log(request.method, request.url);
    next(); //Pass request to next method
    //return response.json({message: 'Logging Requests'});
}
//exporting the middleware
module.exports = logger;