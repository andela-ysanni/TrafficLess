var user = require('../controllers/user_controllers');

module.exports = function(app) {
  app.get('/api/users', user.getAllUsers);
  app.post('/api/users', user.createUser);
  //to get a single user.
  app.get('/api/users/:user_id', user.getSingleUser);
  //to delete a single user.
  app.delete('/api/users/:user_id', user.deleteUser);
  //to update user info
  app.put('/api/users/:user_id', user.updateUser);
  // Finish by binding the item middleware
  app.param('user_id', user.userById);
};