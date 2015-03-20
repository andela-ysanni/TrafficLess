
var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
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
});


// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('admin', adminSchema);
//exports.fromLocationSchema = mongoose.model('user', fromLocationSchema);
