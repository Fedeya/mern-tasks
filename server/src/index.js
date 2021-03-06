const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('./db');

const auth = require('./middleware/auth');

const app = express();

// Config

app.set('port', process.env.PORT || 4000);

// Middlewares

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', auth, require('./routes/projects'));
app.use('/api/tasks', auth, require('./routes/tasks'));

// Listen

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});