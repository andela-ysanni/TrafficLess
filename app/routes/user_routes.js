var User = require('../controllers/user_controllers');

module.exports = function(app) {
  app.post('/api/user/newUser', User.CreateUser);
  //app.route('/users/me').get(users.me);
};
