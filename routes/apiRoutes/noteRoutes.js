const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require ('fs');
const path = require('path');
// to generate random id for each note
const randomstring = require('randomstring');



router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
  });

router.post('/notes', (req, res) => {
    let noteItem = req.body;
    console.log(noteItem)
    notes.push(noteItem);

    fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notes, null, 2)
  );

    res.json(noteItem);
  });

  router.post('/notes', (req, res) => {
      noteItem.id = randomstring.generate();
      console.log(noteItem.id);
      res.json(noteItem.id);
  });


module.exports = router;