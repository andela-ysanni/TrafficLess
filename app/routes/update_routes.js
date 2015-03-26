var update = require('../controllers/update_controllers');

module.exports = function(app) {
  app.route('/api/updates').get(update.getAllUpdates);
  app.route('/api/updates').post(update.createUpdate);
  //to get a single user update.
  app.route('/api/updates/:update_id').get(update.getSingleUpdate);
  //to delete a single update.
  app.route('/api/updates/:update_id').delete(update.deleteUpdate);
  //to update update info
  app.route('/api/updates/:update_id').put(update.updateUpdate);
  // Finish by binding the item middleware
  app.route('/api/updates/update').post(update.getAParticularUpdate);
  app.param('update_id', update.updateById);
};


