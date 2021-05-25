const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

/**
 * Database connection
 */


/**
 * Routes
 */
const indexRoutes = require('./routes/router')
app.use('/', indexRoutes);


/**
 * Middlewares
 */
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Middleware para subir archivos estaticos
app.use(express.static('styles'));
app.use(express.static('pictures'));

/**
 * Settings
 */
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * App listening
 */
app.listen(app.get('port'), () =>{
    console.log(`Server on port: ${app.get('port')}`);
})


