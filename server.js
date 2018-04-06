// Server Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Server
const server = express();

// Logger
const logger = (req, res, next) => {
  console.log('d-(OvO")z looks correct to me', req.body);

  next();
};

// Route Imports
const actionRouter = require('./data/routes/actionRoute.js');
const mapperRoute = require('./data/routes/mappersRoute.js');
const projectRoute = require('./data/routes/projectRoute.js');

// Middleware
server.use(express.json());
server.use(logger);
server.use(helmet());
server.use(cors());

// Server Code
server.get('/', (req, res) => {
  // API Check
  res.json({ api: 'Running..' });
});

// Routes
server.use('/api/action');
server.use('/api/posts');
server.use('/api/tags');

// Port
const port = 5000;
server.listen(port, () => console.log('API Running on port 5000'));
