const express = require('express');
const router = express.Router();

const db = require('../helpers/projectModel.js');

// Server
router.get('/', (req, res) => {
  // GET All
  db
    .get()
    .then(project => {
      res.json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  // GET ID
  const { id } = req.params;

  db
    .get(id)
    .then(project => {
      res.json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/add', (req, res) => {
  // POST
  const project = req.body;

  db
    .insert(project)
    .then(response => {
      res.status(201).json(project);
    })
    .catch(error => {
      res.status(500).json({ error: 'Unable to create post!' });
    });
});

module.exports = router;
