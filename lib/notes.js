const fs = require('fs');
const path = require('path');
// to generate random id for each note
const simpleRandomStringCreator = require('simple-random-string-creator'); 

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

function (id, note) {
    const result = notes.filter()[0];
    return result;
}

module.exports = {
    displayNotes,
    createNewNote,
    viewNoteById,
    
};

// index.js includes variables to show and hide an element
// activeNote = {} set to keep track of note in text area
// function -> const getNotes - GET
// function -> const saveNote - POST - body: JSON.stringify(note);
// function -> const deleteNote - DELETE  
// function -> const renderActiveNote - show if correct id, otherwise value = ""
// function -> const handleNoteSave const newNote = { title / text values}
    // saveNote(newNote).then(()) => { getAndRenderNotesI(); renderActiveNote();}
// function -> const handleNoteDelete / if(activeNoteid === noteId) { activeNote ={};}
    // deleteNote(noteId).then(() => { getAndRenderNotes(); renderActiveNote();})    
// function handleNoteView = sets active note and displays it
// function const handleNewNoteView sets activenote to empty object allowing user to enter new note
// function handleRenderSaveBtn - save note
// function renderNotelist = async(notes) => {
    // let jsonNotes = await notes.json() / let noteList.forEac((el) => (el.innerHTML = ''));
    // let noteListItems = [];
    // const createLi = (text, delBtn = true) = creates list item


// const getAndRenderNote = () => getNotes().then(renderNoteList);
// if (window.location.pathname === '/notes') {
    // saveNotBtn - handleNoteSave
    // newNoteBtn - handleNewNoteView
    // noteTitle - handleRenderSaveBtn
    // noteText - handleRenderSaveBtn

// getAndRenderNotes() - opens to page with button    
    
