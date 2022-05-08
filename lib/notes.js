const fs = require('fs');
const path = require('path');

function displayNotes(someaction, notes) {
    let results = notes;
    // if/then
};

function createNewNote(body, notes) {
    const note = body;
    // add new note to "notes" array
    notes.push(note);
    // create
    const newId = randString();
    fs.writeFileSync(
        path.join(__dirname, '..db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return note
}

function viewNoteById(id, note) {
    const result = notes.filter(note => note.id === id)[0];
    return result;
}

module.exports = {
    displayNotes,
    createNewNote,
    viewNoteById,
    deleteNote
};