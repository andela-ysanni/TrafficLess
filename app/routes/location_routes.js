var Location = require('./models/location');
module.exports = function(app) {

  app.get('/api/locations', function(req, res) {
    Location.find(function(err, locations) {   // use mongoose to get all users in the database
      if (err)
        res.send(err);
      res.json(locations);
    });
  });

  app.post('/api/locations/locate', function(req, res) {
    var body = req.body;
    var location = new Location(body);
    location.save(function(err, location) {
      if (err)
        res.send(err);
      res.send(200, location);
    });
  });

};
