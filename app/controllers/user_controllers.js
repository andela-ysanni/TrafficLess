 var User = require('../models/user_model');

 var newUser = {
 GetUser : function(req, res) {
    // use mongoose to get all users in the database.
    User.find(function(err, users) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);
      res.json(users); // return all nerds in JSON format
    });
  },

  CreateUser : function(req, res) {
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
  }
};
 
  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  // app.get('*', function(req, res) {
  //   res.sendfile('./index.html'); // load our public/index.html file
  // });
 module.exports = newUser; 