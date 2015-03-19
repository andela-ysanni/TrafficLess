// app/routes.js

// grab the nerd model we just created
var User = require('./models/user');
var Location = require('./models/location');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/api/users', function(req, res) {
    // use mongoose to get all users in the database
    User.find(function(err, users) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);
      res.json(users); // return all nerds in JSON format
    });
  });

  app.post('/api/users', function(req, res) {
    // var body = {
    //   first_name: req.body.first_name,
    //   last_name: req.body.last_name,
    //   email: req.body.email
    // };
    var body = req.body;
    var user = new User(body);
    user.save(function(err, user) {
      if (user) {
        res.send(200, user);
      }
    });
  });

  app.get('/api/locations', function(req, res) {
    Location.find(function(err, locations) {
      if (err)
        res.send(err);
      res.json(locations);
    });
  });

  app.post('/api/locations/locate', function(req, res) {
    var body = req.body;
    var location = new Location(body);
    location.save(function(err, location) {
      if (err)
        res.send(err);
      res.send(200, location);
    });
  });
  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./index.html'); // load our public/index.html file
  });

};
