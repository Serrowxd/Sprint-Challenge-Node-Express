const express = require('express');
const router = express.Router();

const db = require('../helpers/projectModel.js');

// Server
router.get('/', (req, res) => {
  db
    .get()
    .then(project => {
      res.json(project);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
