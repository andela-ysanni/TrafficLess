var User = require('../controllers/user_controllers');

module.exports = function(app) {
  app.get('/api/users', User.GetUser);
  app.post('/api/users', User.CreateUser); 
};