const fs = require('fs');
const path = require('path');

function displayNotes(action, notes) {
    let results = notes;
    // if/then
};

function createNewNote(body, notes) {
    const note = body;
    // add new note to "notes" array
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '..db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return note
}

function viewSavedNote(id, note) {
    const result = notes.filter(note => note.id === id)[0];
    return result;
}

module.exports = {
    displayNotes,
    createNewNote,
    saveNewNote,
    viewSavedNote
};