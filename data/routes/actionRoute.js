const express = require('express');
const router = express.Router();

const db = require('../helpers/actionModel.js');

// Server
router.get('/', (req, res) => {
  // GET All
  db
    .get()
    .then(action => {
      res.json(action);
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
    .then(action => {
      res.json(action);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', (req, res) => {
  const action = req.body;

  db
    .insert(action)
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: 'Unable to create post!' });
    });
});

module.exports = router;
