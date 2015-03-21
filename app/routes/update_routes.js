var update = require('../controllers/update_controllers');

module.exports = function(app) {
  app.get('/api/updates', update.getAllUpdates);
  app.post('/api/updates', update.createUpdate);
  //to get a single user update.
  app.get('/api/updates/:update_id', update.getSingleUpdate);
  //to delete a single update.
  app.delete('/api/updates/:update_id', update.deleteUpdate);
  //to update update info
  app.put('/api/updates/:update_id', update.createUpdate);
  // Finish by binding the item middleware
  app.param('updates_id', update.updateById);
};
