const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require ('fs');
const path = require('path');
const randomstring = require('randomstring');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
  });

router.post('/notes', (req, res) => {
    let noteItem = req.body;
    console.log(noteItem)

    // assign 10 character random id to note
    noteItem.id = randomstring.generate(10);
    console.log(noteItem.id);
    notes.push(noteItem);

    fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notes, null, 2)
  );

    res.json(noteItem);
  });
  

// router.get('/notes', (req, res) => {
    
//     res.json(results);
// });

// router.delete('/notes', (req, res) => {
//     let goNote = notes[id];
//         if (req.query) {
//             goNote = deleteNote(req.query, goNote);
//         }
//     res.json(goNote)    
// });

module.exports = router;