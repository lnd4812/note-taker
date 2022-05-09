const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require ('fs');
const path = require('path');
const randomstring = require('randomstring');
// const retrieveNote = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
  });

  // router.get('/notes/:id', (req, res) => {
  //   const result = retrieveNote(req.params.id, notes);
  //   if (result) {
  //     res.json(result);
  //   } else {
  //     res.send(404);
  //   }
  // });


router.post('/notes', (req, res) => {
    let noteItem = req.body;
    // assign 10 character random id to note
    noteItem.id = randomstring.generate(10);
    console.log(noteItem);
    notes.push(noteItem);

    fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notes, null, 2)
  );

    res.json(noteItem);
});

// router.delete('/notes', (req, res) => {
//     let goNote = notes[id];
//         if (req.query) {
//             goNote = deleteNote(req.query, goNote);
//         }
//     res.json(goNote)    
// });

module.exports = router;