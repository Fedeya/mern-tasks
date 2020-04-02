const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connection.then(() => {
  console.log('DB is Online');
});

connection.catch(err => {
  console.log('MONGODB_ERROR', err);
});