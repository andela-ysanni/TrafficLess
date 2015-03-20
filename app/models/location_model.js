var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
  location: {
    type : String,
    required: 'Your username has to be unique',
  }
});
module.exports = mongoose.model('location', locationSchema);




// var mongoose     = require('mongoose');
// var Schema       = mongoose.Schema;

// var BearSchema   = new Schema({
//     name: String
// });

// module.exports = mongoose.model('Bear', BearSchema);
