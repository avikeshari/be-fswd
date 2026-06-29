const notesController = {
    getAllNotes: (request, response) => {
        response.json({message: 'GET'});
    },
    createNote: (request, response) => {
        response.json({message: 'POST'});
    },
    updateNote: (request, response) => {
        response.json({message: 'PUT'});
    },
    patchNote: (request, response) => {
        response.json({message: 'PATCH'});
    },
    deleteNote: (request, response) => {
        response.json({message: 'DELETE'});
    }
}

module.exports = notesController;