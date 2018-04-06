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
  // POST
  const action = req.body;

  db
    .insert(action)
    .then(response => {
      res.status(201).json(action);
    })
    .catch(error => {
      res.status(500).json({ error: 'Unable to create post!' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;

  db.update(id, update).then(count => {
    if (count > 0) {
      db.findById(id).then(updatePost => {
        res.status(200).json(updatedPost);
      });
    } else {
      res.status(404).json({ message: 'Post does not exist' });
    }
  });
});

module.exports = router;
