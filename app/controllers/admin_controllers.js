var Admin = require('../models/admin_model');

var newAdmin = {
  getAdminlist: function(req, res) {
    Admin.find(function(err, admins) {
      if (err)
        res.send(err);
      res.json(admins);
    });
  },
  createAdmin: function(req, res) {
    var body = req.body;
    var admin = new admin(body);
    admin.save(function(err, admin) {
      if (user) {
        res.send(200, admin);
      }
    });
  }
};
module.exports = newAdmin;

// app.get('/api/users', function(req,res){

// });