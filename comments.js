// Create web server using Express
const express = require('express');
const app = express();
const port = 3000;
// Import comments.js
const comments = require('./comments');

// Import body-parser
const bodyParser = require('body-parser');
// Configure body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));

// Set view engine to Pug
app.set('view engine', 'pug');

// Set route to display comments
app.get('/', (req, res) => {
  res.render('index', { comments: comments });
});

// Set route to display form
app.get('/new', (req, res) => {
  res.render('form');
});

// Set route to post comments
app.post('/new', (req, res) => {
  comments.push({ name: req.body.name, comment: req.body.comment });
  res.redirect('/');
});

// Listen to port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
