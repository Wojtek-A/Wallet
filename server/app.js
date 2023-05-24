const express = require('express');
// const cors = require('cors');

const app = express();

// app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server TEST!' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
