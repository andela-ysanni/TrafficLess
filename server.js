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
var passportInit = require('./passport-init');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var authenticate = require('')(passport);
var session = require('express-session');
var app = express();
var consolidate = require('consolidate');

var env = process.env.NODE_ENV || 'livesite';

// configuration ===========================================

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8000;
// connect to our livesite 
if (env === 'livesite') {
mongoose.connect(db.productionurl);
	
}
// connect to our production url
else {
    
	mongoose.connect(db.localurl);
}

//db.dbconnect();

// Set swig as the template engine
app.engine('server.view.html', consolidate['swig']);

// Set views path and view engine
app.set('view engine', 'server.view.html');
app.set('views', __dirname+'/public');

app.use(morgan());
app.use(bodyParser.json());
// set up our express application
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// Bootstrap passport config
passportInit();

app.use(bodyParser()); // get information from html forms
app.use(cookieParser());

app.use(session({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());



// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
userRoute(app);
updateRoute(app);

// app.get('*', function(req, res) {
//   res.sendFile( __dirname + '/index.html'); 
// });

app.get('*', function(req, res) {
  // res.sendFile('index.html', {
  //   root: './public'
  // });

  res.render('index', {
    user: req.session.user || null,
    request: req
  });
});

app.listen(port);

// shoutout to the user                     
console.log('This works....Yeahhhh ' + port);
exports = module.exports = app;
