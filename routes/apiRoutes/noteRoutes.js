const router = require('express').Router();
const notes = require('../../db/db.json');
const fs = require ('fs');

// use module 11 main for template and adjust as needed

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
  });

  router.post('/notes', (req, res) => {
      console.log(req.body)
      notes.push(req.body);

   
//    // add note to notes array here?  s/b lib/notes.js I think???
   fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes, null, 2)
  );

  res.json(req.body);
  });

module.exports = router;