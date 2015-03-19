var Location = require('../models/location_model');

var newLocations = {
    getLocation: function(req, res) {
      Location.find(function(err, locations) { // use mongoose to get all users in the database
        if (err)
          res.send(err);
        res.json(locations);
      });
    },
 
  	createLocation: function (req, res) {
    var body = req.body;
    var location = new Location(body);
    location.save(function(err, location) {
      if (err)
        res.send(err);
      res.send(200, location);
    });
  }
};
module.exports = newLocations;
  // app.get('/api/locations', 

  // app.post('/api/locations/locate',
