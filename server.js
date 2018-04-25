// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Creating an Express server
var app = express();

// Setting the initial port
var PORT = process.env.PORT || 8080;

// Data parsing for the Express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Linking to the route files
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Listening to start the server
app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});