const express = require('express');
const path = require('path');
const app = express();

// Serve static files
// app.use(express.static(__dirname + 'vmtorres'));
app.use(express.static(path.join(__dirname, '/vmtorres')));

app.get('/api', function(req, res) {
  res.send('API works');
});

// Send all requests to index.html
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/vmtorres/index.html'));
});

// Default Heroku PORT
app.listen(process.env.PORT || 3600);