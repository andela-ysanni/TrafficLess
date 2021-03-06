//'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  User = mongoose.model('User');

/**
 * Signup
 */
var Auth = {
  signup: function(req, res) {
    // Init Variables
    var user = new User(req.body);
    var message = null;

    // Add missing user fields
    user.provider = 'local';

    // Then save the user 
    user.save(function(err) {
      if (err) {
        return res.status(400).send({
          //message: errorHandler.getErrorMessage(err)
        });
      } else {
        // Remove sensitive data before login
        user.password = undefined;
        user.salt = undefined;

        req.login(user, function(err) {
          if (err) {
            res.status(400).send(err);
          } else {
            req.session.user = user;
            res.json(user);
          }
        });
      }
    });
  },

  /**
   * Signin after passport authentication
   */
  signin: function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err || !user) {
        res.status(400).send(info);
      } else {
        // Remove sensitive data before login
        user.password = undefined;
        user.salt = undefined;

        req.login(user, function(err) {
          if (err) {
            res.status(400).send(err);
          } else {
            req.session.user = user;
            res.json(user);
          }
        });
      }
    })(req, res, next);
  },

  /**
   * Signout
   */
  signout: function(req, res) {
    req.logout();
    res.redirect('/');
  }
};
module.exports = Auth;
