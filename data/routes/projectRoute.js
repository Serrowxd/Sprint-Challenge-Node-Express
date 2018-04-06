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

module.exports = router;
