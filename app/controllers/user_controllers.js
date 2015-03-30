var User = require('../models/user_model');
 var _ = require('lodash');

 var newUser = {

   getAllUsers: function(req, res) {
     //use mongoose to get all users in the database.
     User.find(function(err, users) {
       // if there is an error retrieving, send the error. 
       // nothing after res.send(err) will execute
       if (err)
         res.json(err);
       res.json(users); // return all users in JSON format
     });
   },
   
   //route to handle creating goes here (post)
   createUser: function(req, res) { User.find().sort('-date_registered');
     // var body = {
     //   first_name: req.body.first_name,
     //   last_name: req.body.last_name,
     //   email: req.body.email
     // };
     var body = req.body;
     var user = new User(body);
     user.save(function(err, user) {
       if (err)
         res.json(err);
       res.json(user);
     });
   },

   userById: function(req, res, next) {
     User.findById(req.params.user_id, function(err, user) {
       if (err)
         res.json(err);
       //putting the single user in the request that will be available in the next function.
       req.user = user;
       next();
     });
   },

   getSingleUser: function(req, res) {
     var user = req.user;
     res.status(200).json(user);
   },

   // route to handle delete goes here (app.delete)
   deleteUser: function(req, res) {
     User.remove({
       _id: req.params.user_id
     }, function(err, user) {
       if (err)
         res.json(err);
       res.json({
         mesage: 'User Deleted Successfully!'
       });
     });
   },
   //route to update a user info
   updateUser: function(req, res) {
     // update the users info
     // save the user
     var user = req.user;
     if (user) {
       user = _.assign(user, req.body);
       user.date_registered = Date.now();
     }

     User.save(function(err, data) {
       if (err)
         res.json(err);
       res.json({
         message: 'User details updated Successfully!'
       });
     });
   }
 };

 module.exports = newUser;