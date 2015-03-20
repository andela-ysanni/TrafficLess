var Admin = require('../controllers/admin_controllers');
module.exports = function(app) {
	app.get('/api/admins', Admin.getAdminlist);
	app.post('/api/admins', Admin.createAdmin);
};