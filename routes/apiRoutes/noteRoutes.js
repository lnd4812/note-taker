const router = require('express').Router();
const simpleRandomStringCreator = require("simple-random-string-creator");
const {functionAquery, functionBid, functionC, validateNote} = require('../../lib/notes');
const {notes} = require('../../db/db');

// use module 11 main for template and adjust as needed

router.get('/notes', (req, res) => {
    let results = notes;
    if(req.query) {
        results=functionAquery(req.query, results);
    } res.json(results);
  });

  router.get('/notes/:id', (req, res) => {
      const result = functionBid(req.params.id, notes);
      if (result) {
          res.json(result);
      } else {
          res.send(404);
      }
  });

  router.post('/notes', (req, res) => {
      // need npm packages installation to assing unique ids 
      req.body.id = notes.length.toString();
  });

