const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const usersRouter = require('./routes/users');

const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database.js');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, '../build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../build')));

app.use('/user', usersRouter);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
})