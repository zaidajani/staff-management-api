const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect('mongodb://localhost/staff-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Connected to mongoDb...');
  })
  .catch((err) => {
    console.log("err: ", + err);
  });

