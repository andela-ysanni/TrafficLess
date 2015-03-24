var user = require('../controllers/user_controllers');
var auth = require('../controllers/users.auth.controller');

//var passport = require('passport');
module.exports = function(app, passport) {
  // Setting up the users authentication api
  app.route('/auth/signup').post(auth.signup);
  app.route('/auth/signin').post(auth.signin);
  app.route('/auth/signout').get(auth.signout);



  app.route('/api/users').get(user.getAllUsers);
  app.route('/api/users').post(user.createUser);
  //to get a single user.
  app.route('/api/users/:user_id').get(user.getSingleUser);
  //to delete a single user.
  app.route('/api/users/:user_id').delete(user.deleteUser);
  //to update user info
  app.route('/api/users/:user_id').put(user.updateUser);
  // Finish by binding the item middleware
  app.param('user_id', user.userById);

  // Setting the facebook oauth routes
  // app.route('/auth/facebook').get(passport.authenticate('facebook', {
  //   scope: ['email']
  // }));
  // app.route('/auth/facebook/callback').get(users.oauthCallback('facebook'));

};
