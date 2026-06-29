const errorRoute = (request, response, next) => {
    console.log('Error Route');
    return response.json({message: 'Route Not Found'})
}
module.exports = errorRoute;