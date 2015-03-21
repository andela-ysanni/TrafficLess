// server.js

// modules =================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var userRoute = require('./app/routes/user_routes');
var updateRoute = require('./app/routes/update_routes');
// configuration ===========================================

// config files
var db = require('./config/db');
//console.log(db);

var app = express();

// set our port
var port = process.env.PORT || 4040;

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//override with the X-HTTP-Method-Overrithde header in the request. simulate DELETE/PUT
//app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use( express.static(__dirname + '/public'));

// routes =============//configure our routes
//creating a route for users.
userRoute(app);
//creating a route for locations.
updateRoute(app);

app.get('*', function(req, res) {
	//console.log('send index');
	//console.log(Object.keys(res));
	//console.log('send index done');
  res.sendFile( __dirname + '/index.html'); 
});

app.listen(port);

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app         
