const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/estudiantes', require('./routes/estudiantes.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
