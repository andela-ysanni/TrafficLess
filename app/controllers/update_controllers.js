var Update = require('../models/update_model');
var _ = require('lodash');

var newUpdates = {
  getAllUpdates: function(req, res) {
    debugger;
    Update.find().sort('-createdOn').exec(function(err, updates) { // use mongoose to get all updates in the database
      if (err)
        res.send(err);
      res.json(updates);
    });
  },

  createUpdate: function(req, res) {
    var body = req.body;
    var update = new Update(body);
    update.save(function(err, update) {
      if (err)
        res.send(err);
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
  }
};
module.exports = newUpdates;
