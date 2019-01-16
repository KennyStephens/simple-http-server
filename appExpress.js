const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Welcome to my Express Node Server</h1>');
});

app.get('/api', (req, res, next) => {
  res.send(JSON.stringify({
    'Value 1': 'Hello',
    'Value 2': 'Kenny',
    'Value 3': 'Stephens'
  }))
});

app.listen(5000);