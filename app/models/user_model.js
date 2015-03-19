// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  first_name: {
    type: String,
    default: ''
  },
  last_name: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    required: 'Your username has to be unique'
  },
  password: {
    type: String,
    required: 'Your password should not be less than 8 characters.',
  },
  email: {
    type: String
  },
  date_registered: {
    type: Date,
    default: Date.now
  },
  traffic_update: []
});


// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('userSchema', userSchema);
//exports.fromLocationSchema = mongoose.model('user', fromLocationSchema);
