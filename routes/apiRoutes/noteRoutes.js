const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require ('fs');


router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
  });

router.post('/notes', (req, res) => {
    let noteItem = req.body;
    console.log(noteItem)
    notes.push(noteItem);

    // write note to db file
    fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  );

    res.json(noteItem);
  });

module.exports = router;