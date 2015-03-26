var mongoose = require('mongoose');
var Update = require('../models/update_model');
var _ = require('lodash');
var bodyParser = require('body-parser');

var newUpdates = {
  getAllUpdates: function(req, res) {
    Update.find().sort('+postedOn').exec(function(err, updates) { // use mongoose to get all updates in the database
      if (err)
        res.send(err);
      res.json(updates);
    });
  },

  createUpdate: function(req, res) {
    var body = req.body;
    var update = new Update(body);

    update.save(function(err, update) {
      if (err) {
        return res.send(err);
      }
      res.status(200).send(update);
    });
  },

  updateById: function(req, res, next) {
    Update.findById(req.params.update_id, function(err, update) {
      if (err)
        res.send(err);
      //putting the single update in the request.
      req.update = update;
      next();
    });
  },

  getSingleUpdate: function(req, res) {
    var update = req.update;
    res.status(200).json(update);
    console.log('yeahhhhhhhh');
  },

  // route to handle delete goes here (app.delete)
  deleteUpdate: function(req, res) {
    Update.remove({
      _id: req.params.update_id
    }, function(err, update) {
      if (err)
        res.send(err);

      res.json({
        mesage: 'Traffic update Deleted Successfully!'
      });
    });
  },

  getAParticularUpdate: function(req, res) {
    console.log('aaa', req.body);
    //User.find({age: {$gte: 21, $lte: 65}}, callback);
    Update.find({
      "from": req.body.from,
      "to": req.body.to
    }, function(err, updates) {
      if (err) {
        return res.send(err);
      }
      res.json(updates);
    });
  },
  updateUpdate: function(req, res) {
    console.log(req.update);
    var update = req.update;
    if (update) {
      update = _.assign(update, req.body);
    }

    update.save(function(err, data) {
      if (err)
        res.json(err);
      res.json({
        update: data,
        message: 'Traffic update updated Successfully!'
      });
    });
  }
};
module.exports = newUpdates;
