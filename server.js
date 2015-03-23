// server.js

// modules =================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var userRoute = require('./app/routes/user_routes');
var updateRoute = require('./app/routes/update_routes');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var authenticate = require('')(passport);
var session = require('express-session');
var app = express();

// configuration ===========================================

// config files
var db = require('./config/db');


// set our port
var port = process.env.PORT || 4040;

// connect to our mongoDB database 
mongoose.connect(db.url);

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(bodyParser.json());
// set up our express application
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser()); // get information from html forms




// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
userRoute(app);
updateRoute(app);

// app.get('*', function(req, res) {
//   res.sendFile( __dirname + '/index.html'); 
// });

app.get('*', function(req, res) {
     res.sendFile('index.html', { root: './public' });
});

app.listen(port);

// shoutout to the user                     
console.log('This works....Yeahhhh ' + port);
exports = module.exports = app;
