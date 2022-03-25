const express = require('express');
const { default: mongoose } = require('mongoose');
const my_app = express();
const port = 4000;
require('dotenv').config()
const routerApi=require('./routes')
routerApi(my_app);

my_app.listen(port, () => {
  console.log('port active');
});

//endpoint : http://localhost:4000
my_app.get('/', (req, res) => {
  res.send('Api Marvel v1');
});

mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then(() => console.log('success connection'))
  .catch((error) => {
    console.error(error);
  });
