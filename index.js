const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const port = 3000;
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

app.use('/', routes);
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});