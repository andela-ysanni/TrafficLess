var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
	location : String
});
module.exports = mongoose.model('locationSchema', locationSchema);

