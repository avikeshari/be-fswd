const express = require('express');
const notesController = require('../controllers/notesController');
const notesRouter = express.Router();
/*app.get('/', (request, response) => {
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
});*/
notesRouter.get('/', notesController.getAllNotes);
notesRouter.post('/', notesController.createNote);
notesRouter.put('/', notesController.updateNote);
notesRouter.patch('/', notesController.patchNote);
notesRouter.delete('/', notesController.deleteNote);
module.exports = notesRouter;