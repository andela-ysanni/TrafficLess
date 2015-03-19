var Location = require('../controllers/location_controllers');

module.exports = function(app) {
    app.get('/api/locations', Location.getLocation);
    app.post('/api/locations', Location.createLocation);
};
