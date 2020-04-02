const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('./db');

const app = express();

// Config

app.set('port', process.env.PORT || 4000);

// Middlewares

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes

app.use('/api/users', require('./routes/users'));

// Listen

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});