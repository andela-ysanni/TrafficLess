 var User = require('../models/user_model');

 var newUser = {
     getAllUsers: function(req, res) {
       // use mongoose to get all users in the database.
       User.find(function(err, users) {
         // if there is an error retrieving, send the error. 
         // nothing after res.send(err) will execute
         if (err)
           res.send(err);
         res.json(users); // return all users in JSON format
       });
     },
     // route to handle creating goes here (post)
     createUser: function(req, res) {
       // var body = {
       //   first_name: req.body.first_name,
       //   last_name: req.body.last_name,
       //   email: req.body.email
       // };
       var body = req.body;
       var user = new User(body);
       user.save(function(err, user) {
         if (err) 
          res.send(err);
         res.send(200, user);
       });
     },
     userById: function(req, res, next) {
       User.findById(req.params.user_id, function(err, user) {
         if (err)
           res.send(err);
         //putting the single user in the request.
         req.user = user;
         next();
       });
     },
     getSingleUser: function (req,res) {
        var user = req.user;
        res.json(user);
     },
     // route to handle delete goes here (app.delete)
     deleteUser: function(req, res) {
       User.remove({
         _id: req.params.user_id
       }, function(err, user) {
         if (err)
           res.send(err);
         res.json({ mesage: 'User Deleted Successfully!'});
       });
     },
     //route to update a user info
     updateUser: function(req, res) {
      // update the users info
      // save the user
      var user = req.body; 
      user.save(function(err) {
        if (err)
         res.send(err);
        res.json({ message: 'User updated Successfully!'});
          });
      }
    };

// frontend routes =========================================================
// route to handle all angular requests
// app.get('*', function(req, res) {
//   res.sendfile('./index.html'); // load our public/index.html file
// });
            
 module.exports = newUser;
