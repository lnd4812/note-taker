const fs = require('fs');
const path = require('path');
// to generate random id for each note
const simpleRandomStringCreator = require('simple-random-string-creator'); 

function createNewNote(body, notes) {
    const note = body;
    // add new note to "notes" array
    notes.push(note);
    
    fs.writeFileSync(
        path.join(__dirname, '..db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return note;
}

function assignUniqueId (notes) {
    // create
    const id = simpleRandomStringCreator.randString();
    const result = notes.filter()[0];
    return result;
}

module.exports = {
    createNewNote,
    assignUniqueId
}

